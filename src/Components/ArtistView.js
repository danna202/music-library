import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

function ArtistView() {
    const { id } =useParams()
    const [ artistData, setArtistData ] = useState([])
    // const albums = artistData.filter(entry => entry.CollectionType === 'Album')
    const albumDisplay = artistData.map(album => {
        return (
            <div key={album.collectionId}>
                <p>{album.collectionName}</p>

            </div>
        )

        
    })
    useEffect(()=> {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData =async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            console.log(resData)
            const albums = resData.results(entry => entry.CollectionType === 'Album')
            setArtistData(resData.results)
         

        }
        fetchData()
    }, [id])

    return (
        <div>
            <h1>id: {id}</h1>
            {albumDisplay}
        </div>
    )
}

export default ArtistView
