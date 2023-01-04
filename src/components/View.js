import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'


export const View = ({books,deleteBook}) => {
    
    return books.map(book=>(
       
        
        <tr key={book.name}>
            <td>{book.name}</td>
            <td>{book.email}</td>
            <td>{book.number}</td>
            <td className='delete-btn' onClick={()=>deleteBook(book.isbn)}>
                <Icon icon={trash}/>
            </td>           
        </tr>   
        
        
    
))
}