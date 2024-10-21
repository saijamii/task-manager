import React from "react";

async function fetchPosts() {
  const res = await fetch("https://api.vercel.app/blog");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

const TaskList = async () => {
  let posts = [];

  try {
    // Fetch posts inside the component
    posts = await fetchPosts();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
