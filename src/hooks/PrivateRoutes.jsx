import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { verifyToken } from "../store/features/auth/api";
import { LiaSpinnerSolid } from "react-icons/lia";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const { tokenVerified } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(verifyToken({ token }));
    }
  }, [token]);

  // While checking token, don't render anything
  if (!tokenVerified && token) {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <LiaSpinnerSolid className="animate-spin w-8 h-8 text-emerald-600" />
      </div>
    ); // Optional: Spinner or skeleton
  }

  if (tokenVerified) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoutes;
