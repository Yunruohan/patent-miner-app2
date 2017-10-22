import axios from 'axios';
import config from './config';


export default {
  search(model, success, failure) {
    axios.post('/search', model, config).then((response) => {
      success(response);
    }).catch((error) => {
      failure(error);
    });
  },
};
