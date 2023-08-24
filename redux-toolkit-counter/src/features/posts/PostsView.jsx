import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./PostsSlice";


const PostsView = () => {
      //this build in fuction is used for getting data from redux provider import from react-redux
      const { posts, isLoading, error } = useSelector((state) => state.posts)
      console.log(posts);

      // A hook to access the redux dispatch function.

      // @returns — redux store's dispatch function
      //Call the fetchPost using dispatch
      const dispatch = useDispatch()

      useEffect(() => {
            dispatch(fetchPost())
      }, [])


      return (
            <div>
                  <h4>This is Post view App</h4>
                  <section>
                        {isLoading && <small>Loading.....</small>}
                        {error && <small>{error.message}</small>}
                        {posts && posts.map(post => {
                              return <article key={post.id}>
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                              </article>
                        })}
                  </section>
            </div>
      );
};

export default PostsView;