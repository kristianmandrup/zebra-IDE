import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Canvas from '../components/Canvas';
import * as CanvasActions from '../actions/canvas';

function mapStateToProps(state) {
  return {
    canvas: state.canvas
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CanvasActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
