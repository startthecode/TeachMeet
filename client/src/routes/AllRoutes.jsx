import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthLayout } from "../components/layout/AuthLayout";
import { AppLayout } from "../components/layout/AppLayout";
import { urls } from "../constant/urls";

// auth
let SignIn = lazy(() => import("../pages/signin/Index"));
let SignUp = lazy(() => import("../pages/signup/Index"));
let Profile = lazy(() => import("../pages/profile/Index"));

// testing
import { Testing } from "../pages/testing/Index";

export const AllRoutes = () => {
  let routes = createBrowserRouter([
    {
      element: (
        <Suspense>
          <AppLayout />
        </Suspense>
      ),
      children: [
        {
          path: urls.profile.slug,
          element: <Profile />,
        },
        {
          path: "test",
          element: <Testing />,
        },
      ],
    },

    {
      element: (
        <Suspense>
          <AuthLayout />
        </Suspense>
      ),
      path: urls.auth.baseSlug,
      children: [
        {
          path: "",
          element: <Navigate to={urls.auth.signin.slug} />,
        },
        {
          path: urls.auth.signin.slug,
          element: <SignIn />,
        },
        {
          path: urls.auth.signup.slug,
          element: <SignUp />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};
