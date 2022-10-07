import express from 'express'
import Gun from 'gun'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())

app.use(Gun.serve())

app.get('/', (_, res) => {
    res.status(200).send('> DEBUG: Discord node is live!')
})

const server = app.listen(PORT, () => {
    console.log(`> DEBUG: Discord node is listening at http://localhost:${PORT}`)
})

Gun({ web: server })