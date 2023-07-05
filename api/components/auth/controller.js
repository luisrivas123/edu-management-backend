const bcrypt = require('bcrypt')

const auth = require('../../../auth')
const TABLA = 'auth';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/mysql')
    }

    const login = async (username, password) => {
        const data = await store.query(TABLA,{ username:username })

        return bcrypt.compare(password, data.password)
            .then(sonIguales => {
                if(sonIguales) {
                    // return auth.sign(data)

                    const plainObject = {...data}
                    return auth.sign(plainObject)
                
                } else {

                    throw new Error('Informacion invalida')
                }
            })
    }

    async function create(data) {
        const authData = {
            id: data.id,
        }

        if (data.username) {
            authData.username = data.username
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 5)
        }

        return store.insert(TABLA, authData)
    }

    return {
        login,
        create,
    };
};