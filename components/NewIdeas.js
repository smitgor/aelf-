import React, { useEffect, useState } from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import ArtistCard from "./ArtistCard";
import MyTickets from "./MyTickets";


export default function NewIdeas(props){
    console.log(props.doc);
    if(props.loading){
        return (
            <>  
                <div></div>
                <div class="m-auto mt-20 mb-20">
                    <div class="w-24 h-24 border-l-2 border-white-900 rounded-full animate-spin"></div>
                </div>
                <div></div>
            </>
        )
    }
    
    return (
        <>
            {props.doc.map((doc, index) => {
                return (
                    <MyTickets 
                        key={index}
                        title={doc.title}
                        elevatorPitch={doc.elevatorPitch}
                        description={doc.description}
                        imgLink={doc.imgLink}
                        value={doc.value}
                        currentStatus={doc.currentStatus}
                        rasied={doc.rasied}
                        complete={doc.complete}
                        approvalCount={doc.approvalCount}
                        likes={doc.likes}
                    />
                )
            })}
        </>
    )
}