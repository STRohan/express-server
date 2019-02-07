import UserRepository from '../repositories/user/UserRepository';

const repository = new UserRepository();
// try {

export default function seed() {
  repository.count().then((count) => {
    if (count <= 0) {
      repository
        .create({
          email: 'trainee@successive.tech',
          id: '9',
          name: 'Trainee',
          role: 'trainee',
          }),
        repository
        .create({
          email: 'head-trainee@successive.tech',
          id: '10',
          name: 'Head Trainer',
          role: 'head-trainer',
        })
        .then((result) => {
          console.log('User Created ', result);
        })
        .catch((err) => {
          console.log('ERROR');
        });
    }
  });

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
}
// catch (err) {
// console.log("The Error is ", err);
// }
