function namify(users) {
  //------V1------------------
  // const result = [];
  //
  // for (let user of users) {
  //   result.push(user.name);
  // }
  //
  // return result;


  //--------V2----------------
  return users.map(user => user.name);
}
