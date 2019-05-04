import * as React from 'react';
import Image from '../Image/Image';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography"; 
import Instalink from './Instalink';
export default class About extends React.Component {
    render() {
        return (
            <div>
                <Paper elevation={15} style={{ width: 340, position: 'absolute', marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, height: 500, top: 100 }}>
                    <Image imageStyle={{ width: 300, marginLeft: 20, position: 'absolute', top: -20, overflow: 'visible' }} image={this.props.image} />
                    <div style={{ top: 300, position: 'relative' }}>
                        <Typography align={'center'} gutterBottom variant="h5" >
                            {'Pushkara N G'}
                        </Typography>
                        <Typography align={'center'} gutterBottom variant="subtitle1" color={'secondary'} >
                            {'Photographer, Software Developer'}
                        </Typography>
                        <Typography align={'center'} gutterBottom variant="body1">
                            {'I am living in Bengaluru, India. I like taking Macro, Birds & Nature photos. I love to travel, riding bicycle and listen to music '}
                        </Typography>
                        <Typography align={'center'} gutterBottom variant={'caption'}>
                         {'Follow me on'}
                        </Typography>
                        <Typography align={'center'} style={{marginTop: -10}}>
                            <Instalink link={'https://www.instagram.com/pushkara_nagaragadde/'} />
                        </Typography>
                    </div>
                </Paper>

            </div>
        )
    }
}

