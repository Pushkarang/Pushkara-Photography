import React from 'react';
import Img from "gatsby-image"

export default class Image extends React.Component {

    render() {
        const { image, imageStyle } = this.props;
        return (
            <div>
                <Img fluid={image.fluid} style={{...imageStyle, borderRadius: '.1cm'}}/>
            </div>
        )
    }
}

