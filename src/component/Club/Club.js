import React, { useEffect, useState } from 'react';
import './club.css'
import Team from '../Team/Team'
import RoutePage from '../Routepage/RoutePage'
import Header from '../Header/Header';

const Club = () => {
  const [team, setTeam] = useState ([]);

  useEffect(() => {
      fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
      .then(res => res.json())
      .then(data => setTeam(data))
  }, [])
  
    return (
      <div>
        <Header></Header>
        <div className = "row">
         
            {
              team.teams?.map(team => <Team team={team}></Team>)
            }
            
        </div>
      </div>
         
    );
};

export default Club;