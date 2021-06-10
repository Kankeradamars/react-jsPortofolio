import React from 'react';
import Home from '../views/Home';
import {Route, Switch} from 'react-router-dom';


const Index=()=>{
return (
<switch>
    <Route component={Home} exact path={["/","/home"]}/>

</switch>
)
}

export default Index;