import React from 'react';
import Gallery from 'react-photo-gallery';
import PhotoModal from './PhotoModal';
import Popover from '@material-ui/core/Popover';
import { withStyles } from "@material-ui/core/styles";



const style = theme => ({
    modal: {
        width: "95vw",
    },
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
            currentImage: 0
        }
        this.handleClose = this.handleClose.bind(this);

    }

    openModal = (e, obj) => {
        const images = this.props.images;
        this.setState({ 
            showModal: true, 
            currentImage: obj.index, 
            el: e.currentTarget, 
            imageData: this.props.data.filter((imageEdge) => images[obj.index].node.fluid.originalName.split('.jpg')[0] === imageEdge.node.childStaticJson.title)[0]
        });
    }
// this.props.data.filter((imageEdge) => this.props.images[obj.index].node.fluid.originalName === imageEdge.node.childStaticJson.title)[0] 
    handleClose = () => {
        this.setState({ showModal: false });
    }

    render() {
        const { classes } = this.props
        console.log(this.state);
        return <div>
            <Gallery columns={3} photos={this.props.photoSet} margin={10} onClick={this.openModal} />
            {this.state.showModal && <div className={classes.backdrop}></div>}
            <Popover
                className={classes.modal}
                open={this.state.showModal}
                onClose={this.handleClose}
                anchorEl={this.state.el}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'top',
                }}
                elevation={24}
                transitionDuration={{ enter: 15, exit: 15 }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'top'
                }}>
                {this.state.imageData && <PhotoModal
                    className={classes.content}
                    image={this.props.images[this.state.currentImage].node}
                    data={this.state.imageData.node.childStaticJson}
                    closePopup={this.handleClose}
                /> }
            </Popover>
        </div>
    }
}

export default withStyles(style)(PhotoGallery);