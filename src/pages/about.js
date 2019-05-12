import React from 'react';
import TopBar from '../components/Common/TopBar';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AboutMe from '../components/About/About';
import { graphql } from 'gatsby'
import Meta from "../components/Common/Meta";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#ffffff' },
        secondary: { main: '#CC0000' }
    },
    layout: {
        drawerWidth: 232
    }
});



export default class About extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <MuiThemeProvider theme={theme} key="app">
                <Meta/>
                <TopBar />
                <AboutMe image={data.profile.childImageSharp}/>
            </MuiThemeProvider>
        );
    }
}
  

export const query = graphql`
  query {
    profile: file(relativePath: { eq: "profile.jpg" }) {
    	childImageSharp {
      fluid {
        src
        originalName
        originalImg
        aspectRatio
        srcSetWebp
        sizes
      }
    }
    }
  }  
`

