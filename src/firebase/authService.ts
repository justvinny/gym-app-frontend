import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  Auth,
} from "firebase/auth";

const login = async (auth: Auth, email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    console.log(`Firbase Auth Login failed: ${error.message}`);
    alert(error.message);
  }
};

const register = async (auth: Auth, email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    console.log(`Firebase Auth Register failed: ${error.message}`);
  }
};

const logout = async (auth: Auth) => {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.log(`Firebase Auth Logout failed: ${error.message}`);
  }
};

const authService = { login, register, logout };
export default authService;
