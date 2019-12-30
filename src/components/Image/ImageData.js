import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

const style = theme => ({
    justify: {
        textAlign: 'justify'
    },
    thin: {
        fontWeight: 400,
        textAlign: 'justify'
    }
});

class ImageDetails extends React.Component {
    render() {
        const { data, classes } = this.props;
        return (
            <div style={{paddingRight: 10}}>
                <Typography gutterBottom variant="overline" >
                    {data.date}
                </Typography>
                <Typography gutterBottom variant="h4" >
                    {data.title}
                </Typography>
                <Typography className={classes.thin} gutterBottom variant="body2" component="p">
                    {data.description}
                </Typography>
                <Typography className={classes.thin} gutterBottom variant="body2" component="p">
                    {data.story}
                </Typography>
                <Typography className={classes.justify} gutterBottom variant="caption" >
                    {"#" + data.category.join(" #")}
                </Typography>
                {data.exif && <Typography gutterBottom variant="caption" >
                    {data.exif}
                </Typography>}
                {data.insta && <Typography gutterBottom variant="caption" >
                    <a href={data.insta} target="_blank" rel="noopener noreferrer">
                        <img alt={data.title} style={{ boxShadow: 'none', width: 20 }} src="https://img.icons8.com/color/48/000000/filled-like.png" />
                    </a>
                </Typography>}
            </div>
        )
    }
}

export default withStyles(style)(ImageDetails);