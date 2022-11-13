import React, {useState, useEffect, useRef} from "react";
import {HiMenu} from "react-icons/hi";
import {AiFillCloseCircle} from "react-icons/ai";

import {Link, Routes, Route} from "react-router-dom";

import { Sidebar,UserProfile } from "../components";

import {client} from "../client";
import logo from "../assets/pinterestlogo.png";

import Pins from "./Pins";

import { userQuery} from "../utils/data";

const Home = () => {

    //useState hook to set the state of the sidebar
    const [toggleSidebar, setToggleSidebar] = useState(false);


    //Get the logged in user
    const userInfo = localStorage.getItem("user") !== 'undefined' ? JSON.parse(localStorage.getItem("user")) : localStorage.clear();

    //user useSate hook to set the state of the user
    const [user, setUser] = useState(null);

    useEffect(() => {
        const query = userQuery(userInfo?.googleId);

        //use sanity client to fetch the user data
        client.fetch(query).then((res) => {
            //console.log(res);
            setUser(res[0]);
        });
    }, [userInfo]);

    //useRef hook to handle the click outside the sidebar
    const scrollRef = useRef(null);
    useEffect(() => {
        scrollRef.current.scrollTo(0, 0);
    }, []);


    return (
        <div className="flex flex-col md:flex-row h-screen min-h-screen w-full transaction-height duration-75 ease-out bg-gray-50 dark:text-slate-100 dark:bg-gray-900">
            <div className="hidden md:flex h-screen w-2/5 md:w-[30%] xm:w-[28%] lg:w-[25%] xl:w-[20%] flex-initial">
                <Sidebar user={user?user:null} closeToggle ={setToggleSidebar} />
                {/* <Sidebar user = {user && user} closeToggle = {setToggleSidebar(false)} /> */}
            </div>

            <div className="flex flex-col md:hidden">
                <div className="flex flex-row justify-between bg-gray-800 shadow-xl w-full p-2">
                    <HiMenu 
                        className="cursor-pointer text-gray-700 dark:text-gray-200"  
                        fontSize={40}
                        onClick={() => {setToggleSidebar(true)}}
                    />
                
                    <Link to="/" className="flex flex-row items-center">
                        <img src={logo} alt="logo" className="h-12 w-12 ml-2"/>
                        <span className="text-gray-700 dark:text-gray-50 text-xl font-extrabold">PINTEREST</span>
                    </Link>
                    <Link  to ={`user-profile/${user?.id}`}>
                        <img src={user?.image} alt="profile" className="h-10 w-10 ml-2 rounded-full" />
                    </Link>
                </div>
            </div>

            {
                toggleSidebar && (
                    <div className="fixed w-[80%] bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
                        <div className="absolute w-full flex justify-end items-center p-2">
                            <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
                        </div>
                        <Sidebar user={user ? user: null}  closeToggle={setToggleSidebar} />
                    </div>
                )
            }

            <div className="flex flex-col flex-1 overflow-y-auto pb-2" ref={scrollRef}>
                <Routes>
                    <Route path="user-profile/:userId" element={<UserProfile />} />
                    <Route path="/*" element={<Pins user={user? user: null} />} />

                </Routes>
            </div>

        </div>
    );
};

export default Home;