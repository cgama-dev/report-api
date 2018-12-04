import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import routerReports from './routes/report-router'


const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

app.use('/reports', routerReports())

app.listen(port, () => {
    console.log('Servidor rodando na porta 3011')
})

export default app