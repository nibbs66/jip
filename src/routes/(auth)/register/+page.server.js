import { fail } from '@sveltejs/kit';
import prisma from "$lib/server/prisma.js";
import { redirect } from '@sveltejs/kit';
import {data} from '../../(auth)/register/data.js'


import { auth } from "$lib/server/lucia.ts"
import { json } from '@sveltejs/kit'
import {LuciaError} from "lucia";
import {PrismaClientKnownRequestError} from "@prisma/client/runtime/library.js";
export const load = async ({ locals }) => {
    const session = await locals.auth.validate()
    if (session) {
        throw redirect(302, '/')
    }
}

export const actions = {

    default: async({request}) => {
        let res;
        const {name, email, password, phone } = Object.fromEntries(
            await request.formData()
        )
        if (password.length < 8) {
            return fail(400, {
                incorrect: true,
                message: "Password must be min 8 characters."
            })
        }
        try {
             res = await auth.createUser({
                key: {
                    providerId: 'email',
                    providerUserId: email,
                    password,
                },
                attributes: {
                    role: 'user',
                }

            })
            /*if(!!res.userId) {
                const member = await prisma.membership.create({
                    data: {
                        role: 'user',
                        user: {
                            connect: {
                                id: res.userId

                            }
                        },
                        org: {
                            create: {
                                name: 'Test Org',
                                url: 'www.test.org'
                            }
                        }
                    }
                })
                console.log(member)
            }

             */

        } catch (err) {
            if (err instanceof PrismaClientKnownRequestError) {
                return fail(400, {
                    incorrect: true,
                    message: "Email must be unique..."
                })
            }
            if(err instanceof LuciaError) {
                return fail(400, {
                    incorrect: true,
                    message: "Something went wrong..."
                })
            }
        }
        if(!!res.userId) {
            throw redirect(302, '/')
        }

    }
}
