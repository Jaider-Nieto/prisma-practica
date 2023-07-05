import express from "express";

import userRoutes from './routes/user/user.routes.js'
import postRoutes from './routes/post/post.routes.js'

const app = express();

app.use(express.json())

app.use('/api', userRoutes)
app.use('/api', postRoutes)

app.listen(3001)
console.log("on port", 3001)

