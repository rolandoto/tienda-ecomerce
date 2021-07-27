import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Layou from '../component/Layou'
import Home from '../conteiners/Home'


import Information from '../conteiners/Information'
import Nofound from '../conteiners/Nofound'
import Pyment from '../conteiners/Pyment'
import Shekaout from '../conteiners/Shekaout'
import Sucess from '../conteiners/Sucess'
import Appcontex from '../context/Appcontex'
import Useinitial from '../Hooks/Useinitial'


function App() {
    const initial = Useinitial()
    
    return (
            <Appcontex.Provider value={initial}>
                <BrowserRouter>
                    <Layou>
                        <Switch>
                    
                            <Route exact path='/' component={Home} />
                            <Route exact path='/Shekaout' component={Shekaout} />
                            <Route exact path='/Information' component={Information} />
                            <Route exact path='/Pyment' component={Pyment} />
                            <Route exact path='/Sucess' component={Sucess} />
                            
                            <Route component={Nofound} />
                       
                            </Switch>
                    </Layou>
                </BrowserRouter>
            </Appcontex.Provider>
     
        
    )
}

export default App
