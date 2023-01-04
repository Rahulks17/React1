import React,{useState, useEffect} from 'react'
import { View } from './components/View';

const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  const [books, setbooks]=useState(getDatafromLS());

  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [number, setNumber]=useState('');

  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    let book={
      name,
      number,
      email,
      password
    }
    setbooks([...books,book]);
    setName('');
    setNumber('');
    setEmail('');
    setPassword('');
  }

  const deleteBook=(password)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.password !== password
    })
    setbooks(filteredBooks);
  }

  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div className='wrapper'>
      <h1>User Registration</h1>
      
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label><b>Name</b></label>
            <input placeholder= "Enter your name" type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label><b>Contact Number</b></label>
            <input placeholder= "Enter your mobile number" type="number" className='form-control' required
            onChange={(e)=>setNumber(e.target.value)} value={number}></input>
            <br></br>
            <label><b>UserID</b></label>
            <input placeholder= "Enter your e-mail address" type="email" className='form-control' required
            onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <br></br>
            <label><b>Password</b></label>
            <input placeholder= "Enter a strong password" type="password" className='form-control' required
            onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
            Submit
            </button>
              
            
          </form>
        </div>

        <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <View books={books} deleteBook={deleteBook}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setbooks([])}>Delete All</button>
          </>}
          {books.length < 1 && <div><b>No Entries</b></div>}
        </div>

      </div>
    </div>
  )
}

export default App