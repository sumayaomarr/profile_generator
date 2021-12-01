// const { fuchsia } = require('color-name');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What"s your name? Nicknames are also acceptable', (name) => {

  rl.question('What"s an activity you like doing?', (activity) => {

    rl.question('What do you listen to while doing that? ', (listen) => {

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {

        rl.question('What"s your favourite thing to eat for that meal?', (favEat) => {

          rl.question('Which sport is your absolute favourite?', (sport) => {

            rl.question('What is your superpower? In a few words, tell us what you are amazing at', (superpower) => {
              
             
console.log(`Thank you for your valuable feedback: ${name}`);

setTimeout(() => console.log (`${[name]} favourite activity to do is ${activity}, while listening to ${listen}. ${name} 
favourite meal of the day is ${meal} and during ${meal} they like to ${favEat}. 
Their absolute favourite sport is ${sport} and their superpower is ${superpower}` ))
rl.close();
       

            });

          });

        });

      });

    });
  });
});



