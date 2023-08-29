import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border-2 border-red-500 border-solid m-2 p-3">
      <h2 className="font-bold text-xl">{title}</h2>
      <button
        onClick={() => {
          setIsVisible(isVisible ? false : true);
        }}
        className="mr-2 underline"
      >
        {isVisible ? "hide" : "show"}
        {/* show */}
      </button>
      {/* <button
        onClick={() => {
          setIsVisible(false);
        }}
        className="mr-2 underline"
      >
        {isVisible ? "hide" : "show"}
        hide
      </button> */}
      {/* <button className="mr-2 underline">hide</button> */}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

// const InstaMart = () => {
//   const [configShow, setconfigShow] = useState({
//     setAbout: false,
//     setCareers: false,
//     setWelcome: false,
//   });
//   return (
//     <div>
//       <h1 className="font-bold text-3xl">Insta mart</h1>

//       <Section
//         title={"About"}
//         description={
//           "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, saepe. Iste excepturi recusandae iusto laboriosam ad nesciunt ipsa natus nam omnis, sunt rem at illum inventore molestias quam accusamus deserunt eum. Iste alias et nihil laborum ducimus nostrum vitae itaque. Magnam delectus quae sequi ea."
//         }
//         isVisible={configShow.setAbout}
//         setIsVisible={(bool) =>
//           setconfigShow(
//             {
//               setAbout: bool,
//               setCareers: false,
//               setWelcome: false,
//             }
//             // console.log(word)
//           )
//         }
//       />
//       <Section
//         title={"Careers"}
//         description={
//           "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, saepe. Iste excepturi recusandae iusto laboriosam ad nesciunt ipsa natus nam omnis, sunt rem at illum inventore molestias quam accusamus deserunt eum. Iste alias et nihil laborum ducimus nostrum vitae itaque. Magnam delectus quae sequi ea."
//         }
//         isVisible={configShow.setCareers}
//         setIsVisible={(bool) =>
//           setconfigShow({
//             setAbout: false,
//             setCareers: bool,
//             setWelcome: false,
//           })
//         }
//       />
//       <Section
//         title={"Welcome"}
//         description={
//           "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, saepe. Iste excepturi recusandae iusto laboriosam ad nesciunt ipsa natus nam omnis, sunt rem at illum inventore molestias quam accusamus deserunt eum. Iste alias et nihil laborum ducimus nostrum vitae itaque. Magnam delectus quae sequi ea."
//         }
//         isVisible={configShow.setWelcome}
//         setIsVisible={(bool) =>
//           setconfigShow({
//             setAbout: false,
//             setCareers: false,
//             setWelcome: bool,
//           })
//         }
//       />
//     </div>
//   );
// };

const InstaMart = () => {
  const [isSectionVis, setIsSectionVis] = useState("about");
  return (
    <div>
      <h1 className="font-bold text-3xl">Insta mart</h1>

      <Section
        title={"About"}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, saepe. Iste excepturi recusandae iusto laboriosam ad nesciunt ipsa natus nam omnis, sunt rem at illum inventore molestias quam accusamus deserunt eum. Iste alias et nihil laborum ducimus nostrum vitae itaque. Magnam delectus quae sequi ea."
        }
        isVisible={isSectionVis === "about"}
        setIsVisible={() =>
          setIsSectionVis(isSectionVis === "about" ? "" : "about")
        }
      />
      <Section
        title={"Careers"}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, saepe. Iste excepturi recusandae iusto laboriosam ad nesciunt ipsa natus nam omnis, sunt rem at illum inventore molestias quam accusamus deserunt eum. Iste alias et nihil laborum ducimus nostrum vitae itaque. Magnam delectus quae sequi ea."
        }
        isVisible={isSectionVis === "career"}
        setIsVisible={() =>
          setIsSectionVis(isSectionVis === "career" ? "" : "career")
        }
      />
      <Section
        title={"Welcome"}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, saepe. Iste excepturi recusandae iusto laboriosam ad nesciunt ipsa natus nam omnis, sunt rem at illum inventore molestias quam accusamus deserunt eum. Iste alias et nihil laborum ducimus nostrum vitae itaque. Magnam delectus quae sequi ea."
        }
        isVisible={isSectionVis === "welcome"}
        setIsVisible={() =>
          setIsSectionVis(isSectionVis === "welcome" ? "" : "welcome")
        }
      />
    </div>
  );
};

export default InstaMart;
