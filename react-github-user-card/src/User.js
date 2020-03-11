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
            followersURL: ""
        }
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/mellownightpirate')
            .then(res => {
                console.log(this.state)
                this.setState({
                    login: res.data.login,
                    avatarURL: res.data.avatar_url,
                    url: res.data.url,
                    followersURL: res.data.followers_url
                })
                console.log(this.state)
            })
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
                    data={this.state.followersURL}
                />
            </div>
        )    
    }
}

export default User