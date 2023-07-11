
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)
(({ theme }) => ({
    width: '100%',
    background: 'url(https://i.ibb.co/hWhtZW7/back.jpg) center/55% repeat-x #000',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
            width: '100%',
            background: 'url(https://i.ibb.co/hWhtZW7/back.jpg) center/55% repeat-x #000',
            height: '23vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundSize:'contain',
            marginTop:'85px'
    }
}));


// `
//     width: 100%;
//     background: url(https://i.ibb.co/hWhtZW7/back.jpg) center/55% repeat-x #000;
//     height: 50vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `;


const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));
const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading></Heading>
            <SubHeading></SubHeading>
        </Image>
    )
}

export default Banner;