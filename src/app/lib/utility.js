const isEmpty = obj => {
  return obj.constructor === Object && Object.keys(obj).length === 0;
};

export { isEmpty };
