import React from 'react';
import Gallery from 'react-photo-gallery';
import Modal from '@material-ui/core/Modal';

export default class PhotoGrid extends React.Component {
    state = {
        open: false,
      };
      handleOpen = (e, a) => {
          console.log(a)
        this.setState({ open: true , img: e.target});
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    
    click(obj){
        console.log(obj);
    }
    render() {
        return (<div>
            <Gallery photos={this.props.photoSet} margin={2} onClick={this.handleOpen}/>
            {this.state.img && <Modal
          aria-labelledby={"simple-modal-title"}
          aria-describedby={"simple-modal-description"}
          open={this.state.open}
          onClose={this.handleClose}>
          <h2><img src={this.state.img.src}/></h2>
          </Modal>
          }
            </div>
        );
    }
}