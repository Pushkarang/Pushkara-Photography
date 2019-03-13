import React from 'react';
import Popover from '@material-ui/core/Popover';
import ImageCard from '../Image/ImageCard';
import ImageData from '../Image/ImageData';
import Image from '../Image/Image';

export default class PhotoModal extends React.Component {
    render(){
        return (
            <Popover
                className={'photoModal'}
                open={this.props.open}
                onClose={this.props.handleClose}
                anchorEl={this.props.el}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                elevation={24}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}>
                <ImageCard
                    imageComponent={<Image image={this.props.image}/>}
                    dataComponent={<ImageData data={this.props.imageData}/>}
                />
            </Popover>
        )
    }
}
