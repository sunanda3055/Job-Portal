import React, { useEffect } from "react"
import { useStore } from "./store/StoreProvider"
import Routes from "./components/Routes/Routes"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import axios from "axios"
import * as constant from "./utils/constants"
import { TFilterObject, TIndex, TFilterDataArray } from "./utils/types"
import "./App.scss"
import {appData} from './Json';

const jsonData2 = appData;

const App = () => {
  const { setFilterData } = useStore()
  const jsonData: TFilterDataArray = []

    const compare = ( a: TIndex, b: TIndex ) => {
        if ( a.index < b.index ){
            return -1;
        }
        if ( a.index > b.index ){
            return 1;
        }
        return 0;
    };

  useEffect(() => {
      setFilterData(jsonData2.sort(compare))
  }, [])

  return (
    <div className="app-wrapper">
      <div className="app-body">
        <Header />
        <div className="border">
          <Routes />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
