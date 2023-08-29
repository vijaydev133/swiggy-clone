// import React from "react";

// class Profile extends React.Component {
//   constructor(props) {
//     console.log(" child contructor");
//     super(props);
//     console.log(this.props);
//     this.state = {
//       id: "890",
//     };
//   }

//   async componentDidMount() {
//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const json = await data.json();
//     console.log(json);
//     console.log(" child componenet doid mount");
//     this.setState({
//       id: json.id,
//     });
//   }

//   componentDidUpdate() {
//     console.log("compo did update");
//   }

//   render() {
//     console.log(" child render");
//     return (
//       <div>
//         <h2>Profile page</h2>
//         <h3>Name: {this.props.name}</h3>
//         <h4>{this.state.id}</h4>
//         <button
//           onClick={() => {
//             this.setState({
//               id: "4789",
//             });
//           }}
//         >
//           fgh
//         </button>
//       </div>
//     );
//   }
// }

// export default Profile;

import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
    console.log(" child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await data.json();
    console.log(json);
    this.setState({
      count: json.id,
    });
    console.log(" child CDM");
  }

  componentDidUpdate() {
    console.log("child compo did update");
  }
  render() {
    console.log(" child render");
    return (
      <div>
        <h1>Profile Page</h1>
        <h1>Name: {this.props.name}</h1>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default Profile;
