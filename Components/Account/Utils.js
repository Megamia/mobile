import users from '../../users.json';

export function login(username, password) {
  const foundUser = users.users.find((user) => user.username === username && user.password === password);
  return foundUser;
}

export function signup(username, password) {
  const newUser = { username, password };
  users.users.push(newUser);
  return newUser;
}