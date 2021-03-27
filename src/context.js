import React, { useContext, useState } from 'react'
import sublinks from "./data";

const AppContext=React.createContext()

export const AppProvider=({children})=>{
    const [isSideBarOpen,setSideBarOpen]=useState(false)
    const [isSubMenuOpen,setSubMenuOpen]=useState(false)
    const [location,setLocation]=useState({})
    const [pages,setPage]=useState({page:"",links:[]})

    const openSideBar=()=>{
        setSideBarOpen(true)
    }
    const closeSideBar=()=>{
        setSideBarOpen(false)
    }
    const openSubMenu=(text,coordinates)=>{
        const page=sublinks.find((link)=> link.page===text)
        setPage(page)
        // console.log(page)
        setLocation(coordinates)
        setSubMenuOpen(true)
    }
    const closeSubMenu=()=>{
        setSubMenuOpen(false)
    }

    return<AppContext.Provider value={{
        isSideBarOpen,isSubMenuOpen,openSideBar,closeSideBar,openSubMenu,closeSubMenu,location,pages
    }}>{children}</AppContext.Provider>
}
//custom hook
export const useGlobalContext=()=>{
    return useContext(AppContext)
}


