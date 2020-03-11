import React from 'react';

const Followers = props => {

    console.log(props.data);
    return (
        <div>
            Followers
        </div>
        // <div>
        //     {props.data.map( follower => {
        //         return (
        //             // <img src={follower.avatar_url}/>
        //             <div>
        //                 {follower.avatar_url}
        //             </div>
        //         )
        //     })}
        // </div>
    )

}

export default Followers