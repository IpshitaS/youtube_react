import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorBoundary = () => {
  let error = useRouteError();
  console.log(error);
  return <div>ErrorBoundary</div>;
};