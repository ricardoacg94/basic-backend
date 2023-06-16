const { response } = require("express");

const usuariosGet = (req, res = response) => {
  const { name, q, apellido = "no data" } = req.query;
  res
    .status(201)
    .json({ ok: true, msg: "Get API-controlador", name, q, apellido });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;
  res.status(201).json({ ok: true, msg: "Put API-controlador", id });
};
const usuariosPost = (req, res = response) => {
  const body = req.body;
  res.status(201).json({ ok: true, msg: "Post API-controlador", body });
};
const usuariosDelete = (req, res = response) => {
  res.status(201).json({ ok: true, msg: "Delete API-controlador" });
};

const usuariosPatch = (req, res = response) => {
  res.status(201).json({ ok: true, msg: "Patch API-controlador" });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
