import axios from "axios";
import { Artist } from "../models/Artist";
import { DISCOGS_API_KEY, DISCOGS_API_SECRET } from "../constants/ApiKeys";

const apiUrl = 'https://api.discogs.com';
const apiKeySecret = `key=${DISCOGS_API_KEY}&secret=${DISCOGS_API_SECRET}`;
const headers = {
    'User-Agent':"setlistApp/1.0"
};

export async function fetchArtists(searchTerm){
    //fetches and returns an array of artist objects from a search term
    const url = `${apiUrl}/database/search?q=${encodeURIComponent(searchTerm)}&type=artist&${apiKeySecret}`;
    try{
        const response = await axios.get(url, {headers: headers});
        var artists = [];
        const placeholder = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1qrhEhfPI_tojUD7VMYuuLS2gVcxEy4dpSvGbxQAy5C0ZRGi_Pr3TYxyUkVyjsJJIHA&usqp=CAU'
        response.data.results.forEach(item => {
            //discog's placeholder image is a blank white image named spacer.gif, if it shows up switch it for my placeholder
            const cover_image = item.cover_image.includes('spacer.gif')?placeholder:item?.cover_image;
            artists.push(new Artist(item.title, cover_image, item.id));
        });
        return artists;
            
    } catch(err){
        console.log(err);
    }
    
    
}

export async function fetchArtistInfo(artistID){
    //fetches and returns info for a single artist
        const url = `${apiUrl}/artists/${artistID}?${apiKeySecret}`;
    try{
        const response = await axios.get(url, {headers: headers});
        const artist = new Artist(response.data?.name, response.data.images[0]?.uri, artistID, response.data?.profile);
        return artist;
            
    } catch(err){
        console.log(err);
    }
}

export function fetchAlbums(artistID){
    //fetches and returns an array of album objects all albums from a specified artist
}

