require('./aboutPage.less');

import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { Layout, Header, Navigation, Drawer, Content, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-wrapper">
        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>About Hookit</CardTitle>
          <CardText>
            This is a simple project to list out <a href="https://www.reddit.com/" target="_blank">Reddit</a> pages in a material way built on <a href="https://facebook.github.io/react/" target="_blank">React</a> and <a href="https://getmdl.io/" target="_blank">Material Design Lite</a> and uses service workers to improve laod times. the project can be found on <a href="https://github.com/wrick17/hookit" target="_blank">Github</a>. Sure do check out and star the repo.
          </CardText>
          <CardActions border>
            <a href="https://github.com/wrick17/hookit" target="_blank"><Button colored>GITHUB</Button></a>
          </CardActions>
        </Card>
      </div>
    );
  }
}

AboutPage.propTypes = {
};
