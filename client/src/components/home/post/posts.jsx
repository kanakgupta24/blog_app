import { useEffect, useState } from 'react';

import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

// import { getAllPosts } from '../../../service/api';
import { API } from '../../../service/api';

//components
import Post from './post.jsx';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => { 
            try
            {let response = await API.getAllPosts({ category : category || '' });
            if (response.isSuccess) {
                setPosts(response.data);
            }}
            catch(error)
            {
                alert('Refresh the page');
            }
        }
        fetchData();
    }, [category]);

    return (
        <>
            {
                posts&&posts.length>0 ? posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>

                        {/* <div>hello</div> */}
                    </Grid>
                )) : <Box style={{color: '#878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available for selected category
                    </Box>
            }
        </>
    )
}

export default Posts;