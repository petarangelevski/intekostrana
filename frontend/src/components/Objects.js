import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./Object.css"

const styles= {
    textAlign: 'center'
}
class Objects extends React.Component {
    
    state = {
        sport_object_id: [],
        open: false,
        selectedObject: null // Keep track of the selected object
    };


    componentDidMount() {
        let url = "http://localhost:3001/api/objects";
        Axios.get(url).then(res => {
            this.setState({
                sport_object_id: res.data.slice(0, 10)
            });
            console.log(res.data.slice(0, 10));
        });
    }
    onOpenModal = () => {
        this.setState({open: true});
    };
     onCloseModal = () => {
       onclick=this.setState({open: false});
     }

    renderModal() {
        
        return this.state.sport_object_id.map(object => {
            return (
                <div className='popup-box'
                    key={object.sport_object_id}
                    // onClick={this.onOpenModal}
                    onClose={this.onCloseModal}
                    style={{styles}}
                >
                    <div className='box'>
                    <div className='pictureObject'>
                    <img className='imgObject' src={object.image_path} alt=''/>
                    </div>
                    <div className="descObject">
                        <p className="description">{object.description}</p>
                    </div>
                    </div>
        
                    <button className='close-icon' data-testid="close-button" onClick={this.onCloseModal}>x</button>

                </div>
            );
        });
    }
    renderPosts(sport_object_id, image_path,address, description){
        
            return(
                <section className="con">
                    {this.state.sport_object_id.map((object)=> {
                            return (
                                <div
                                    className='divObject'
                                    key={object.sport_object_id}
                                    style={{width: 400, backgroundColor: 'orange'}}
                                    onClick={this.onOpenModal}

                                >
                                    <img className='imgObject' src={object.image_path} alt='s'/>
                                    <h1 className='divDis'>{object.address}</h1>
                                    <p className='dis'>{object.description}</p>
                                </div>
                            )
                    })}
                </section>
            )
        }

    render() {
        const { open } = this.state; 
        return (
            <div className='modalCon ' style={styles}>
                <div>{this.renderPosts()}</div>
                <Popup open={open} onClose={this.onCloseModal} center>
                    {this.renderModal()}
                </Popup>
            </div>
        )
    }
}

export default Objects;