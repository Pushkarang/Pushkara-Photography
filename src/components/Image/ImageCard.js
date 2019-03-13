import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

const style = theme => ({
    paper: {
        display: 'grid',
        gridTemplateRows: '1fr auto auto',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '10px',
    },
    grid_img_desktop: {
        gridRowStart: 1,
        gridRowEnd: 4,
        gridColumnStart: 1,
        gridColumnEnd: 3,
    },
    grid_img_mobile: {
        gridRowStart: 1,
        gridRowEnd: 2,
        gridColumnStart: 1,
        gridColumnEnd: 4,
    },
    grid_text_desktop: {
        marginLeft: 5,
        gridRowStart: 1,
        gridRowEnd: 4,
        gridColumnStart: 3,
        gridColumnEnd: 4,
    },
    grid_text_mobile: {
        marginLeft: 5,
        gridRowStart: 2,
        gridRowEnd: 4,
        gridColumnStart: 1,
        gridColumnEnd: 4,
    }
});

class ImageCard extends React.Component {

    render() {
        const { imageComponent, dataComponent, classes } = this.props;
        return <Paper className={classes.paper} elevation={1}>

                {[classes.grid_img_desktop, classes.grid_img_mobile].map((layout, index) => <div className={layout} key={`image-${index}`} id={index === 0 ? 'desktop' : 'mobile'}>
                    {imageComponent}
                </div>)}

                {[classes.grid_text_desktop, classes.grid_text_mobile].map((layout, index) => <div className={layout} key={`text-${index}`} id={index === 0 ? 'desktop' : 'mobile'}>
                    {dataComponent}
                </div>)}
        </Paper >
    }
}

export default withStyles(style)(ImageCard);