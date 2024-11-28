import bcrypt from 'bcryptjs';

interface User {
  email: string;
  password: string;
  name: string;
  registrationCode: string;
}

export const registerUser = async (email: string, password: string, name: string, code: string) => {
  try {
    const users = getUsers();
    if (users.find(u => u.email === email)) {
      throw new Error('Email already registered');
    }

    const validCodes = ['ABC123', 'XYZ789', 'DEF456', 'GHI789', 'JKL012'];
    if (!validCodes.includes(code)) {
      throw new Error('Invalid registration code');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser: User = {
      email,
      password: hashedPassword,
      name,
      registrationCode: code
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  const users = getUsers();
  const user = users.find(u => u.email === email);
  
  if (!user) {
    throw new Error('User not found');
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error('Invalid password');
  }

  localStorage.setItem('currentUser', JSON.stringify({
    email: user.email,
    name: user.name
  }));

  return user;
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};

const getUsers = (): User[] => {
  const usersStr = localStorage.getItem('users');
  return usersStr ? JSON.parse(usersStr) : [];
};