import axios from "axios";
import { Artist } from "../models/Artist";
import { TICKETMASTER_API_KEY } from "../constants/ApiKeys";
import { Event } from "../models/Event";

const apiUrl = 'https://app.ticketmaster.com';
const apiKey = `apikey=${TICKETMASTER_API_KEY}`;
const headers = {
    'User-Agent':"setlistApp/1.0"
};

export async function fetchEvents(artistName){
    //fetches and returns an array of (simplified) event objects from a keyword (artist name)
    const url = `${apiUrl}/discovery/v2/events?keyword=${encodeURIComponent(artistName)}&${apiKey}`;
    try{
        const response = await axios.get(url, {headers: headers});
        var events = [];
        if(!!response.data._embedded.events){
            response.data._embedded.events.forEach(item => {
                events.push(new Event(item.id, item.name, item.images[0].url, item.dates.start.localDate, `${item._embedded.venues[0]?.address?.line1} \n ${item._embedded.venues[0]?.city?.name}, ${item._embedded.venues[0]?.state?.stateCode}`));
            });
        }
        return events;
            
    } catch(err){
        console.log(err);
    }
    
    
}

export async function fetchEventInfo(eventID){
    //fetches and returns info for a single event
        const url = `${apiUrl}/discovery/v2/events/${eventID}?${apiKey}`;
        try{
            const response = await axios.get(url, {headers: headers});
            const item = response.data
            const event = new Event(item.id, item.name, item.images[0].url, item.dates.start.localDate, `${item._embedded.venues[0].address?.line1} \n ${item._embedded.venues[0].city?.name}, ${item._embedded.venues[0].state?.stateCode}`, Number(item._embedded.venues[0].location.latitude), Number(item._embedded.venues[0].location.longitude), item.info, item.url);
            return event;
                
        } catch(err){
            console.log(err);
        }
}

