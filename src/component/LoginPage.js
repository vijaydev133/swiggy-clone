import { users } from "../utils/users";
import { useState } from "react";

function auth(uName, uPass, setLogin) {
  users.forEach((user) => {
    console.log("userName " + uName);
    console.log("userName " + user.uName);
    console.log("password " + uPass);
    console.log("password " + user.uPassword);
    if (user.uName == uName && user.uPassword == uPass) {
      setLogin(true, uName);
      //   console.log(
      //     "login success" + user.uName == uName && user.uPassword == uPass
      //   );
      return;
    }
  });
}

const LoginPage = ({ setLogin }) => {
  const [uName, setuName] = useState("");

  const [uPass, setuPass] = useState("");
  //   console.log(setLogin);
  return (
    <div className=" h-screen flex justify-center  items-center bg-zinc-100">
      <div className=" bg-white text-center shadow-lg w-80 h-60">
        <h1 className="font-bold text-xl">Login </h1>
        <div className="flex flex-col m-2 p-7">
          <input
            className="border border-slate-300 rounded p-1 mb-5"
            type="text"
            placeholder="Username"
            value={uName}
            onChange={(e) => {
              setuName(e.target.value);
            }}
          />
          <input
            className="border border-slate-300 rounded p-1 mb-5"
            type="password"
            placeholder="Password"
            value={uPass}
            onChange={(e) => {
              setuPass(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log("came in buttun");
              auth(uName, uPass, setLogin);
            }}
            className="bg-red-300   rounded text-center"
          >
            LOGIN
          </button>
          {/* <button className="bg-red-300   rounded text-center">Signup</button> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
