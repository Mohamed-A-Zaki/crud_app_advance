import { createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import AddPost from "./psges/AddPost.tsx";
import EditPost from "./psges/EditPost.tsx";
import PostsList from "./psges/PostsList.tsx";
import ErrorPage from "./psges/ErrorPage.tsx";
import PostDetails from "./psges/PostDetails.tsx";

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
        path: "/posts",
        element: <PostsList />,
      },
      {
        path: "/posts/:id",
        element: <PostDetails />,
      },
      {
        path: "/posts/add",
        element: <AddPost />,
      },
      {
        path: "/posts/:id/edit",
        element: <EditPost />,
      },
    ],
  },
]);

export default router;
