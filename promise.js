// Event loop

const UserOne = () => {
  console.log("hello i am user One");
};
const UserTwo = () => {
  setTimeout(() => {
    console.log("I am inside user Two");
  }, 2000);
  console.log("hello i am user Two");
};
const UserThree = () => {
  console.log("hello i am user Three");
};

/*
UserOne();
UserTwo();
UserThree();
*/

// Promise  (callback, Promise Construced {then catch}, Asyn await)
/*
- pending - waiting for resolved or rejected 
- fullfilled - (resolved)
- reject 
*/

const makePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const arr = ["userOen", "userTwo", "userThree"];
    if (arr.length > 0) {
      resolve("yes the user exist");
    } else {
      reject("User not found");
    }
  }, 1000);
});

/*
makePromise
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
*/

// asyc and await

const u1 = () => {
  return "I am User One";
};
const u2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User found");
    }, 1500);
  });
};
const u3 = () => {
  return "I am User Three";
};

const Wait = async () => {
  let GuestOne = u1();
  console.log(GuestOne);

  let GuestTwo = await u2();
  console.log(GuestTwo);

  let GuestThree = u3();
  console.log(GuestThree);
};

Wait();