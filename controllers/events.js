const { response } = require('express')

const getEventos = async (req, res = response) => {
  console.log(req.body)

  const eventos = await Evento.find().populate('user', 'name')

  res.json({
    ok: true,
    msg: 'getEventos',
  })
}

const crearEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'crearEvento',
  })
}

const actualizarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'actualizarEvento',
  })
}

const eliminarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'eliminarEvento',
  })
}

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
}
