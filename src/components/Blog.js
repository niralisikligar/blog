import React from "react"
import { Box, CssBaseline, Typography, Card, CardContent, Grid, Container} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
// import Link from '@material-ui/core/Link';
import axios from "axios";

const useStyles = makeStyles({
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  link : {
    cursor : "pointer"
  }
});


const Blog = () =>{
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const loadPosts = async () => {
    // const res = await axios.get(`http://localhost:3003/posts?_page=${page}`);
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
    setPosts(res.data);
  };
  useEffect(() => {
    loadPosts();
  }, [page]);
  const classes = useStyles();
 
    return(
        <>
        <CssBaseline />
      <Container component={Box} py={3}>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item sm={3}>
            <Link to={`/view/${post.id}`} className = {classes.link} >
              <Card key={post.id} style={{ height: 250 }}>
                <CardContent>
                  <Typography className={classes.heading}
                    variant={"h6"}
                    gutterBottom>
                    {post.id}. {post.title}
                  </Typography>
                  <Typography className={classes.subheading} variant="body1">{post.body}</Typography>
                </CardContent>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Box py={3} display="flex" justifyContent="center">
          <Pagination
            count={10}
            color="secondary"
            variant="outlined"
            onChange={(e, value) => setPage(value)}
          />
        </Box>
      </Container>
        </>
    )
}

export default Blog