import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { Layout, Header, Navigation, Drawer, Content, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>About Us</CardTitle>
        <CardText>
          Now this is the about section. See what I was talking about?
        </CardText>
        <Link to="/" >
          <CardActions border>
            <Button colored>Go Home</Button>
          </CardActions>
        </Link>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    );
  }
}

AboutPage.propTypes = {
};
