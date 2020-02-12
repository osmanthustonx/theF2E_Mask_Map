import { Component } from 'react';
import { withLeaflet } from 'react-leaflet';
import Locate from 'leaflet.locatecontrol';
import PropTypes from 'prop-types';

class LocateControl extends Component {
  componentDidMount() {
    const { startDirectly, leaflet } = this.props;
    const { map } = leaflet;

    const locateOptions = {
      position: 'topleft',
      strings: {
        title: 'Show my location',
      },
      locateOptions: {
        maxZoom: 17,
        enableHighAccuracy: true,
      },
      onActivate: () => {}, // callback before engine starts retrieving locations
    };

    const lc = new Locate(locateOptions);
    lc.addTo(map);

    if (startDirectly) {
      // request location update and set location
      lc.start();
    }
  }

  render() {
    return null;
  }
}

LocateControl.propTypes = {
  startDirectly: PropTypes.bool.isRequired,
  leaflet: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withLeaflet(LocateControl);
