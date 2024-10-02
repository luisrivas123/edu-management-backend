const nanoid = require('nanoid')
const auth = require('../auth')

const TABLA = 'user'

module.exports = function (injectedStore) {
  let store = injectedStore
  if (!store) {
    store = require('../../../store/mysql')
  }

  function list() {
    return store.list(TABLA)
  }

  function get(id) {
    return store.get(TABLA, id)
  }

  async function create(body) {
    const user = {
      name: body.name,
      username: body.username,
      email: body.email
    }

    if (body.id) {
      user.id = body.id
    } else {
      user.id = nanoid()
    }

    if (body.password || body.username) {
      await auth.create({
        id: user.id,
        username: user.username,
        password: body.password
      })
    }
    return store.insert(TABLA, user)
  }

  function update(body) {
    const user = {
      name: body.name,
      username: body.username,
      email: body.email
    }

    if (body.id) {
      user.id = body.id
    } else {
      user.id = nanoid()
    }

    return store.update(TABLA, user)
  }

  function deleteuser(id) {
    return store.deleteuser(TABLA, id)
  }

  function courseAdd(from, to) {
    return store.insert(TABLA + '_course', {
      user_id: from,
      course_id: to
    })
  }

  async function courseList(user) {
    const join = {}
    join['course'] = 'course_id' // { user: 'user_to' }
    const query = { user_id: user }

    return await store.query(TABLA + '_course', query, join)
  }

  return {
    list,
    get,
    create,
    update,
    courseAdd,
    courseList,
    deleteuser
  }
}
