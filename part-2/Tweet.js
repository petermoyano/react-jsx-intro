

// Define a Tweet component which takes as props the username of the user who wrote the tweet, 
//the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.
const Tweet = ({ username, _name, date, tweet }) => {
    return (<div>
        <h2>{username} tweeted</h2>
        <p>{tweet}</p>
        <p>{date}</p>
        <p>{_name}</p>
    </div>
    )
}
