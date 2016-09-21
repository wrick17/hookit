require("./header.less");

import React, {PropTypes} from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router'

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header className="header" title={<Link to="/" className="white-text" >Hookit</Link>}>
        <Navigation>
          <Link to="/subs" >SUBREDDITS</Link>
        </Navigation>
      </Header>
    );
  }
}

HeaderComponent.propTypes = {
};
