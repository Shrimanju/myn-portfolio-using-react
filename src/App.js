import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {NavLink,Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MY PORTFOLIO</Link>} scroll>
            <Navigation>
              
                <NavLink to="/resume">RESUME</NavLink>
                
                <Link to="/Services">SERVICES</Link>
                <Link to="/contact">CONTACT</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'blue'}} to="/">MY PORTFOLIO</Link>}>
            <Navigation>
              <Link to="/resume">RESUME</Link>
        
              <Link to="/Services">SERVICES</Link>
              <Link to="/contact">CONTACT</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
