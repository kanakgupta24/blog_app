import React, { useState, useEffect, useContext } from 'react';

import { styled, Box, TextareaAutosize, Button, InputBase, FormControl } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';



const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: '10px 15px'
    }
}));

const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: '50vh',
    objectFit: '10vh auto',
    [theme.breakpoints.down('sm')]: {
        marginTop:'0',
        width: '100%',
        height: '40vh',
        objectFit: 'contain'
    }
}));

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);

    const url = post.picture ? post.picture :'https://i.ibb.co/10z2Bkz/Untitled-design-2.jpg';
    
    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                try{
                const response = await API.uploadFile(data);
                if(response.isSuccess)
                {post.picture = response.data;}
                else
                {
                    alert('Try again');
                } 

            }
            catch(error)
            {
                alert('Check your connection and try again');
            }
            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'Miscellaneous';
        post.username = account.username;
    }, [file])

    const savePost = async () => { 

        if(post.description===''||post.title==='' )
        {
            alert('Fill all required boxes carefully')
        }

        else
        { let response= await API.createPost(post);
            if(response.isSuccess)
            {
                // url='https://i.ibb.co/10z2Bkz/Untitled-design-2.jpg';
            navigate('/');
            }
        
        else{
        alert('Refresh the page');
        }}
       

        
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Image src={url} alt="post" />

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputTextField onChange={(e) => handleChange(e)} value={post.title} name='title' placeholder="Title" />
                {/* <ChooseCategory/> */}
                <Button onClick={() => savePost()} variant="contained" color="primary">Share your story</Button>
            </StyledFormControl>

            <Textarea
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
                value={post.description}
                onChange={(e) => handleChange(e)} 
            />
        </Container>
    )
}

export default CreatePost;