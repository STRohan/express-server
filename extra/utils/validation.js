const users = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@succesfsive.tech"
  },
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  }
];

function validateEmail(email) {
  let regex = /^[\w-\.]+@(successive.tech)$/;

  return regex.test(email);
}

let validuser = [];
let invaliduser = [];
let invalidcount = 0;
let validcount = 0;
function validUser(users) {
  users.forEach(function(user) {
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
  console.log("\nThe count of valid user is " + validcount);
  console.log("\nThe names of valid users are :\n " + validuser);
  console.log("\nThe count of invalid user is " + invalidcount);
  console.log("\nThe names of invalid users are :\n " + invaliduser);
}
validUser(users);
