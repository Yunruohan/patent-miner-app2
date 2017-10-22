import axios from 'axios';
import config from './config';

export default {
  show(model, success, failure) {
    axios.post('/show', model, config).then(() => {
      success();
    }).catch((error) => {
      failure(error);
    });
  },
};
