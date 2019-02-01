import { IUsers } from './../interfaces';

import { validateEmail } from './helpers';

export function validUser(users1: IUsers[]) {
  const validuser = [];
  const invaliduser = [];
  let invalidcount = 0;
  let validcount = 0;

  users1.forEach((user: IUsers) => {
    const { traineeEmail, reviewerEmail } = user;
    if (validateEmail(traineeEmail)) {
      validuser.push(traineeEmail);
      validcount++;
    } else {
      invaliduser.push(traineeEmail);
      invalidcount++;
    }
    if (validateEmail(reviewerEmail)) {
      validuser.push(reviewerEmail);
      validcount++;
    }
    if (!validateEmail(reviewerEmail)) {
      invaliduser.push(reviewerEmail);
      invalidcount++;
    }
  });
  console.log('\nThe count of valid user is ' + validcount);
  console.log('\nThe names of valid users are :\n ' + validuser);
  console.log('\nThe count of invalid user is ' + invalidcount);
  console.log('\nThe names of invalid users are :\n ' + invaliduser);
}
