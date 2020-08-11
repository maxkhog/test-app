import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { MainPage } from 'pages/MainPage'

export const Root = () => {
    return (<>
     <Router>
         <Route path='/:filter?' component={MainPage}/>
     </Router>
    </>)
}