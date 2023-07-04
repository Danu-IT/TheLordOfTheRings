import { ringsAPI } from '../../services/RingsService';
import auth from './auth';
import interfaceСhange from './interfaceСhange';
import dataFilter from './dataFilter';

export default {
    auth,
    interfaceСhange,
    dataFilter,
    [ringsAPI.reducerPath]: ringsAPI.reducer
}