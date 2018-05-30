let getUser = () => {
  return new Promise((resolve, reject) => {
    resolve({
      name: "alex",
      age: 37
    });
  });
}
async function print() {
  const user = await getUser();
  console.log(user);
}
print();