import React from 'react'

const Just = () => {
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '298b6cf17amsh15d4dee6ed86a82p1730a6jsn09a3d5db2424',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=452', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
    
  return (
    <div>
    <button > i like you</button>
    </div>
  )
}

export default Just