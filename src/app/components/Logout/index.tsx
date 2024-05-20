"use client";

import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/store/slices/credSlice";
import { Logout as Icon } from "@mui/icons-material";

const Logout: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
    router.replace("/");
  };

  return (
    <Button onClick={handleClick} startIcon={<Icon />}>
      logout
    </Button>
  );
};

export default Logout;
