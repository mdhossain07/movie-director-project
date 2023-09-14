/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import './App.css'
import DirectorsInfo from './components/Directors-Info/DirectorsInfo'
import Directors from './components/Directors/Directors'
import { addToLS, getStoredData } from './assets/utilities/localStorage';

function App() {

  const [details, setDetails] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
        if(details.length){
            const getCart = getStoredData();
            // console.log(getCart);
            const productCart = [];
            for(const id of getCart){
                const matchedProducts = details.find(detail => detail.id === id);
                productCart.push(matchedProducts);
            }
            // setDetails(productCart);
        }
    }, [details])

  const handleDetails = (directors) => {
    const isExisted = details.find(actor => actor.id === directors.id);
    if(isExisted){
      return alert('already added');
    }
    else{
      if (budget + directors.salary >= 20000){
        return alert('Budget Exceeded!');
      }
      else{
        setBudget(budget + directors.salary);
        setDetails([...details, directors]);
        }
      }
      // addToLS(directors.id);
    }
    console.log(budget);

  const handleRemove = (detail, id) => {
        const removedItems = details.filter(detail => detail.id !== id);
        setDetails(removedItems);
        setBudget(budget - detail.salary);
    }

  return (
     <div className='flex justify-between '>
      <Directors 
          handleDetails={handleDetails}>
      </Directors>
      <DirectorsInfo 
          details = {details}
          handleRemove={handleRemove}
          budget={budget}>
      </DirectorsInfo>
     </div> 
  )
}

export default App
