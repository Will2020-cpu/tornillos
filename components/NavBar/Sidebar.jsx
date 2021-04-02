import { 
    Drawer,
    List,
    ListItem,
    Divider,
    ListItemIcon,
    ListItemText

} from '@material-ui/core';
import React, { Fragment, useState } from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faBars, faHome, faIdCardAlt, faList, faPhotoVideo, faQuestion, faTools } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'



const useStyles = makeStyles((theme)=>({

subheader:{
    color:'#e0e0e0'
},

}))


const DrawerSidebar = () => {
const [open,setOpen] = useState(false);
const classes = useStyles();
const handleClickOpen = () =>{
    setOpen(!open);
}
return (
    <Fragment>
        <button className="text-white md:hidden focus:outline-none" onClick={()=>setOpen(!open)}><FontAwesomeIcon icon={faBars} size="1x"/></button>
        <Drawer anchor="left" open={open} onClose={handleClickOpen}>
            <div className="w-64 h-screen header">
                <List 
                  component="nav"
                  aria-labelledby = "nested-list-subheader"
                >
                    <ListItem button>
                        <Link onClick={()=>setOpen(!open)} href="/"><a className="text-black">LOGO</a></Link>
                    </ListItem>
                    <Divider/>
                    <ListItem button onClick={()=>setOpen(!open)}>
                        <ListItemIcon><FontAwesomeIcon icon={faHome}/> </ListItemIcon>
                        <Link  href="/"><ListItemText primary="Inicio"/></Link>
                    </ListItem>

                    <ListItem button onClick={()=>setOpen(!open)}>
                       <ListItemIcon><FontAwesomeIcon icon={faList}/></ListItemIcon>
                       <Link href="/#categorias"><ListItemText primary="Categorias"/></Link>
                    </ListItem>

                    <ListItem button onClick={()=>setOpen(!open)}>
                       <ListItemIcon><FontAwesomeIcon icon={faTools}/></ListItemIcon>
                       <Link href="/#productos"><ListItemText primary="Productos"/></Link>
                    </ListItem>

                    <ListItem button onClick={()=>setOpen(!open)}>
                       <ListItemIcon><FontAwesomeIcon icon={faQuestion}/></ListItemIcon>
                       <Link href="/#whyus"><ListItemText primary="Porque nosotros"/></Link>
                    </ListItem>


                    <ListItem button onClick={()=>setOpen(!open)}>
                       <ListItemIcon><FontAwesomeIcon icon={faAddressCard}/></ListItemIcon>
                       <Link href="/#nosotros"><ListItemText primary="Sobre nosotros"/></Link>
                    </ListItem>


                    <ListItem button onClick={()=>setOpen(!open)}>
                       <ListItemIcon><FontAwesomeIcon icon={faPhotoVideo}/></ListItemIcon>
                       <Link href="/#galeria"><ListItemText primary="Galeria"/></Link>
                    </ListItem>


                    <ListItem button onClick={()=>setOpen(!open)}>
                       <ListItemIcon><FontAwesomeIcon icon={faIdCardAlt}/></ListItemIcon>
                       <Link href="/#contacto"><ListItemText primary="Contacto"/></Link>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    </Fragment>
)
}

export default DrawerSidebar