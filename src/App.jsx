import { useState } from 'react'
import './App.css'
import DirectorsInfo from './components/Directors-Info/DirectorsInfo'
import Directors from './components/Directors/Directors'

function App() {

  const [details, setDetails] = useState([]);

  const handleDetails = (directors) => {
      const newDetails = [...details, directors];
      setDetails(newDetails);
  }

  const handleRemove = (detail, id) => {
     const removedItems = details.filter(detail => detail.id !== id);
     setDetails(removedItems);
  }

  return (
     <div className='flex justify-between '>
      <Directors 
          handleDetails={handleDetails}>
      </Directors>
      <DirectorsInfo 
          details ={details}
          handleRemove={handleRemove}>
      </DirectorsInfo>
     </div> 
  )
}

export default App
