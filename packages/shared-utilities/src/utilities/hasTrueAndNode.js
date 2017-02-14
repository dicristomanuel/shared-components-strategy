import _ from 'lodash';
import currentEnv from './shared/currentEnv';


export default (array) => {
  return _.includes(array, true) && currentEnv();
}
