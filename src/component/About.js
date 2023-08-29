// import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import React, { useEffect } from "react";

// const About = () => {
//   // useEffect(() => {
//   //   console.log("useEffect");
//   // });
//   // console.log("render");
//   return (
//     <div>
//       <h1>About Page</h1>
//       <Profile name={"vijay"} />
//     </div>
//   );
// };
// export default About;

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent compo did mount");
  }

  componentDidUpdate() {
    console.log("parent compo did update");
  }

  componentWillUnmount() {
    console.log("compo will unmount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About page</h1>
        <Profile name="vj" />
      </div>
    );
  }
}

export default About;
