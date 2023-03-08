import axios from "axios";

import React, { useState,useEffect } from "react";
function Main(){
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/get')
          .then(response => {
              setQuotes(response.data);
          })
          .catch(error => {
              console.log(error);
          });
  }, []);
  
    return (
      <div className="body">
      <div className="navbar">
        
      </div>
      <div>
        <p className="head">
          Data Info
        </p>
      </div>
      <div className="table">
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Smoking</th>
              <th>yellow_fingers</th>
              <th>wheezing</th>
           
            </tr>
          </thead>
          <tbody>
             {quotes.map(quote =>(
              <tr key={quote.name}>
              <td>{quote.name}</td>
              <td>{quote.age}</td>
              <td>{quote.smoking}</td>
              <td>{quote.yellow_fingers}</td>
              <td>{quote.wheezing}</td>
              </tr>

             )
          
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Main;