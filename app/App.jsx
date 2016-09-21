var style = require("./app.less");

import React  from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* Uses a transparent header that draws on top of the layout's background */}
        <div style={{height: '100vh', position: 'relative'}}>
          <Layout>
            <Header transparent title="Title" style={{color: 'white', height: '100px', background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
              <Navigation>
                <a href="">Link 1</a>
                <a href="">Link 1</a>
                <a href="">Link 1</a>
                <a href="">Link 1</a>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <a href="">Link 2</a>
                <a href="">Link 2</a>
                <a href="">Link 2</a>
                <a href="">Link 2</a>
              </Navigation>
            </Drawer>
            <Content />
          </Layout>
        </div>
      </div>
    );
  }
}
