import React, { useState, useEffect } from "react";
import axios from 'axios';

const AuthorForm = (props) => {

    const {initialAuthor, onSubmitProp} = props;

    const [author, setAuthor] = useState(initialAuthor);

    // handle
    const handleOnChange = (e) => {
        setAuthor({
            ...author,
            [e.target.name] : e.target.value
        })
    }

    // onSubmit - createAuthor
    const handleCreateAuthor = (e) => {
        e.preventDefault();
        onSubmitProp(author);
        // Para resetear el nombre que sale en el formulario
        setAuthor(initialAuthor);
    }


    return (
        <div>
        <form onSubmit={handleCreateAuthor} >
            <div>
                <label htmlFor="name">Author Name : </label>
                <input onChange={handleOnChange} type="text" name='name' value={author.name} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    )
}

export default AuthorForm;