import React, {Component} from 'react';

export default class MovieElement extends Component{
    render(){
        return(
        <div className="w-25 p-2">
            <div className="card">
                <img alt="film" src="https://www.gstatic.com/tv/thumb/v22vodart/24674/p24674_v_v8_ag.jpg" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Gladiator</h5>
                    <p className="card-text">POPO</p>
                </div>
            </div>
        </div>
        );
    }
}