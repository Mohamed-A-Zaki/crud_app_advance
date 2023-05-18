import { createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import AddPost from "./pages/AddPost.tsx";
import EditPost from "./pages/EditPost.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import PostsList from "./pages/PostsList.tsx";
import LoginForm from "./pages/LoginForm.tsx";
import PostDetails from "./pages/PostDetails.tsx";

// const AddPost = lazy(() => import("./psges/AddPost.tsx"));
// const EditPost = lazy(() => import("./psges/EditPost.tsx"));
// const PostsList = lazy(() => import("./psges/PostsList.tsx"));
// const ErrorPage = lazy(() => import("./psges/ErrorPage.tsx"));
// const LoginForm = lazy(() => import("./psges/LoginForm.tsx"));
// const PostDetails = lazy(() => import("./psges/PostDetails.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PostsList />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "/posts",
        element: <PostsList />,
      },
      {
        path: "/posts/:id",
        element: <PostDetails />,
        loader: async ({ params }) => {
          return Number(params.id) || undefined;
        },
      },
      {
        path: "/posts/add",
        element: <AddPost />,
      },
      {
        path: "/posts/:id/edit",
        element: <EditPost />,
        loader: async ({ params }) => {
          return Number(params.id) || undefined;
        },
      },
    ],
  },
]);

export default router;
