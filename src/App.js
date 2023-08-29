import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Error from "./component/Error";

import UserContext from "./utils/UserContext";

import { createContext } from "react";
// import RestaurantInfo from "./component/RestaurantInfo";

const RestaurantInfo = lazy(() => import("./component/RestaurantInfo"));
import { useEffect } from "react";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Profile from "./component/ProfileClass";
import InstaMart from "./component/InstaMart";
import LoginPage from "./component/LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  const [user, setUser] = useState({
    fName: "aj",
  });
  const [login, setLogin] = useState(false);

  // function getAuth(bool) {
  //   setLogin(bool);
  // }
  // console.log(UserContext);
  // async function getData() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json();
  //   console.log(json);
  // }
  // getData();

  return login === false ? (
    <LoginPage
      setLogin={(bool, uName) => {
        setLogin(bool);
        setUser({ fName: uName });
        console.log(bool);
      }}
    />
  ) : (
    <UserContext.Provider value={user}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: (
          <Suspense>
            <RestaurantInfo />
          </Suspense>
        ),
      },
      {
        path: "/instamart",
        element: <InstaMart />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
