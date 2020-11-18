import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from './landingpage';
import Aboutme from './aboutme';
import Contact from './contact';
import Project from './project';
import Resume from './resume';

const Main = () => (
<Switch>
<Route exact path="/" component={Landing}/>
<Route path="/aboutme" component={Aboutme}/>
<Route path="/project" component={Project}/>
<Route path="/resume" component={Resume}/>
<Route path="/contact" component={Contact}/>
</Switch>

)

export default Main;