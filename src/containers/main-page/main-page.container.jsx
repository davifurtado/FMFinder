import React from 'react';
//import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import { FormControl, Button, TextField, Box, Grid } from '@material-ui/core';
import ArtistCard from '../../components/artist-cards/artist-cards.component';
import CardList from '../../components/artist-cards/card-list.component';
import axios from 'axios';

const API_KEY = '30a4bf95cd91d1ab0a8db575ce1d2ee8';



class MainPage extends React.Component {
    constructor() {
        super();

        this.state = {
            artists: [],
            searchField: ''
        }
    }

    //generic function to listen to onChange events and setState to it
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSearch = () => {
        const searchArtists = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.state.searchField}&api_key=${API_KEY}&format=json`;
        let artists = []
        axios.get(searchArtists)
            .then((response) => {
                this.setState ({
                    artists: response.data.results.artistmatches.artist
            })
        })
    }

    render() {
        return (
            <FormControl >
                <Box>
                    <TextField
                        placeholder="Type to Seach Artists..."
                        variant="outlined" size="small"
                        name="searchField"
                        onChange={this.handleOnChange}
                    />
                    <Button variant="contained" color="primary" onClick={this.handleOnSearch}>Search</Button>
                </Box>
                {<div><CardList artists={this.state.artists}/></div>}
            </FormControl>
        )
    }
}

export default MainPage
