import React, { Component } from 'react';
import './takeanote.css';
import { useState } from "react";
import Button from "@mui/material/Button";
// import IconButton from '@mui/material/IconButton';
import CheckBoxOutlined from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlined from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlined from '@mui/icons-material/InsertPhotoOutlined';
import AddAlertOutlined from '@mui/icons-material/AddAlertOutlined';
import PersonAddOutlined from '@mui/icons-material/PersonAddOutlined';
import ColorLensOutlined from '@mui/icons-material/ColorLensOutlined';
import ImageOutlined from '@mui/icons-material/ImageOutlined';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined';
import UndoOutlined from '@mui/icons-material/UndoOutlined';
import RedoOutlined from '@mui/icons-material/RedoOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { Snackbar, IconButton } from '@mui/material';
import Userservices from '../../services/Userservice';
let obj = new Userservices();

class Takeanote extends Component {
    constructor(props){
        super(props)

        this.state = {
            show:true,
            hide:false,
            title:"",
            description:"",
            snackbarmsg:""
        }
    }

    snackbarClose = () => {
        this.setState({snackbaropen: false});
    };

    close = () => {
        this.setState({
            show:true,
            hide:false
        })

        let notesobj = {
            "title" : this.state.title,
            "description": this.state.description,
        }
        console.log(notesobj);
        obj.Addnote(notesobj)
        .then(response => {
            console.log(response);
            this.setState({snackbaropen:true, snackbarmsg: "Note added successfully"});
        })
        .catch(error => {
            console.log(error);
            this.setState({snackbaropen:true, snackbarmsg: "Failed to add note"});
        })
    }

    expand = () => {
       this.setState({
           show:false,
           hide:true
       })
    }

    change = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log(e.target.value)
    }

    render() {
        return (
            <div className='takeanote'>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={6000}
                    onClose={this.snackbarClose}
                    message={<span id="message_id">{this.state.snackbarmsg}</span>}
                    action={[<IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                            x
                        </IconButton>
                    ]}
                />
                {this.state.show && (
                    <form id="form1" onClick={this.expand}>         
                        
                            <input 
                            className="forminput2" 
                            aria-label="empty textarea" 
                            placeholder="Take a note..."  
                             />
                            <div>
                                <IconButton size="large" >
                                    <CheckBoxOutlined className="check"/>
                                </IconButton>
                                <IconButton size="large" >
                                    <BrushOutlined className="brush"/>
                                </IconButton>
                                <IconButton size="large" >
                                    <InsertPhotoOutlined className="image"/>
                                </IconButton>
                            </div>
                        
                    </form>
                )}
                {
                    this.state.hide && (
                        <form id="form2">         
                            <div className='title-pin'>
                                <input className="title" 
                                    aria-label="empty textarea" 
                                    placeholder="Title"
                                    onChange ={e =>this.change(e)}
                                />
                                <div className='pin-icon'><PushPinOutlinedIcon/></div>
                            </div>
                            <div className='hide-takenote'>
                                <input 
                                    className="forminput2" 
                                    aria-label="empty textarea" 
                                    placeholder="Take a note..."
                                    onChange ={e =>this.change(e)}/>
                            </div>
                            <div id="icons">
                                <div className='inner-icons'>
                                <AddAlertOutlined
                                    style={{ fontSize: "large" }}
                                >
                                </AddAlertOutlined>
                                <PersonAddOutlined
                                    style={{ fontSize: "large" }}
                                >
                                </PersonAddOutlined>
                                <ColorLensOutlined
                                    style={{ fontSize: "large" }}
                                >   
                                </ColorLensOutlined>
                                <ImageOutlined
                                    style={{ fontSize: "large" }}
                                >
                                </ImageOutlined>
                                <ArchiveOutlined
                                    style={{ fontSize: "large" }}
                                >
                                </ArchiveOutlined>
                                <MoreVertOutlined
                                    style={{ fontSize: "large" }}
                                >
                                </MoreVertOutlined>
                                <UndoOutlined style={{ fontSize: "large" }}></UndoOutlined>
                                <RedoOutlined style={{ fontSize: "large" }}></RedoOutlined>
                                </div>
                                <div>
                                    <p className="button" onClick = {this.close}>Close</p>
                                </div>
                                
                            </div>
                        
                        </form>
                    )
                }
            </div>
        );
    }
}


export default Takeanote;
