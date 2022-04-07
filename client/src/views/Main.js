import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';


import AuthorForm from '../components/AuthorForm';
import AuthorsList from '../components/AuthorsList';


const Main = () => {

    //const historty
    const history = useHistory();

    //const load
    const [loaded, setLoaded] = useState(true);

    // para la lista de autores
    const [authors, setAuthors] = useState([]);

    // estado inicial
    const initialAuthor = {
        name: ""
    }
    
    // Render inicial
    useEffect (() => {
        axios.get('http://localhost:8000/authors').then((res) => {
            setAuthors(res.data);
            setLoaded(true);
        });
    }, [authors]);



    // Submit create
    const createAuthor = async (author) => {
        axios.post("http://localhost:8000/create", author)
            .then(setAuthors(author =>[...authors, author]),
            setLoaded(false)
            )
        }
    // {loaded &&( )} permite recargar a los elementos que engloba
    return (
        
        <div>
            <h1>Favorite Authors</h1>
            {loaded && (
                <div>
                    <AuthorForm initialAuthor={initialAuthor} onSubmitProp={createAuthor}/>
                    <AuthorsList />
                </div>
                
            )}
            <hr />
        </div>
    )

}
export default Main;