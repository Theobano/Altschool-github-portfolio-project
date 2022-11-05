// Fuction to wrap promise to be used in suspense

function wrapPromise(promise) {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  // Fuction to read promise response
  // Returns response if promise is successful
  // Rethrows the promise if it is still pending
  // Throws error if promise fails
  function read() {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  }
    return { read };
}

export default wrapPromise;
