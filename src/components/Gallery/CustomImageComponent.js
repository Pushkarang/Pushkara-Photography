import * as React from 'react';
import Button from '@material-ui/core/Button';


const SelectedImage = ({
    index,
    onClick,
    photo,
    margin
  }) => {
    return (
      <div
        style={{ margin, height: photo.height, width: photo.width}}
      >
      <Button id='imageButton' style={{padding: 0, zIndex: 9}} onClick={e => onClick(e, { index, photo })} >
        <img
          {...photo}
          alt='imageCard'
        />
        </Button>
      </div>
    );
  };
  
  export default SelectedImage;
  