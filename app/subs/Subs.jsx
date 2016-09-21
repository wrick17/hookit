require('./subs.less');

import React from 'react'
import superagent from 'superagent'
import { List, ListItem, Chip, Spinner, Button } from 'react-mdl';
import { Link } from 'react-router'

export default class Subs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subs: [],
      loading: false
    }
    this.loadMore = this.loadMore.bind(this);
    this.fetchSubs = this.fetchSubs.bind(this);
  }

  loadMore() {
    const { subs }= this.state;
    this.fetchSubs(subs[subs.length - 1].data.name);
  }

  componentDidMount() {
    this.fetchSubs()
  }

  fetchSubs(after) {
    let url = 'https://www.reddit.com/subreddits/popular.json?limit=100';
    if (after) url += '&after=' + after;

    this.setState({ loading: true }, () => {

      superagent
      .get(url)
      .then(res => {
        this.setState({
          subs: this.state.subs.concat(res.body.data.children),
          loading: false
        })
      }).catch(err => console.log(err))

    });
  }

  render() {
    if (!this.state.subs.length) return <div className="spinn" ><Spinner/></div>;
    return (
      <List className="sub-list">
        {
          this.state.subs.map((subObj, idx) => {
            const sub = subObj.data;
            return(
              <ListItem key={idx} className="sub">
                <Link to={'/feeds' + sub.url}><Chip>{sub.title}</Chip></Link>
              </ListItem>
            )
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
