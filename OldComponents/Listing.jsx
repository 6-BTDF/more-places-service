/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Place from './Place.jsx';
import styles from './Listing.module.css';

class ListingOld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
      placeIndex: 0,
    }

    this.getListing = this.getListing.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  // get data from db on page load
  componentDidMount() {
    this.getListing(window.location.pathname);
  }

  getListing(path) {
    console.log(path);
    axios.get(`/api${path}morePlaces`)
    .then((res) => {
      console.log(res);
      this.setState({ // this triggers a re-render
        listing: res.data[0],
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  moveLeft(event) {
    event.preventDefault();
    const {placeIndex} = this.state;
    const leftIndex = placeIndex > 0 ? placeIndex - 1 : 0;
    this.setState({
      placeIndex: leftIndex
    })
  }

  moveRight(event) {
    event.preventDefault();
    const places = this.state.listing.morePlacesID;
    const {placeIndex} = this.state;
    const rightIndex = placeIndex === places.length - 1 ? placeIndex : placeIndex + 1;
    this.setState({
      placeIndex: rightIndex
    })
  }

  render() {
    const places = this.state.listing.morePlacesID;
    // console.log(places);
    // If there is nothing in this.state (because API call has not gone through),
    // do not render
    if (!places) {
      return null;
    }
    return (
        <div className={styles.sliderContainerWrapper}>
          <div className={styles.sliderContainer}>
            <div className={styles.sliderContainerTop}>
              <div className={styles.sliderContainerTop_left1}>
                <div className={styles.sliderContainerTop_left1_1}>
                  <section>
                    <h2 className={styles.sliderContainerTop_left1_1_1}>
                      More places to stay
                    </h2>
                  </section>
                </div>
              </div>
              <div className={styles.sliderContainerTop_right}>
                <div className={styles.leftArrowContainerWrapper}>
                  <button className={styles.leftArrowContainer} type='button'>
                    <span>
                      <svg viewBox="0 0 18 18" className={styles.leftArrow} onClick={this.moveLeft}>
                        <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z">
                        </path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className={styles.rightArrowContainerWrapper}>
                  <button className={styles.rightArrowContainer} type='button'>
                    <span>
                      <svg viewBox="0 0 18 18" className={styles.rightArrow} onClick={this.moveRight}>
                        <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z">
                        </path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.sliderContainerBottom}>
              <ul className={styles.slider}>
                {places.map((place, index) => {
                  return (
                    <Place
                    key={place.listingID}
                    index={index}
                    place={place}
                    />
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

// export default Listing;