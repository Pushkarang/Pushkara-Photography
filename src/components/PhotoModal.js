import React from 'react';
import { Paper } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Img from "gatsby-image"
import Typography from '@material-ui/core/Typography';
import Instalink from './Instalink';

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

class PhotoModal extends React.Component {

    render() {
        const { image, data, classes } = this.props;
        return <Paper className={classes.paper} elevation={1}>

                {[classes.grid_img_desktop, classes.grid_img_mobile].map((layout, index) => <div className={layout} id={index === 0 ? 'desktop' : 'mobile'}>
                    <Img fluid={image.fluid} style={{maxHeight: '95vh'}}/>
                </div>)}

                {[classes.grid_text_desktop, classes.grid_text_mobile].map((layout, index) => <div className={layout} id={index === 0 ? 'desktop' : 'mobile'}>
                    <Typography gutterBottom variant="overline" >
                        {data.date}
                    </Typography>
                    <Typography gutterBottom variant="h4" >
                        {data.title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" >
                        {data.description}
                    </Typography>
                    <Typography gutterBottom variant="overline" >
                        {"#" + data.category.join(" #")}
                    </Typography>
                    <Typography gutterBottom variant="overline" >
                        {data.exif}
                    </Typography>
                    <Instalink link={data.insta}/>
                </div>)}
        </Paper >
    }
}

export default withStyles(style)(PhotoModal);