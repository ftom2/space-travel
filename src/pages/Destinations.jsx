import React, { useEffect } from "react";


export default function Home() {
    useEffect(() => {
        let root = document.documentElement;
        root.style.setProperty('--bg-page', "url('images/background-destination-mobile.jpg')");
    }) 

    return (<div className="text-white"><h1>Destinations</h1></div>)
}