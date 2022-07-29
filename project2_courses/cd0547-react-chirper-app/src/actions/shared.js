import { getInitalData } from "../utils/api"
import { recieveTweets } from "./tweets"
import { recieveUsers } from "./users"

export function handleInitialData() {
    return (dispatch) => {
        return getInitalData().then(({ users, tweets }) => {
            dispatch(recieveUsers(users))
            dispatch(recieveTweets(tweets))
        })
    }
}