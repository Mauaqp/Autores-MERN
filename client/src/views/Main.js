import React, { useEffect, useState } from 'react'
import axios from 'axios';


import AuthorForm from '../components/AuthorForm';
import AuthorsList from '../components/AuthorsList';


const Main = () => {

    //const load
    const [loaded, setLoaded] = useState(true);

    // para la lista de autores
    const [authors, setAuthors] = useState([]);

    // estado inicial
    const initialAuthor = {
        name: ""
    }
    
    // Render inicial

    // Submit
    const createAuthor = async (author) => {
        axios.post("http://localhost:8000/create", author)
            .then(setAuthors(author =>[...authors, author]),
            )
    }
    
    return (
        
        <div>
            <h1>Favorite Authors</h1>
            {loaded && (
                <AuthorForm initialAuthor={initialAuthor} onSubmitProp={createAuthor}/>
            )}

            <hr />
            <AuthorsList />
        </div>
    )

}
export default Main;