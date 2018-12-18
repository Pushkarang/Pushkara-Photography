import React from 'react';
import Drawer from '../components/Drawer';
import PhotoGrid from "../components/PhotoGrid";
import { pink } from "@material-ui/core/colors";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { graphql } from 'gatsby';
const theme = createMuiTheme({
    palette: {
        primary: pink
    },
    layout: {
        drawerWidth: 232
    }
});

export default class Index extends React.Component {
    render() {
        const { data } = this.props;
        const photoSet = data.allImageSharp.edges.map((image) => ({ src: image.node.fluid.src, width: image.node.fixed.width, height: image.node.fixed.height }));
        return (
        <MuiThemeProvider theme={theme} key="app">
            <Drawer> 
                <PhotoGrid photoSet={photoSet}/>
            </Drawer>
        </MuiThemeProvider>
        );
    }
}

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid{
          src
          }
          fixed{
            width
            height
          }
        }
      }
    }
  }  
`