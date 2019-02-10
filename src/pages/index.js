import React from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { graphql } from 'gatsby';
import PhotoGallery from '../components/Gallery';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffffff' }
  },
  layout: {
    drawerWidth: 232
  }
});

export default class Index extends React.Component {
  render() {
    const { data } = this.props;
    const photoSet = data.allImageSharp.edges.map((image) => ({ 
      src: image.node.fluid.originalImg, 
      caption: image.node.fluid.originalName, 
      width: image.node.fixed.width, 
      height: image.node.fixed.height 
    }));
    const imageData = data.allFile.edges;

    return (
      <MuiThemeProvider theme={theme} key="app">
        <PhotoGallery photoSet={photoSet} images={data.allImageSharp.edges} data={imageData} />
      </MuiThemeProvider>
    );
  }
}

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid (toFormat : JPG){
          src
          originalName
          originalImg
          aspectRatio
          srcSet
          sizes
          }
          fixed (toFormat : JPG){
            src
            width
            height
          }
        }
      }
    }
    allFile(filter: {extension: {eq: "json"}}) {
      edges {
        node {
          childStaticJson {
            title
            description
            place
            category
            exif
            date
            insta 
          }
        }
      }
    }
  }  
`