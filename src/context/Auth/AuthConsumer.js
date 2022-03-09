
import React from "react";
import { AuthContext } from ".";

export default function AuthConsumer() {
    return React.useContext(AuthContext);
  }