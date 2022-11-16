'use strict';

module.exports.hello = async (event) => {
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World! This is my first Typescript application.',
        // input: event,
      },
      null,
      2
    ),
  };
};
