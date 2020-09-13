import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';

import Contact from './contact';
import Services from './Services';
import Resume from './resume';


const Main = () => (
 <switch>
  <Route exact path="/" component={LandingPage} />
    <Route path="/contact" component={Contact} />
    <Route path="/Services" component={Services} />
    <Route path="/resume" component={Resume} />
    </switch>
)

export default Main;
