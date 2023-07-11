import { ToastOptions } from "react-toastify"

export const arrayOfSorts = [
    { result: "asc", value: "По возрастанию" },
    { result: "desc", value: "По убыванию" }
]

export const arrayRace: DataRace[] = [
    { value: 'Hobbit', active: false },
    { value: 'Human', active: false },
    { value: 'Elf', active: false },
    { value: 'Dwarf', active: false },
    { value: 'Ent', active: false },
    { value: 'Orc', active: false },
    { value: 'Troll', active: false }
]

export const toastInfo: ToastOptions<Toast> = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}