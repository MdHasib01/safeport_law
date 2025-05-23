export const config = {
  baseURL: "https://safeport-law-backend.onrender.com/api/v1",
  // baseURL: "http://localhost:8080/api/v1",
  routes: {
    login: "user/login",
    signup: "user/signup",
    accountRegister: "account/register",
    verifyToken: "user/verifyToken",
    getUserFromToken: "account/getUserFromToken",
  },
};
