const getProperty = <X, Y extends keyof X>(userObj: X, userKey: Y) =>
  userObj[userKey];

const person = { name: "Alice", age: 30 };

console.log(getProperty(person, "name"));
