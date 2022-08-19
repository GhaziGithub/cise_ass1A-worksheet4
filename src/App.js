import React from "react";

import {Router} from 'react-router-dom'
const App = () =>  {
    return (
        <div>
          <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
            <ul className="header">
                <li><a href = "/">Home</a></li>
                <li><a href = "/SEPractice">Select the Practice</a></li>
                <li><a href = "/SubmitArticle">Submit an Article</a></li>
            </ul>
          <div className="content">
          </div>
        </div>
    );
}
 
export default App;