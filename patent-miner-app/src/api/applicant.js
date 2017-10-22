import axios from 'axios';
import config from './config';


export default {
  applicant(model, success, failure) {
    axios.post('//applicant', model, config).then(() => {
      success();
    }).catch((error) => {
      failure(error);
    });
  },
};
