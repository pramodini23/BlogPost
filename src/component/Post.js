import React from "react";
import "../index.css";
import { Link } from 'react-router-dom'

const Post = ({ post: { id,title, body,
imgUrl, date,summary }}) => {
return (
	<div className="mainDiv">
		<div className="post-container">
			<div className="posts">
				<p>
					<img className="image" src={imgUrl} alt="post" />
				</p>
				<p>
					<Link to={`/Blog/${id}`}>
						<h1 className="heading">{title}</h1>
					</Link>
				</p>
				<p>
					<b>Date:</b> {date}
				</p>
				<p style={{marginTop:"10px"}}>
					{summary}
				</p>
				
			</div>
		</div>
	</div>
);
};

export default Post;
