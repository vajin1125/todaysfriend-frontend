// const K_SIZE = 40;
const K_SIZE = 20

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '3px solid white',
  borderRadius: K_SIZE,
  backgroundColor: '#1F42E0',
  textAlign: 'center',
  color: '#3f51b5',
  // fontSize: 14,
  fontWeight: 'bold',
  // padding: 4,
  cursor: 'pointer'
};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  border: '3px solid white',
  // color: '#f44336'
  transition: 'all .5s ease',
  WebkitTransition: '-webkit-transform 0.5s ease',
  MozTransition: '-moz-transform 0.5s ease',
  transform: 'scale(1.2)',
  WebkitTransform: 'scale(1.2)',
  MozTransform: 'scale(1.2)'
};

export {greatPlaceStyle, greatPlaceStyleHover, K_SIZE};
