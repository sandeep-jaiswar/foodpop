/**
 * Description
 * @param {any} response
 * @returns {any}
 */
export function handleResponse(response) {
  console.log('response', response);
  if (response.results) {
    return response.results;
  }

  if (response.data) {
    return response.data;
  }

  return response;
}

/**
 * Description
 * @param {any} error
 * @returns {any}
 */
export function handleError(error) {
  if (error.data) {
    return error.data;
  }
  return error;
}
