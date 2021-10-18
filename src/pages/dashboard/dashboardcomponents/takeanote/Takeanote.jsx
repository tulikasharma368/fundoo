import React from 'react';
import './takeanote.css';
import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
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


const Takeanote = () => {

    const [show, setshow] = useState(true);
    const [hide, sethide] = useState(false);

    const close = () => {
        setshow(true);
        sethide(false);
    }

    const expand = () => {
        setshow(false);
        sethide(true);
    }

    return (
        <div className='takeanote'>
            {show && (
                <form id="form1">         
                    
                        <input className="forminput2" aria-label="empty textarea" placeholder="Take a note..."  onClick={expand} />
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
                hide && (
                    <form id="form2">         
                        <div className='title-pin'> 
                            <p className='title'>Title</p>
                            <div className='pin-icon'><PushPinOutlinedIcon/></div>
                        </div>
                        <div className='hide-takenote'>
                            <input className="forminput2" aria-label="empty textarea" placeholder="Take a note..."  onClick={expand} />
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
                                <p className="button" onClick = {close}>Close</p>
                            </div>
                            
                        </div>
                    
                    </form>
                )
            }
        </div>
    );
}

export default Takeanote;
