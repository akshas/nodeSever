let user;

let getUser = (done) => {
  done({
    name: "alex",
    age: 37
  });
};

user = getUser(console.log);
