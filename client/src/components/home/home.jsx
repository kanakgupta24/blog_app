
import { Grid ,styled} from '@mui/material';

// //components
import Banner from '../banner/banner';
import Categories from './categories';
import Posts from './post/posts';

const PostColor = styled(Grid)`
    background-color: beige
`;

const CColor = styled(Grid)`
    background-color: beige
`;

const Home = () => {

    return (

        // <div>Hello from home</div>

        <>
            <Banner />

            <Grid container>
                 <CColor item lg={2} xs={12} sm={2}>
                    <Categories />
        </CColor>

                 <PostColor container item xs={12} sm={10} lg={10}>
                 <Posts />

                
              </PostColor>
           </Grid>  
        </>
    )
}

export default Home;