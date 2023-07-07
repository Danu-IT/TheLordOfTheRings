import { ringsAPI } from '../../services/RingsService';
import auth from './auth';
import interfaceСhange from './interfaceСhange';
import speciesSlice from './speciesSlice';

export default {
    auth,
    interfaceСhange,
    speciesSlice,
    [ringsAPI.reducerPath]: ringsAPI.reducer
}