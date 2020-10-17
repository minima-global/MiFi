import React from 'react'
import { NavLink } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import MenuOutlined from '@ant-design/icons/lib/icons/MenuOutlined'
//import DehazeIcon from '@material-ui/icons/Dehaze'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import HelpIcon from '@material-ui/icons/Help'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import Fade from '@material-ui/core/Fade'
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting'

import { themeStyles, MainMenu, MainMenuItem } from '../../styles'

import { Paths, Local } from '../../config'

export const Main = () => {

  const [anchorEl, setAnchorEl] = React.useState(null)
  const themeClasses = themeStyles()
  const open = Boolean(anchorEl)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
     <div>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          size="small"
          variant="contained"
          onClick={handleClick}
          className={themeClasses.menu}
        >
          <MenuOutlined />
        </Button>
        <MainMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >        
            <NavLink to={Local.help}>
                <MainMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <HelpIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.help} />
                </MainMenuItem>
            </NavLink>

            <NavLink to={Local.contact}>
                <MainMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ContactMailIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.contact} />
                </MainMenuItem>
            </NavLink>

            <NavLink to={Local.about}>
                <MainMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <InfoIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.about} />
                </MainMenuItem>
            </NavLink>

            <NavLink to={Local.blockchain}>
                <MainMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PermDataSettingIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.blockchain} />
                </MainMenuItem>
            </NavLink>

        </MainMenu>
    </div>
  )
}
