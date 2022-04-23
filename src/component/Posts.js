import React from "react";
import Post from "./Post";
import * as blogPosts from "../Data/BlogData.json";

const Posts = () => {

return (
	
		<div className="posts-container">
			{blogPosts.default.map(post => (
			<Post key={post.id} post={post} />
			))}
		</div>
);
};

export default Posts;
