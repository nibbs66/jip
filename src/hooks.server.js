import { auth } from "$lib/server/lucia.ts";
import { redirect } from "@sveltejs/kit";
import { sequence } from '@sveltejs/kit/hooks';


export const handle = async ({event, resolve}) => {
    event.locals.auth = auth.handleRequest(event);
    const credentials = await event.locals.auth.validate();


    if(event.url.pathname.startsWith('/admin')) {
        if(!credentials) {
            throw redirect(303, "/")
        }
       if(credentials) {
           if(credentials.user.role !== 'admin'){
               throw redirect(303, "/")
           }
       }
    }
    return await resolve(event);
} // first hook
