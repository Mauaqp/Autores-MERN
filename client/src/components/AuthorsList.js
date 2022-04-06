import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const AuthorsList = (props) => {

    const [authors, setAuthors] = useState([]);

    //FIND ALL
    const findAllAuthors = async() => {
        const response = await axios.get("http://localhost:8000/authors")
        console.log("Response :", response.statusText);
        // Cuidar de no dar mas niveles de precision: 
        //setAuthors(response.data.authors) <=== ESTE BOTABA ERROR
        setAuthors(response.data);
        }

    // USE EFFECT PARA RENDERIZADO EN CARGA 
    useEffect(() => {
        findAllAuthors()
    }, [])

    return (
        <div>
            <p>We have quotes from: </p>
            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Author</th>
                        <th>Action Available</th>
                    </tr>
                </thead>
                <tbody>
                {
                    authors.map((author,index)=>
                        <tr key={index}>
                            <th>{index+1}</th> 
                            <td>{author.name}</td>
                            <td>Actions</td>
                        </tr>
                    )
                }  
                </tbody>
            </table>
        </div>
    )

}

export default AuthorsList;