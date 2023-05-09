import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPosts } from "../store/PostsSlice";
import Post from "../components/Post";

const PostsList = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="posts-list">
      <Container>
        <Row xs={1} lg={2} className="g-3 mt-3">
          {posts.map((post) => {
            return (
              <Col key={post.id}>
                <Post {...post} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default PostsList;
