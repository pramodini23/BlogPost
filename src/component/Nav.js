import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";

const baseURL = "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=29b40830641047e5b8f8f9e0c15ba03f";

export default function App() {
  const [post, setPost] = React.useState(null);
  const [accepted, setAccepted] = useState(false);

  React.useEffect(() => {

    setTimeout(() => {

      axios.get(baseURL)
      .then((response) => {
        setPost(response.data.articles);
        console.log(JSON.stringify(response.data.articles));
      })
      .catch(error => console.log(`Error: ${error}`));
      
      setAccepted(!accepted);

     }, 10000);
    
  },[accepted]);

  if (!post) return (<div>
    <Link to="/">
      <h2 className="heading">Home</h2>
    </Link>
    <br/>
    <h4 style={{color:"black"}}>News Section</h4>
    <div className="weatherApi">
    </div>
  </div>);

  return (
    <div>
      <Link to="/">
				<h2 className="heading">Home</h2>
			</Link>
      <br/>
      <h4 style={{color:"black"}}>News Section</h4>
      <div className="weatherApi">
      {post.map((item) => (
        <>
        <div className="newsApi">
        <p>{item.title}</p>
        <p><strong>Published At: </strong>{item.publishedAt}</p>
        </div>
        <hr/>
        </>
      ))}
      </div>
    </div>
  );
}