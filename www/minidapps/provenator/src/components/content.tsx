import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { InfoTypes } from '../store/types'

import { BlockchainInfo, Home, Info, ListFiles } from '../components/pages'
import { AddFile, AddCheckedFile, CheckFile } from '../containers/pages/'

import { Paths, Local } from '../config'

export const Content = () => {

    return (

      <Switch>

        <Route name={Paths.help} exact path={Local.help} render={() => <Info type={InfoTypes.HELP}/>} />
        <Route name={Paths.contact} exact path={Local.contact} render={() => <Info type={InfoTypes.CONTACT}/>} />
        <Route name={Paths.about} exact path={Local.about} render={() => <Info type={InfoTypes.ABOUT}/>} />
        <Route name={Paths.blockchain} exact path={Local.blockchain} render= {() => <BlockchainInfo />} />

        <Route name={Paths.listFiles} path={Local.listFiles} render={() => <ListFiles />} />
        <Route name={Paths.addFile} path={Local.addFile} render= {() => <AddFile />} />
        <Route name={Paths.addCheckedFile} path={Local.addCheckedFile} render= {() => <AddCheckedFile />} />
        <Route name={Paths.checkFile} path={Local.checkFile} render= {() => <CheckFile />} />

        <Route name={Paths.home} path={Local.home} render= {() => <Home />} />

      </Switch>
    )
}
