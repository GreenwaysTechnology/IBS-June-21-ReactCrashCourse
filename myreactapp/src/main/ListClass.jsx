import React, { Component } from 'react';


export class List extends Component {

     
    render() {
        return <div className="row">
            {
                this.props.posts.map((post, index) => {
                    return <div className="row">
                        <div className="col">
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">{post.id}</h5>
                                    <p className="card-text">
                                        {post.title}
                                    </p>
                                    <p className="card-text">
                                        {post.body}
                                    </p>
                                    <button type="button" className="btn btn-primary">View Post Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                })
            }
        </div>
    }
}
