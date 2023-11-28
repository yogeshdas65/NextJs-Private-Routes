import React from "react";
import {sessionStatus} from "@/utils/session"
import {redirect } from "next/navigation"

const ServerSide = () => {
    const session = sessionStatus;
    if(!session){
        redirect("/")
    }
  return <div>This is Server component</div>;
};

export default ServerSide;
