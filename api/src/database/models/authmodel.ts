import bcrypt from 'bcryptjs';

interface User {
  id: number;
  username: string;
  password: string;
}

const users: User[] = []; 

export const getUserByUsername = (username: string): User | undefined => {
  console.log("user dsts",username);
  return users.find(users => users.username === username);
 
};

export const createUser = (username: string, password: string): User => {

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);
  return newUser;
};
export const getAllUsers = () => {
  return users;
};