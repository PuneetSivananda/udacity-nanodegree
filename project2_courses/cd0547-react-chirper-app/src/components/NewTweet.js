import { useState } from "react"
import { connect } from "react-redux"
import { handleAddTweet } from "../actions/tweets"

const NewTweet = ({ dispatch, id }) => {
    const [text, setText] = useState("")
    const handleChange = (e) => {
        const text = e.target.value
        setText(text)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("New Tweet ", text)
        dispatch(handleAddTweet(text, id))
        setText("")
    }
    const tweetLeft = 200 - text.length

    return (
        <div>
            <h3 className="center">Compose New Tweet</h3>
            <form className="new-tweet" onSubmit={handleSubmit}>
                <textarea
                    placeholder="What's happening"
                    value={text}
                    onChange={handleChange}
                    className="textarea"
                    maxLength={280}
                >
                </textarea>
                {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
                <button className="btn" type="submit" disabled={text === ""}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default connect()(NewTweet)