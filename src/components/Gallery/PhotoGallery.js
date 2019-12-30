import React from 'react';
import Gallery from 'react-photo-gallery';
import { withStyles } from "@material-ui/core/styles";
import CustomImageComponent  from './CustomImageComponent';
import PhotoModal from './PhotoModal';

const style = theme => ({
    backdrop: {
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255,255,255,0.9)",
        zIndex: 200,
        cursor: "pointer"
    }
});

class PhotoGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            currentImage: 0,
        }
        this.handleClose = this.handleClose.bind(this);
    }

    openModal = (e, obj) => {
        const images = this.props.images;
        const imageData = this.props.data.filter((imageEdge) => {
            const imageFileName = images[obj.index].node.fluid.originalName.split('.jpg')[0];
            const imageTitle = imageEdge.node.childStaticJson.title; 
            return imageFileName === imageTitle; 
        })[0];
        this.setState({ 
            showModal: imageData && true, 
            currentImage: obj.index, 
            el: e.currentTarget, 
            imageData: imageData,
        });
    }

    handleClose = () => {
        this.setState({ showModal: false });
    }

    columns = (containerWidth) => {
        let columns = 1;
        if (containerWidth >= 640) columns = 2;
        if (containerWidth >= 900) columns = 3;
        if (containerWidth >= 1500) columns = 4;
        return columns;
    }

    render() {
        const { classes, images } = this.props;
        const photoSet = images.map((image) => ({
            src: image.node.fluid.originalImg,
            caption: image.node.fluid.originalName,
            width: image.node.fixed.width,
            height: image.node.fixed.height,
            fluid: image.node.fluid
          }));

        return <div>
            <Gallery columns={this.columns} photos={photoSet} margin={10} onClick={this.openModal} ImageComponent={CustomImageComponent}/>
            {this.state.showModal && <div className={classes.backdrop}></div>}
            {this.state.imageData && <PhotoModal 
                open={this.state.showModal}
                handleClose={this.handleClose}
                el={this.state.el}
                image={this.props.images[this.state.currentImage].node}
                imageData={this.state.imageData.node.childStaticJson}
            /> }
        </div>
    }
}

export default withStyles(style)(PhotoGallery);