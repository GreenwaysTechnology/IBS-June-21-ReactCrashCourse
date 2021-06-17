import React, { useState } from 'react';

//container
export const Comment = props => {
    //state declaration: state = {counter:10}
    const [like, setLike] = useState(props.like);
    const [dislike, setDislike] = useState(props.dislike);
    //Listener 
    const onLike = evt => {
        setLike(like + 1)
    }
    return <CommentUI like={like} dislike={dislike} onLike={onLike} onDisLike={setDislike} />
}

//Presentational component
// export const CommentUI = props => <div>
//     <h1>Likes {props.like} DisLike {props.dislike}</h1>
//     <button onClick={props.onLike} className="btn btn-success">Like</button>
//     <button onClick={() => props.onDisLike(props.dislike + 1)} className="btn btn-success">DisLike</button>
// </div>
// export const CommentUI = props => {
//     //props destructure
//     const { like, dislike, onLike, onDisLike } = props;
//     return <div>
//         <h1>Likes {like} DisLike {dislike}</h1>
//         <button onClick={props.onLike} className="btn btn-success">Like</button>
//         <button onClick={() => onDisLike(props.dislike + 1)} className="btn btn-success">DisLike</button>
//     </div>
// }

export const CommentUI = ({ like, dislike, onDisLike, onLike }) => <div>
    <h1>Likes {like} DisLike {dislike}</h1>
    <button onClick={onLike} className="btn btn-success">Like</button>
    <button onClick={() => onDisLike(dislike + 1)} className="btn btn-success">DisLike</button>
</div>
