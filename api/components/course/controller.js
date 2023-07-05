const nanoid = require('nanoid')
const auth = require('../auth')

const TABLA = 'course';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/mysql')
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id)
    }

    async function create(body) {
        const user = {
            course_name: body.course_name,
            category: body.category,
            description: body.description,
            classes: body.classes,
            hours: body.hours,
        }

        if (body.id) {
            user.id = body.id;
        } else {
            user.id = nanoid();
        }

        // if (body.password || body.username) {
        //     await auth.create({
        //         id: user.id,
        //         username: user.username,
        //         password: body.password,
        //     })
        // }

        return store.insert(TABLA, user)
    }

    function update(body) {
        const user = {
            name: body.name,
            username: body.username,
        }

        if (body.id) {
            user.id = body.id;
        } else {
            user.id = nanoid();
        }

        return store.update(TABLA, user);
    }

    function deleteuser(id) {
        return store.deleteuser(TABLA, id)
    }

    function follow(from, to) {
        return store.insert(TABLA + '_follow', {
            user_from: from,
            user_to: to,
        });
    }

    async function following(user) {
        const join = {}
        join[TABLA] = 'user_to'; // { user: 'user_to' }
        const query = { user_from: user }
		
		return await store.query(TABLA + '_follow', query, join)
	}

    return {
        list,
        get,
        create,
        update,
        follow,
        following,
        deleteuser,
    }
}