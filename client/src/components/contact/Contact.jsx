
// import { Box, styled, Typography, Link } from '@mui/material';
// import { GitHub, Instagram, Email } from '@mui/icons-material';

// const Banner = styled(Box)`
// background-image: url(https://i.ibb.co/h7d3XC6/try.jpg);
// width: 100%;
// height: 50vh;
// background-position: left 0px bottom 0px;
// background-size: cover;
// `;

// const Wrapper = styled(Box)`
//     padding: 20px;
//     & > h3, & > h5 {
//         margin-top: 50px;
//     }
// `;

// const Text = styled(Typography)`
//     color: #878787;
// `;


// const Contact = () => {
//     return (
//         <Box>
//             <Banner />
//             <Wrapper>
//                 <Typography variant="h3">Getting in touch is easy!</Typography>    
//                 <Text variant="h5">
//                     Reach out to me on
//                     <Link href="https://www.instagram.com/heyykanak/" color="inherit" target="_blank">
//                         <Instagram/>
//                     </Link>
//                     or send me an Email 
//                     <Link href="mailto:kanakgupta2411@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
//                         <Email />
//                     </Link>.
//                 </Text>
//             </Wrapper>
//         </Box>
//     );
// }

// export default Contact;




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

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const Contact = () => {

    return (
        <Container>
            <Banner/>
            <Wrapper>
            <Typography variant="h3">Getting in touch is easy!</Typography>    
                 <Text variant="h5">
                     Reach out to me on
                     <Link href="https://www.instagram.com/heyykanak/" color="inherit" target="_blank">
                         <Instagram/>
                     </Link>
                     or send me an Email 
                     <Link href="mailto:kanakgupta2411@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                         <Email />
                     </Link>.
                 </Text>
            </Wrapper>
        </Container>
    )
}

export default Contact;