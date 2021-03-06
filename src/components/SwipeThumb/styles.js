import { StyleSheet } from 'react-native';

const borderWidth = 3;
const margin = 1;
const maxContainerHeight = 100;
const Styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    borderRadius: maxContainerHeight / 2,
    borderRightWidth: 0,
    borderWidth,
    margin,
  },
  containerRTL: {
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    borderRadius: maxContainerHeight / 2,
    borderLeftWidth: 0,
    borderWidth,
    margin,
  },
  icon: {
    alignItems: 'center',
    borderRadius: maxContainerHeight / 2,
    borderWidth: 2,
    justifyContent: 'center',
    marginVertical: -borderWidth,
  },
  defaultThumbIcon: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#800080',
  },
});

export default Styles;
export { borderWidth, margin };
