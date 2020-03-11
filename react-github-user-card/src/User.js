import React from 'react'
import axios from 'axios'
import Followers from './Followers'

class User extends React.Component {

    constructor () {
        super()
        this.state = {
            login: "",
            avatarURL: "",
            url: "",
            followers: []
        }
    }

    componentDidMount() {
        axios
            .all([
                axios.get('https://api.github.com/users/mellownightpirate'),
                axios.get('https://api.github.com/users/mellownightpirate/followers')
            ])
            .then(
                axios.spread((userRes, followerRes) => {
                    console.log(userRes, followerRes)
                    this.setState({
                        login: userRes.data.login,
                        avatarURL: userRes.data.avatar_url,
                        url: userRes.data.url,
                        followers: followerRes.data
                })
                console.log(this.state)
                })
            )
            .catch(err => {
                console.log(err)
            })
    }

    render () {
        return (
            <div>
                <div>{this.state.login}</div>
                <img src={this.state.avatarURL}/>
                <div>{this.state.url}</div>
                <Followers
                    data={this.state.followers}
                />
            </div>
        )    
    }
}

export default User