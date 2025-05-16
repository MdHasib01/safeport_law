// hooks/useIsLoggedIn.js
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyToken } from "../store/features/auth/api";

const useIsLoggedIn = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { tokenVerified } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      dispatch(verifyToken({ token })).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [token, dispatch]);

  // Wait for verification process to finish
  if (loading) return null;

  return !!(token && tokenVerified); // returns true if token exists and is verified
};

export default useIsLoggedIn;
