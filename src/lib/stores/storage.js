import {browser, dev} from "$app/environment";
import {readable} from "svelte/store";
import { Client, Storage, ID } from 'appwrite';
import {PUBLIC_INSTANCE_URL, PUBLIC_PROJECT_ID, PUBLIC_BUCKET_ID} from "$env/static/public";

function create_storage() {
    let client;
    let storage;
    const {subscribe} = readable(null, (set) => {
        async function init() {
            client = new Client();


            client
                .setEndpoint(PUBLIC_INSTANCE_URL)
                .setProject(PUBLIC_PROJECT_ID)


             storage = new Storage(client);
            set(storage);
        }
        if (browser) {
            init();
        }
    });
    return {subscribe}
}
export const storage_store = create_storage();
