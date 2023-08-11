const { assert } = require("chai")
const { deleteAllUsers } = require("../core/service/usuarios/deleteUsuarioByID.endpoint")
const { postUsuario } = require("../core/service/usuarios/postUsuario.endpoint")
const { putUsuario } = require("../core/service/usuarios/putUsuario.endpoint")
const { userTC03 } = require("../data/usuarios/newUser")

describe('ServeRest - functional - Put Users', () => {

    let idUser
    before('Deve excluir todos os usuários e criar um novo usuário', async () => {
        await deleteAllUsers()
        let newUser = await postUsuario({
            nome:  userTC03.nome,
            email: userTC03.email,
            password: userTC03.password,
            administrador: userTC03.administrador,
        })
        idUser = newUser.json._id
    })

    it('[TC-03] - Deve validar se é possível editar o nome do usuário com sucesso atráves do endpoint put /usuários/{_id}', async () => {
        let editUser = await putUsuario({
            nome: 'This is new name',
            email: userTC03.email,
            password: userTC03.password,
            administrador: userTC03.administrador,
            id: idUser
        })

        assert.equal(editUser.json.message, 'Registro alterado com sucesso', 'Mensagem diferente do esperado')
    })

    it('[TC-04] - Deve validar se é possível editar o email do usuário com sucesso atráves do endpoint put /usuários/{_id}', async () => {
        let editUser = await putUsuario({
            nome: userTC03.nome,
            email: 'thisnewemail@gmail.com',
            password: userTC03.password,
            administrador: userTC03.administrador,
            id: idUser
        })

        assert.equal(editUser.json.message, 'Registro alterado com sucesso', 'Mensagem diferente do esperado')
    })

    it('[TC-05] - Deve validar se é possível editar a senha do usuário com sucesso atráves do endpoint put /usuários/{_id}', async () => {
        let editUser = await putUsuario({
            nome: userTC03.nome,
            email: userTC03.email,
            password: 'this new password',
            administrador: userTC03.administrador,
            id: idUser
        })

        assert.equal(editUser.json.message, 'Registro alterado com sucesso', 'Mensagem diferente do esperado')
    })
})