var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.put("/atualizar", function(req,res){
    usuarioController.atualizar(req,res)
});

router.post("/cadastrarLog", function(req,res){
    usuarioController.cadastrarLog(req,res)
});

router.put("/excluir", function (req,res){
    usuarioController.excluir(req,res)
})
module.exports = router;