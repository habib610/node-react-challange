import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loaiding/Loading";
import { loadAllPost } from "./postActions";

const PostList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllPost());
  }, [dispatch]);

  const allPost = useSelector((state) => state.allPost);
  const {posts, error, loading} = allPost;

  return <div className="container">
      {
          loading ? <Loading/> : error ?  <ErrorMessage>{error}</ErrorMessage> : (
            <div className="row justify-content-center">
            {
            posts.map(post => <div className="col-8 my-3" key={post._id}> 
                <h1 className="font-weight-bolder text-info text-uppercase">{post.title}</h1>
                <p>{post.details}</p>
              
            </div>)
            }
        </div>
          ) 
      }
                
  </div>;
};

export default PostList;
