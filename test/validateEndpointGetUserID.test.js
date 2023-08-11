const { assert, expect } = require("chai")
const { getUsuariosByID } = require("../core/service/usuarios/getUsuarioByID.endpoint")
const { postUsuario } = require("../core/service/usuarios/postUsuario.endpoint")
const { user01 } = require("../data/usuarios/newUser")
const { deleteAllUsers } = require("../core/service/usuarios/deleteUsuarioByID.endpoint")
const { statusCode } = require("../data/global/statusCode.data")

describe('ServeRest - functional - Get Users', async () => {

    let idUser
    before('Deve deletar todos os usuários cadastrados e cadastrar um novo usuário', async () => {
        await deleteAllUsers()
        let newUser = await postUsuario({
            nome:  user01.nome,
            email: user01.email,
            password: user01.password,
            administrador: user01.administrador,
        })
        idUser = newUser.json._id
    })

    it('[TC-01] - Deve verificar se o endpoint get Usuários/{_id} está retornando o usuário cadastrado corretamente', async () => {
        let user = await getUsuariosByID(idUser)

        assert.equal(user.json.nome, user01.nome, 'Nome é diferente do esperado')
        assert.equal(user.json.email, user01.email, 'E-mail é diferente do esperado')
        expect(user.json).to.have.property('_id')
        assert.equal(user.json._id, idUser, 'ID é diferente do esperado')
    })

    it('[TC-02] - Deve verificar se o endpoint get Usuários/{_id} está retornando a mensagem de erro correta caso seja passado um id que não exista', async () => {
        let userIncorreto = await getUsuariosByID('idIncorreto', statusCode.badRequest.status)
        assert.equal(userIncorreto.json.message, 'Usuário não encontrado')
    })
})