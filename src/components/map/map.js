import ReactDOM from 'react-dom';
import React from 'react';
import './map.css';
/* eslint-disable */
export default class Map extends React.Component {
  componentDidMount() {
    ymaps.ready(() => {
      const yandexMap = new ymaps.Map('ymap', {
        center: [this.props.data.center[0], this.props.data.center[1]],
        zoom: 5,
      }, {
          searchControlProvider: 'yandex#search',
        });

      this.props.data.points.forEach((point) => {
        yandexMap.geoObjects.add(new ymaps.GeoObject({
          geometry: {
            type: 'Point',
            coordinates: [point.coords[0], point.coords[1]],
          },
          properties: {
            hintContent: point.description,
          },
        }));
      });
    });
  }

  render() {
    return (
      <div id="ymap" className="map"></div>
    );
  }
}
/* eslint-enable */
