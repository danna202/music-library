import { useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './Components/SearchBar';
import Gallery from "./Components/Gallery";
import { DataContext } from './Context/DataContext';
import AlbumView from './Components/AlbumView';
import ArtistView from './Components/ArtistView'

function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState([])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  useEffect(() => {
    if (search) {
    const fetchData = async () => {
        const BASE_URL = 'https://itunes.apple.com/search?term='
        const encodedSearchTerm = encodeURIComponent(search)
        const url = BASE_URL + encodedSearchTerm
        const response = await fetch(url)
        const data = await response.json()
       
        if (data.results.length > 0) {
          setData(data.results)
        } else {
          setMessage('Results not found')
        }
        console.log(data)
      }
        
      fetchData()
    }
  }, [search])

  return (
    <div >
      <SearchBar handleSearch={handleSearch}/>
      {message}

      <DataContext.Provider value={data}>
         <Gallery data={data}/>
         <AlbumView />
         <ArtistView />
      </DataContext.Provider>
    </div>
  );
}


export default App;
