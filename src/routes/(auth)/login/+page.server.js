
import prisma from "$lib/server/prisma.js";
import { redirect, fail } from '@sveltejs/kit';
import { LuciaError } from "lucia"


import { auth } from "$lib/server/lucia.ts"

export const load = async ({ locals }) => {
    const session = await locals.auth.validate()
    if (session) {
        throw redirect(302, '/')
    }
}
export const actions = {
  default: async ({request, locals}) => {
      const {name, email, password, phone } = Object.fromEntries(
      await request.formData()
    )
    try {
      const key = await auth.useKey( 'email', email, password )

       const session = await auth.createSession({userId: key.userId})

        if(!!session) {
            locals.auth.setSession(session)
            throw redirect(302, '/')
        }

    } catch (err) {
          if(err instanceof LuciaError) {
                return fail(400, {
                    incorrect: true,
                    message: "Incorrect email or password."
                })
          }



    }

  }

}
