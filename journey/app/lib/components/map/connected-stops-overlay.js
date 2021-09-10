import StopsOverlay from '../../otp-ui/stops-overlay'
import StopMarker from './connected-stop-marker'
import { connect } from 'react-redux'

import { findStopsWithinBBox, findClustersWithinBBox } from '../../actions/api'

// connect to the redux store

const mapStateToProps = (state, ownProps) => {
  return {
    StopMarker,
    stops: state.otp.overlay.transit.stops
  }
}

const mapDispatchToProps = {
  refreshStops: findStopsWithinBBox
}

export default connect(mapStateToProps, mapDispatchToProps)(StopsOverlay)
