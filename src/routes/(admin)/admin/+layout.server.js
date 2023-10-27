export const load = async ({locals}) => {
    const session = await locals.auth.validate();

    if (session) {
        const {user} = session;
        return { user };
    }

}
