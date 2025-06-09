export class Event {
    constructor(id, title, imageUri, date, address, lat, lng, desc, url){
        this.id = id;
        this.title = title;
        this.imageUri = imageUri;
        this.date = date;
        this.location = {address: address, latlng:{lat:lat, lng:lng}};
        this.desc = desc;
        this.url = url;
    };
}