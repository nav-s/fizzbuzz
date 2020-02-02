import fizzbuzzController from '../controllers/fizzbuzz.controller'
import express from 'express'

const fizzbuzzRouter = express.Router()

fizzbuzzRouter.get('/', fizzbuzzController.generate)

export default fizzbuzzRouter