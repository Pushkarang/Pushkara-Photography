import React from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { graphql } from 'gatsby';
import PhotoGallery from '../components/Gallery/PhotoGallery';
import TopBar from '../components/Common/TopBar';
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

export default class Index extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <MuiThemeProvider theme={theme} key="app">
        <Meta/>
        <TopBar />
        <PhotoGallery images={data.allImageSharp.edges} />
      </MuiThemeProvider>
    );
  }
}


export const query = graphql`
  query {
    allImageSharp (filter: {fluid: {originalName: {ne: "profile.jpg"}}}) {
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
  }  
`