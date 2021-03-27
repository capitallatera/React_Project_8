import React from "react";
import {useGlobalContext} from './context'
import { FaTimes } from "react-icons/fa";
import sublinks from './data'


const Sidebar=()=>{
    
    const {isSideBarOpen,closeSideBar}=useGlobalContext()
    return(
        <aside className={`${isSideBarOpen ? "sidebar-wrapper show" :"sidebar-wrapper"}`}>
            <div className="sidebar">
                <button className="close-btn" onClick={closeSideBar}>
                    <FaTimes/>
                </button>
                <section>
                    <div className="sidebar-links">
                        {
                            sublinks.map((item, index) => {
                                const { page, links } = item
                                return (
                                    <article key={index}>
                                        <h4>{page}</h4>
                                        <div className="sidebar-sublinks">
                                            {
                                                links.map((link, index) => {
                                                    const { url, icon, label } = link
                                                    return (
                                                        <a key={index} href={url}>
                                                            {icon}
                                                            {label}
                                                        </a>

                                                    )
                                                })
                                            }
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </aside>
    )
}
export default Sidebar;