import http from './httpService';
import {handleResponse, handleError} from './response';

const getAll = (url, cb) => {
  return http
    .get(url)
    .then(handleResponse)
    .then((res)=>cb(res))
    .catch(handleError);
};

const get = (url, cb) => {
  console.log(url, cb);
  return http
    .get(url)
    .then(handleResponse)
    .then((res)=>cb(res))
    .catch(handleError);
};

/** @param {string} url */
/** @param {object} req */
const post = (url, req) => {
  return http
    .post(url, req)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} url */
/** @param {object} req */
const put = (url, req) => {
  return http
    .put(url, req)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} url */
/** @param {object} req */
const patch = (url, req) => {
  return http
    .patch(url, req)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} url */
const remove = (url) => {
  return http
    .delete(url)
    .then(handleResponse)
    .catch(handleError);
};

const API= {
  getAll,
  get,
  post,
  put,
  patch,
  remove,
};

export default API;
