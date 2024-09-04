import { atom, atomFamily, selector } from "recoil";
import { todos } from "./todos";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export const totalSelector = selector({
    key: "totalSelector",
    get: ({get}) => {
        const networkCount = get(networkAtom)
        const jobsCount = get(jobsAtom)
        const notificationsCount = get(notificationsAtom)
        const messagingCount = get(messagingAtom)

        return networkCount + jobsCount + notificationsCount + messagingCount
    }
})

export const todosAtom = atomFamily({
    key: "todosAtom",
    default: async id => {
        await new Promise(r => setTimeout(r, 3000))
        return todos.find(todo => todo.id == id)
    }
})
