import React, { useEffect, useState } from "react";
import axios from "axios";
const Request = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.log("Error axios data", error);
      }
    };
    axiosData();
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://jsonplaceholder.typicode.com/posts"
    //     );
    //     // if (!response.ok) {
    //     //   throw new Error(
    //     //     `HTTP error status ${response.status}`,
    //     //     console.log(response.status)
    //     //   );
    //     // }
    //     console.log(response.json());
    //   } catch (error) {
    //     console.error("Error fetching data:", error.message);
    //   }
    // };
    // fetchData();
  }, []);
  console.log(posts);
  return (
    <div>
      <h1>JSON Placeholder Posts</h1>
      <ul>
        {posts.map((post) => (
          <div key={post.id}>
            <li>{post.title}</li>
            <li>{post.id}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Request;
