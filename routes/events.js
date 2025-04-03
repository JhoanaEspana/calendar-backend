const { Router } = require('express')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require('../controllers/events')
const { check } = require('express-validator')
const router = Router()

// Obtener eventos
//todas tienen q pasar por la validacion del JWT
router.use(validarJWT)

router.get('/', getEventos)

// crear un nuevo evento
router.post(
  '/',
  [check('title', 'El titulo es obligatorio').not().isEmpty(), validarCampos],
  crearEvento
)

// actualizar evento
router.put('/:id', actualizarEvento)

// eliminar evento
router.delete('/:id', eliminarEvento)

module.exports = router
