//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = (originalFunction) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      originalFunction(...args, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
};

export const all = (promise) => {
  return new Promise((resolve, rejects) =>{
    resolve = []


  })
};

export const allSettled = () => {
  throw new Error('Remove this statement and implement this function');
};

export const race = () => {
  throw new Error('Remove this statement and implement this function');
};

export const any = () => {
  throw new Error('Remove this statement and implement this function');
};
