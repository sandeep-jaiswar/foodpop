import axios from 'axios';
import {handleResponse, handleError} from './response';

const getAll = (url, cb) => {
  return axios
    .get(url)
    .then(handleResponse)
    .then((res)=>cb(res))
    .catch(handleError);
};

const getSingle = (url, cb) => {
  console.log(url, cb);
  return axios
    .get(url)
    .then(handleResponse)
    .then((res)=>cb(res))
    .catch(handleError);
};

/** @param {string} url */
/** @param {object} req */
const post = (url, req) => {
  return axios
    .post(url, req)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} url */
/** @param {object} req */
const put = (url, req) => {
  return axios
    .put(url, req)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} url */
/** @param {object} req */
const patch = (url, req) => {
  return axios
    .patch(url, req)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} url */
const remove = (url) => {
  return axios
    .delete(url)
    .then(handleResponse)
    .catch(handleError);
};

export default {
  getAll,
  getSingle,
  post,
  put,
  patch,
  remove,
};
