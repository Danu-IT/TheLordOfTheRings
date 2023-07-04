import { ringsAPI } from '../../services/RingsService';
import auth from './auth';
import interfaceСhange from './interfaceСhange';

export default {
    auth,
    interfaceСhange,
    
    [ringsAPI.reducerPath]: ringsAPI.reducer
}