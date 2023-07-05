import { ringsAPI } from '../../services/RingsService';
import auth from './auth';
import interfaceСhange from './interfaceСhange';
import speciesData from './speciesData';

export default {
    auth,
    interfaceСhange,
    speciesData,
    [ringsAPI.reducerPath]: ringsAPI.reducer
}