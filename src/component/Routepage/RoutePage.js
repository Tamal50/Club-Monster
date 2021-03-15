import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './RoutePage.css'


const RoutePage = () => {

   const {id} =useParams();
   const [team1, setTeam1] = useState ({});
   console.log(team1)
  useEffect(() => {
      fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then(res => res.json())
      .then(data => setTeam1(data.teams[0]))
  }, [])
  
    return (
                 <div>
                   <div className="Details">
                       <h2 id="Name"> {team1.strTeam}</h2>
                        <h2>Country : {team1.strCountry}</h2>
                        <h2>Founded : {team1.intFormedYear}</h2>
                        <h2>Gender : {team1.strGender}</h2>
                   </div>
                  <div>
                      <p id="Description">Description : {team1.strDescriptionEN}</p>
                  </div>

                 </div>
    );
};

export default RoutePage;