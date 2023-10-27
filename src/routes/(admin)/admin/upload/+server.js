import {fail} from "@sveltejs/kit";
import {ID, storage} from "$lib/server/appwrite.js";
import {PUBLIC_BUCKET_ID} from "$env/static/public";
import * as database from '$lib/database.js';
import { json } from '@sveltejs/kit';

export async function POST (request) {
  const data = await request.formData();
    const { upload } = data

    const promise =  storage.createFile(PUBLIC_BUCKET_ID, ID.unique(), [upload], ['*']);
    promise.then(function (result) {
        console.log('result', JSON.stringify(result));
        return result
    }, function (error) {
        console.log(error);
    });

    //const { todos } = await database.createTodo({  upload });

    //return json({ todos }, { status: 201 });
}
