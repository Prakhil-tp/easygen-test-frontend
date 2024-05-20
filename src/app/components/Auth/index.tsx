"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import PageLoader from "@/app/components/PageLoader";
import { logout } from "@/store/slices/credSlice";

interface Props {
  children: React.ReactNode;
}

const Auth: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state: any) => state.cred);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (accessToken == null || accessToken === "") {
      dispatch(logout());
      router.replace("/sign-in");
    } else {
      console.log("here..");
      //TODO: verify access token
      setLoading(false);
    }
  }, [accessToken, router, dispatch]);

  const pathName = usePathname();
  switch (pathName) {
    case "/sign-in":
      return children;
    case "/sign-up":
      return children;
    default:
      return loading ? <PageLoader /> : <div>{children}</div>;
  }
};

export default React.memo(Auth);
