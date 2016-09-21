require('./homePage.less');

import React from 'react';
import { Link } from 'react-router'
import HeaderComponent from '../header/HeaderComponent.jsx'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout fixedHeader className="home-page">
        <HeaderComponent />

        <Drawer title={<Link to="/">Hookit</Link>}>
          <Navigation>
            <Link to="/subs">SUBREDDITS</Link>
            <Link to="/about">ABOUT</Link>
          </Navigation>
        </Drawer>

        <Content className="home-page-content">

          {this.props.children}

        </Content>

      </Layout>
    );
  }
}
