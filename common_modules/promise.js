
let user;

let getUser = () => {
  return new Promise((resolve, reject) =>{
    resolve({
      name: "alex",
      age: 37
    });

  });
};


getUser().then(user => console.log(user));
