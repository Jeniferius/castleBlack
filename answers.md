# REST API implementation

## Answers

- Implement the endpoints in **./src/api.js** file with the most suitable code for players and objects management REST API. You will find detailed instructions in this file.
    - **Required endpoints:** _Done._
    - **Bonus endpoints:** I have not had time. Some endpoints know how to solve them, others need research.
- Write some tests for your code. Use test folder for this purpose.
    - I have not previously worked with a test, I would need more time to investigate its operation and implementation.
- Answer all commented questions you find in the code.
    - _Done._

## Notes to Payvision

- My English is bad as I commented in the video interview. I hope you have patience with it and understand my clarifications well (I help myself as a translator).
- I have not worked with a test, therefore I still don't know how it works. I would love to and I promise to learn about it.
- I have separated the data source and create a model folder to resemble a real case with external files.
- In ./models/object.js and ./models/player.js the logic of the requests is found and endpoints are executed in ./src/api.js.
- I have added view engine setup to configure a view and send visible messages on a front. Unfortunately I have not had time to do this.
- I have used for, foreach, some, etc. To show different ways of working, the choice is also based on whether I need to make a break.

## To do

I would like to improve the project and add features that I didn't have time.

- Learn about test.
- Implement new tests.
- Work in bonus endpoints.
- Implement view engine setup whit jade or handlebars.
- Add more endpoints, e.g: return all players with a specific object in their bag.