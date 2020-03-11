import React from 'react';

const Followers = props => {
    console.log(props.data);
    return (
        <div>
            <div>Followers:</div>
            {props.data.map( follower => {
                return (
                        <img style={{width: '50px'}} src={follower.avatar_url}/>
                )
            })}
        </div>
    )

}

export default Followers