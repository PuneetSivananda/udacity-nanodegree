import { getInitalData } from "../utils/api"
import { recieveTweets } from "./tweets"
import { recieveUsers } from "./users"
import { setAuthedUser } from "./authUser"

const AUTH_ID = "tylermcginnis"

export function handleInitialData() {
    return (dispatch) => {
        return getInitalData().then(({ users, tweets }) => {
            dispatch(recieveUsers(users))
            dispatch(recieveTweets(tweets))
            dispatch(setAuthedUser(AUTH_ID))
        })
    }
}