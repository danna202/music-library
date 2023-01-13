import { response } from "express"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'


function ArtistView() {
    const { id } = useParams()
    cont [ artistData, setArtistData] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    )
     
    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const rsponse = await fetch(API_U)
            const resData = await response.json()
            console.log(resData)
        }
        fetchData()
    }, [id])
         
    }




export default ArtistView