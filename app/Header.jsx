import React, {PropTypes} from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}

Header.propTypes = {
};
