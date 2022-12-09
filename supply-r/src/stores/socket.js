import {io} from 'socket.io-client'
import { url } from './url'


const socket = io(`${url}`)


export default socket