import * as bcrypt from 'bcrypt';
import UserRepository from '../repositories/user/UserRepository';
const mongoPassword = process.env.PASSWORD;
const repository = new UserRepository();
export default async function seed() {
// try {
  const count = await repository.count();
  {
    if (count <= 10) {
      for ( let i = 0; i < 10; i ++) {
      bcrypt.hash(mongoPassword, 10, (err, hash) => {
      repository
        .create({
          email: 'trainee@successive.tech',
          id: '9',
          name: 'Trainee',
          password: hash,
          role: 'trainee',
          }),
        repository
        .create({
          email: 'head-trainee@successive.tech',
          id: '10',
          name: 'Head Trainer',
          password: hash,
          role: 'head-trainer',
        });
      if (err) throw err;
      });
        // .then((result) => {
        //   console.log('User Created ', result);
        // })
        // .catch ((err) => {
        //   console.log('ERROR',err);
        // });
    }
  // repository
  //  .update({ name2: 'ram' }, { name2: '__kyomi__' })
  //  .then((result) => {
  //    console.log('User Updated ', result);
  //  })
  //  .catch((err) => {
  //    console.log('ERROR');
  //  });
//
  // repository
  //  .delete({})
  //  .then((result) => {
  //    console.log('Number of User Deleted ', result);
  //  })
  //  .catch((err) => {
  //    console.log('ERROR');
  //  });
// catch (err) {
// console.log("The Error is ", err);
// }
  }} }
