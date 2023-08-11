const { spec } = require("pactum")
const { BASE } = require("../../utils/url")
const { baseUrl } = require("../../constants")

async function getUsuariosByID(idUser, statusCode = 200) {
    return await spec()
        .get(`${baseUrl}/usuarios/${idUser}`)
        .expectStatus(statusCode)
}

module.exports = {
    getUsuariosByID
}