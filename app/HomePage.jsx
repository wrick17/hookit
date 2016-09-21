import React from 'react';
import { Link } from 'react-router'
import HeaderComponent from './HeaderComponent.jsx'
import { Layout, Header, Navigation, Drawer, Content, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout fixedHeader style={{height: '100vh', position: 'relative'}}>
        <HeaderComponent />

        <Drawer title={<Link to="/">Hookit</Link>}>
          <Navigation>
            <Link to="/about" >ABOUT</Link>
          </Navigation>
        </Drawer>

        <Content style={{padding: '20px'}}>

          <Card shadow={0} style={{width: '100%', margin: '0 auto 20px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
              This is the home page content. If you want to see more then go to the about page. You will see a lot of more stuff there.
            </CardText>
            <Link to="/about" >
              <CardActions border>
                <Button colored>Go to about section</Button>
              </CardActions>
            </Link>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {this.props.children}

        </Content>

      </Layout>
    );
  }
}
