import prisma from '$lib/server/prisma';

import {redirect, fail} from "@sveltejs/kit";
import {ID, storage} from "$lib/server/appwrite";
import {PUBLIC_BUCKET_ID} from "$env/static/public";
import * as database from '$lib/database.js';
export const load = async () => {
   const files = await storage.listFiles(PUBLIC_BUCKET_ID)
    return {
        files
    };

}
export const actions = {
    default: async ({ request }) => {

        const { url, website, host_id } = Object.fromEntries(await request.formData());

  if (!url || !website) {
         return {
              status: 400,
              body: {
                error: 'Missing required fields'
              }
         }
   }

        try {
            const res = await prisma.sponsor.create({
                data: {
                    url,
                    website,
                    host_id
                }
            })
            return {
                status: 201,
                body: {
                    data: res
                }
            }
        } catch (error) {
            console.log(error)
        }







    }



}
