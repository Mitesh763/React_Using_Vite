import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

export const PostLists = createContext({
  postLists: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  // Add post
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POST") {
    console.log("inside post");
    // add all posts dummy data
    newPostList = action.payload.posts;
  } else if (action.type === "DELETE_POST") {
    // delete post
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postLists, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (post) => {
    console.log("inside addpost function :");
    console.log(post.postTitle);
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  // add all posts dummyjson data
  const addInitialPosts = (posts) => {
    console.log("inside dispatch");
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: { posts },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: { postId },
      });
    },
    [dispatchPostList] // jyare aa dependencies change thaye tyare j delete method re-render thaye....
  );

  const [fetching, setFetching] = useState(false);

  // 1.
  // useEffect(() => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  // }); // nothind mean paint every time

  // 2.
  // useEffect(() => {
  //   setFetching(true);
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //     });

  //   return () => {};
  // }, []); // render only first time no need to click on fetch data

  // anther way to write useEffect
  useEffect(() => {
    setFetching(true);
    const newController = new AbortController();
    const signal = newController.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      newController.abort();
    };
  }, []);

  return (
    <PostLists.Provider value={{ postLists, addPost, fetching, deletePost }}>
      {children}
    </PostLists.Provider>
  );
};

const DEFAULT_POST_LIST = [
  // {
  //   id: "1",
  //   title: "way to MUmbai",
  //   body: "Hii friend, i am going to mumbai",
  //   reactions: 2,
  //   userID: "user-7",
  //   tags: ["as", "ere", "erwe", "WEw"],
  // },
  // {
  //   id: "2",
  //   title: "Completed 3rd year",
  //   body: "Hii friend, i recently completedd my 3rd year",
  //   reactions: 20,
  //   userID: "user-2",
  //   tags: ["as", "ere", "erwe", "WEw", "dfv"],
  // },
];

export default PostListProvider;
