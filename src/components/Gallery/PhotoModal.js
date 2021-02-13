import React from 'react';
import Modal from '@material-ui/core/Modal';
import Image from '../Image/Image';

export default class PhotoModal extends React.Component {
    render(){
        return (
            <Modal
                className={'photoModal'}
                open={this.props.open}
                onClose={this.props.handleClose}
                BackdropProps={{invisible: true}}
                elevation={24}
                >
                <Image image={this.props.image}/>
            </Modal>
        )
    }
}
