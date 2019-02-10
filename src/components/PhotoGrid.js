import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

export default class PhotoGrid extends React.Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.goto = this.goto.bind(this);

    }
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    goto(index) {
        this.setState({
            currentImage: index
        })
    }
    render() {
        return (<div>
            <Gallery photos={this.props.photoSet} margin={2} onClick={this.openLightbox} />
            <Lightbox images={this.props.photoSet}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
                onClickThumbnail={this.goto}
                showThumbnails={true}
                backdropClosesModal={true}
            />
        </div>
        );
    }
}