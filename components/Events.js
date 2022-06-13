import React, { useEffect, useState } from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import ArtistCard from "./ArtistCard";

export default function Events(props){
    const [temp, setTemp] = useState([]);
    const [openTab, setOpenTab] = useState(0);
    
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

        <Tab className="bg-gray-900">
            <div className="w-full">
                
                <TabList color="" className="h-12">
                    <TabItem 
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                        disabled
                        ripple="light"
                        active = {false}
                        href="tabItem"
                        className="ml-4 font-Blod h-8"
                    >
                        Filters :
                    </TabItem>
                    <TabItem 
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(0);
                        }}
                        ripple="light"
                        active={false}
                        href="tabItem"
                        className="ml-4 font-light h-8"
                    >
                        Reset Filter
                    </TabItem>
                    <TabItem 
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(1);
                        }}
                        ripple="light"
                        active={openTab === 1 ? true : false}
                        href="tabItem"
                        className="ml-4 font-light h-8"
                    >
                        Game
                    </TabItem>
                    <TabItem
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(2);
                        }}
                        ripple="light"
                        active={openTab === 2 ? true : false}
                        href="tabItem"
                        className="ml-4 font-light h-8"
                    >
                        Sport
                    </TabItem>
                    <TabItem
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(3);
                        }}
                        ripple="light"
                        active={openTab === 3 ? true : false}
                        href="tabItem"
                        className="ml-4 font-light h-8"
                    >
                        Party
                    </TabItem>
                </TabList>
            </div>

            <TabContent>
                <TabPane active={openTab === 0 ? true : false}>
                <div class="grid grid-cols-3 gap-10">
                    {props.doc.map((doc, index) => {
                        return (
                            
                                <ArtistCard 
                                key={index}
                                title={doc.title}
                                elevatorPitch={doc.elevatorPitch}
                                description={doc.description}
                                imgLink={doc.imgLink}
                                type={doc.type}
                                currentStatus={doc.currentStatus}
                                rasied={doc.rasied}
                                complete={doc.complete}
                                approvalCount={doc.approvalCount}
                                likes={doc.likes}
                                />
                            )
                        })}
                </div>
                </TabPane>
                <TabPane active={openTab === 1 ? true : false}>
                <div class="grid grid-cols-3 gap-10">
                    {props.doc.map((doc, index) => {
                        if(doc.type==="game")
                        return (
                            
                                <ArtistCard 
                                key={index}
                                title={doc.title}
                                elevatorPitch={doc.elevatorPitch}
                                description={doc.description}
                                imgLink={doc.imgLink}
                                type={doc.type}
                                currentStatus={doc.currentStatus}
                                rasied={doc.rasied}
                                complete={doc.complete}
                                approvalCount={doc.approvalCount}
                                likes={doc.likes}
                                />
                            )
                        })}
                </div>
                </TabPane>
                <TabPane active={openTab === 2 ? true : false}>
                <div class="grid grid-cols-3 gap-10">
                    {props.doc.map((doc, index) => {
                        if(doc.type==="sport")
                        return (
                            
                                <ArtistCard 
                                key={index}
                                title={doc.title}
                                elevatorPitch={doc.elevatorPitch}
                                description={doc.description}
                                imgLink={doc.imgLink}
                                type={doc.type}
                                currentStatus={doc.currentStatus}
                                rasied={doc.rasied}
                                complete={doc.complete}
                                approvalCount={doc.approvalCount}
                                likes={doc.likes}
                                />
                            )
                        })}
                </div>
                </TabPane>
                <TabPane active={openTab === 3 ? true : false}>
                <div class="grid grid-cols-3 gap-10">
                    {props.doc.map((doc, index) => {
                        if(doc.type==="party")
                        return (
                            
                                <ArtistCard 
                                key={index}
                                title={doc.title}
                                elevatorPitch={doc.elevatorPitch}
                                description={doc.description}
                                imgLink={doc.imgLink}
                                type={doc.type}
                                currentStatus={doc.currentStatus}
                                rasied={doc.rasied}
                                complete={doc.complete}
                                approvalCount={doc.approvalCount}
                                likes={doc.likes}
                                />
                            )
                        })}
                </div>
                </TabPane>
            </TabContent>
        </Tab>
        </>
    )
}