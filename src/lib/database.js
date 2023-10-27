const database = new Map();
export function getTodos(userid) {
    if (!database.has(userid)) {
        createTodo({ userid, description: 'Learn about API routes' });
    }

    return Array.from(database.get(userid).values());
}

export function createTodo({  upload }) {
        const userid = "1";
        database.set(userid, new Map());
    const todos = database.get(userid);

    const id = crypto.randomUUID();

    todos.set(id, {
        id,
        upload,
        done: false
    });

    return {
        todos
    };


    }

