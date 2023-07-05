const db = {
    'user': [
        { id: '1', name: 'Carlos' },
        { id: '2', name: 'Luis' },
    ],
};

async function list(tabla) {
    return db[tabla] || []
}

async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
    if(!db[tabla]){
        db[tabla] = []
    }
    db[tabla].push(data);

    console.log(db);
}

async function remove(tabla, id) {
   let table = await list(tabla)
   let index = table.indexOf(id)
   return table.splice(index + 1, 1 )
}

async function query(tabla, q) {
    let col = await list(tabla)
    let keys = Object.keys(q)
    let key = keys[0]
    
    return col.filter(item => item[key] === q[key])[0] || null
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query,
};