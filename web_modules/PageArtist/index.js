import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import styles from "./index.css"

import { get as getArtist } from "app/reducers/artist"
import { get as getTopMusics } from "app/reducers/topMusics"

import ItemDetails from "ItemDetails"

@connect(
    (state) => ({
        artist : state.artist,
        topMusics : state.topMusics
    }),
    (dispatch) => ({
        getArtist : (value) => dispatch(getArtist(value)),
        getTopMusics: (value) => dispatch(getTopMusics(value))
    })
)
export default class PageArtist extends Component {

  static propTypes = {
      params: PropTypes.shape({
        artistId:PropTypes.string,
      }),
      artists : PropTypes.object,
      topMusics : PropTypes.array,
      getArtist : PropTypes.func,
      getTopMusics: PropTypes.func
  };

  static defaultProps = {
      params: {},
      artist : null,
      topMusics : null,
      getArtist : () => {},
      getTopMusics: () => {}
  };

  componentDidMount(){

      const {
        params,
        getArtist,
        getTopMusics,
      } = this.props

      if(params.artistId){

        getArtist(params.artistId)
        getTopMusics(params.artistId)
      }
  }

  componentWillReceiveProps(nextProps){
    const {
      params,
      getArtist,
      getTopMusics,
    } = this.props

    if(nextProps.params.artistId!=params.artistId){
      getTopMusics(nextProps.params.artistId)
      getArtist(nextProps.params.artistId)
    }
  }

  render() {
    const {
      params,
      artist,
      topMusics,
    } = this.props
    
    return (
      <div className={styles.containerDetails}>
        {
            artist && !artist.loading &&
            <div>
              <ItemDetails name={artist.name}
                         image={artist.picture ? artist.picture.url : null}
                         kinds={artist.genres}
                         songs={topMusics} />
            </div>
        }
      </div>
    )
  }
}
