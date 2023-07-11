
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));


const Banner = styled(Box)(({ theme }) => ({
    backgroundImage: 'url(https://i.ibb.co/h7d3XC6/try.jpg)',
    width: '100%',
    height: '50vh',
    backgroundPosition: 'left 0px bottom 0px',
    backgroundSize: 'contain',
    [theme.breakpoints.down('sm')]: {
        backgroundImage: 'url(https://i.ibb.co/h7d3XC6/try.jpg)',
        width: '90%',
        height: '11.3vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'contain',
        marginTop:'20vh',
        marginLeft:'2.5vh'
    }
}));

// `

//     background-image: url(https://i.ibb.co/h7d3XC6/try.jpg);
//     width: 100%;
//     height: 50vh;
//     background-position: left 0px bottom 0px;
//     background-size: cover;
// `;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Container>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Storiyan--The New generation Story-teller</Typography>
                <Text variant="h5">This website is built by Kanak Gupta. 
                    I am an IT student Of BIT Sindri. I am Web developer. <br />
                    If you are interested, you can view some of my projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Do you have any query or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/heyykanak/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:kanakgupta2411@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Container>
    )
}

export default About;