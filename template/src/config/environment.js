import env from 'node-env-file'
import path from 'path'

export default env(path.resolve(__dirname, '../', '../', 'dev.env'))
