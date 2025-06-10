import axios from "axios";
import { FIREBASE_API_KEY } from "../constants/ApiKeys";

export async function addUserData(token, data){

    console.log('before get info')
    const userInfoUrl = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_API_KEY}`
    const userInfoResponse = await axios.post(userInfoUrl, {idToken: token});

    const uid = userInfoResponse.data.users[0].localId;
    console.log('after! id is'+uid+' and '+token);

    try {
        const url = `https://setlist-aea9b-default-rtdb.firebaseio.com/users/${uid}.json?auth=${token}`
        const response = await axios.patch(url, data);
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    
}

export async function getUserData(token) {
    console.log(token)

    const userInfoUrl = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_API_KEY}`
    const userInfoResponse = await axios.post(userInfoUrl, {idToken: token});
    console.log('hello')

    const uid = userInfoResponse.data.users[0].localId;

    const url = `https://setlist-aea9b-default-rtdb.firebaseio.com/users/${uid}.json?auth=${token}`
    return axios.get(url);
}