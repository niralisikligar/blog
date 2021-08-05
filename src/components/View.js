import React, { useState, useEffect } from "react";
import {
  Box,
  CssBaseline,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  link: {
    cursor: "pointer",
  },
});

const View = () => {
  const { id } = useParams();
  console.log(id);
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);

  const classes = useStyles();
  const fetchPost = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
      .then((response) => {
        setPost(response.data[0]);
        axios
          .get(
            `https://jsonplaceholder.typicode.com/comments?postId=${response.data[0].id}`
          )
          .then((response) => {
            console.log(response.data);
            setComment(response.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <Container maxwith="md">
        <CardContent>
          <Typography className={classes.heading} variant={"h6"} gutterBottom>
            {post.id}. {post.title}
          </Typography>
          <Typography className={classes.subheading} variant="body1">
            {post.body}
          </Typography>
        </CardContent>
        <div>{
            comment && comment.map(ele => (
                <div>
                    <br />
                    <b>{ele.email} -</b> {ele.body}
                    <br />
                </div>
            ))
            }</div>
      </Container>
    </>
  );
};
export default View;
