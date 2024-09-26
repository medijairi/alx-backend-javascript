import handleProfileSignup from './6-final-user';

handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg')
  .then((queue) => console.log(queue))
  .catch((error) => console.log(error));
