import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { PostType, getPost } from "../store/PostsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import Post from "../components/Post";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, post } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost(Number(id)));
  }, [dispatch, id]);

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage error={error} />
      </Container>
    );
  }

  return (
    <div className="post-details mt-4">
      <Container>
        <Post {...(post as PostType)} />
      </Container>
    </div>
  );
};

export default PostDetails;
