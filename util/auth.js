import axios from "axios";
import { FIREBASE_API_KEY } from "../constants/ApiKeys";

async function auth(mode, email, password) {
    try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${FIREBASE_API_KEY}`;
        const response = await axios.post(url, {email: email, password: password, returnSecureToken: true});

        const token = response.data.idToken;

        return token;
    } catch (error) {
        console.log(error)
        throw error;
    }
};

export function createUser(email, password) {
    return auth('signUp', email, password);
};

export function login(email, password) {
    return auth('signInWithPassword', email, password) ;
};

