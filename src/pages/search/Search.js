import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Search = () => {

    const { search } = useLocation()
    const busca = new URLSearchParams(search).get("q")
    const { documents } = useFetchDocuments("post", busca)
    
  return (
    <div>
        <h3>Resultado da busca para a tag: <span>{busca}</span></h3>
        {documents && documents.map(document => (
            <>
                <h1>{document.title}</h1>
                <img src={document.image}/>
                <p>por: <span>{document.createdBy}</span></p>
                <p>{document.body}</p>
                <div>
                    {document.tags.map(tag => (
                        <p>{tag}</p>
                    ))}
                </div>
            </>
        ))}
    </div>
  )
}

export default Search