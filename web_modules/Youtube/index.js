import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import styles from "./index.css"

import { get as getLinkYoutube } from "app/reducers/youtube"

@connect(
    (state) => ({
        linkYoutube : state.linkYoutube
    }),
    (dispatch) => ({
        getLinkYoutube : (value) => dispatch(getLinkYoutube(value))
    })
)
export default class Youtube extends Component {

  const props = {

    params:{
      linkYoutube: PropTypes.string
    }
  }

  // static propTypes = {
  //     linkYoutube: PropTypes.string
  // };

  static defaultProps = {
      params:{
        
        linkYoutube: null
      }
  };

  componentDidMount(){

      //getLinkYoutube()
  }

  render() {
    return (
      <div>
        {
            {linkYoutube}
        }
      </div>
    )
  }
}

// componentDidMount(){

//   var youTube = new YouTube();

//   youTube.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');

//   youTube.search('World War z Trailer', 2, function(error, result) {
//     if (error) {
//       console.log(error);
//     }
//     else {
//       console.log(JSON.stringify(result, null, 2));
//     }
//   });
// }

// const Item = ({name =""}) =>

// (<div>{name}</div>)

// export default Item