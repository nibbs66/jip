import { Client, Storage } from 'appwrite';
import {PUBLIC_INSTANCE_URL, PUBLIC_PROJECT_ID, PUBLIC_BUCKET_ID} from "$env/static/public";

export const client = new Client();


client
    .setEndpoint(PUBLIC_INSTANCE_URL)
    .setProject(PUBLIC_PROJECT_ID)


export const storage = new Storage(client);
export { ID } from 'appwrite';
export const promise = storage.listFiles(PUBLIC_BUCKET_ID);
promise.then(function (result) {
    return result
}, function (error) {
    console.log(error);
});

