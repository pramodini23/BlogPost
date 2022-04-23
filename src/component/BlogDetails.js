import React from "react";
import { Link } from 'react-router-dom'

const BlogDetails = ({ post: { id,title, body,
imgUrl, date, link }}) => {

return (
		<div className="blogDetails-container">
			<a href={link}>
				<h1 className="heading">{title}</h1>
			</a>
            <br/>
			<p><strong>Date: {date}</strong></p>
            <br />
			<img className="image" src={imgUrl} alt="post" />
            <br />
			<p className="blogBody">{body}</p>
            <br />
		</div>
);
};

export default BlogDetails;
