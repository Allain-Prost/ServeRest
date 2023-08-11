const { spec } = require("pactum")
const { getUsuarios } = require("./getUsuario.endpoint")
const { baseUrl } = require("../../constants")

async function deleteUsuariosByID(idUser) {
    return await spec()
        .delete(`${baseUrl}/usuarios/${idUser}`)
        .expectStatus(200)
}

let users
async function deleteAllUsers() {
    users = await getUsuarios()
    for(let i = 0; i < users.json.quantidade; i++){
        await deleteUsuariosByID(users.json.usuarios[i]._id)
    }
}

module.exports = {
    deleteUsuariosByID,
    deleteAllUsers
}