require('./feeds.less');

import React from 'react';
import superagent from 'superagent'
import { Link } from 'react-router'
import HeaderComponent from '../header/HeaderComponent.jsx'
import { List, ListItem, ListItemContent, ListItemAction, Icon, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Spinner } from 'react-mdl';

export default class Feeds extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
      loading: false
    }
    this.loadMore = this.loadMore.bind(this);
    this.fetchFeeds = this.fetchFeeds.bind(this);
  }

  loadMore() {
    const { feeds }= this.state;
    this.fetchFeeds(this.props.params, feeds[feeds.length - 1].data.name);
  }

  componentDidMount() {
    this.fetchFeeds(this.props.params)
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      feeds: []
    }, () => this.fetchFeeds(newProps.params))
  }

  fetchFeeds(params, after) {
    let url = 'hot';
    if (params.sub) url = params.sub;
    if (params.r) url = 'r/' + url;
    url += '.json?limit=20';
    if (after) url += '&after=' + after;

    this.setState({ loading: true}, () => {

      superagent
      .get('https://www.reddit.com/' + url)
      .then((res) => {
        this.setState({
          feeds: this.state.feeds.concat(res.body.data.children),
          loading: false
        })
      }).catch((err) => {
        console.log(err);
      })

    })

  }

  render() {
    const { feeds } = this.state;
      if (!feeds.length) return <div className="spinn" ><Spinner/></div>;
    return (
      <List className="feed-list">
        {
          feeds.map((feedObj, idx) => {
            const feed = feedObj.data;
            return (
              <ListItem key={idx} className="feed" style={{padding: '5px'}}>
                <Link to={feed.url} target="_blank" className="card-warpper">
                  <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                    {
                      feed.preview &&
                        <CardTitle style={{color: '#fff', minWidth: '100%', height: '60vw', maxHeight: '300px', background: 'url(' + feed.preview.images[0].source.url + ') no-repeat center / cover #46B6AC'}}></CardTitle>
                    }
                    <CardText>
                      {feed.title && feed.title}
                    </CardText>
                  </Card>
                </Link>
              </ListItem>
            );
          })
        }
        { !this.state.loading ?
          <ListItem className="load-more">
            <Button colored onClick={this.loadMore}>Load More</Button>
          </ListItem> :
          <div className="spin"><Spinner /></div>
        }
      </List>
    )
  }
}
