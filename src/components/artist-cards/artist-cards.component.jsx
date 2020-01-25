import React from 'react';
import { FormLabel, Grid } from '@material-ui/core';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';



const ArtistCard = ({ name, listeners, image }) => (
    <div style={{ margin: '5px', backgroundColor: '#E8E8E8' }}>
        {
        <Grid container direction="row" bgcolor="grey.300">
            <div style={{ display: 'flex', flexDirection:"column" }} >
                <FormLabel>{name}</FormLabel>
                <FormLabel>{listeners}</FormLabel>
            </div>
            <LibraryMusicIcon color="primary" />
        </Grid>
        }
            
    </div>
)
export default ArtistCard
