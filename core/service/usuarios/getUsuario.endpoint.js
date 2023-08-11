const { spec } = require("pactum")
const { baseUrl } = require("../../constants")

    async function getUsuarios() {
        return await spec()
            .get(`${baseUrl}/usuarios`)
            .expectStatus(200)
    }

module.exports = {
    getUsuarios
}