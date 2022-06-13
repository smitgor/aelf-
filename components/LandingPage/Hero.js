import React, { useEffect, useState } from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import ArtistCard from "../ArtistCard";
import NewForm from "../NewForm";
import Events from "../Events";
import NewIdeas from "../NewIdeas";
import MyCampaigns from "../MyCampaigns";
import MyContributions from "../MyContributions";


export default function Hero() {
    const [openTab, setOpenTab] = useState(1);

    const [docs, setDocs] = useState([]);
    const [docs2, setDocs2] = useState([]);
    const [update,setUpdate] = useState(0);
    const [loading, setLoading] = useState(false);
    const d = [
        {
                   
                "title":"a new coin",
                   "elevatorPitch":"it will change the world",
                   "description":"it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool",
                   "imgLink":"https://i.imgur.com/htS3GSE.jpg",
                   "type":"party",
                   "currentStatus":"ONGOING",
                   "rasied":1000,
                   "complete":"false",
                   "approvalCount":4,
                   "likes":9443,
                   "requests":[
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                   ]
                },
        {
                   
                "title":"a new coin",
                   "elevatorPitch":"it will change the world",
                   "description":"it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool",
                   "imgLink":"https://i.imgur.com/htS3GSE.jpg",
                   "type":"party",
                   "currentStatus":"ONGOING",
                   "rasied":1000,
                   "complete":"false",
                   "approvalCount":4,
                   "likes":9443,
                   "requests":[
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                   ]
                },
                {
                   "title":"a new coin",
                   "elevatorPitch":"it will change the world",
                   "description":"it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool",
                   "imgLink":"https://i.imgur.com/htS3GSE.jpg",
                   "type":"sport",
                   "currentStatus":"ONGOING",
                   "rasied":5000,
                   "complete":"false",
                   "approvalCount":4,
                   "likes":94,
                   "requests":[
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                   ]
                },
                {
                   "title":"a new coin",
                   "elevatorPitch":"it will change the world",
                   "description":"it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool",
                   "imgLink":"https://i.imgur.com/htS3GSE.jpg",
                   "type":"game",
                   "currentStatus":"ONGOING",
                   "rasied":5000,
                   "complete":"false",
                   "approvalCount":4,
                   "likes":43,
                   "requests":[
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                   ]
                },
                {
                   "title":"a new coin",
                   "elevatorPitch":"it will change the world",
                   "description":"it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool",
                   "imgLink":"https://i.imgur.com/htS3GSE.jpg",
                   "type":"game",
                   "currentStatus":"ONGOING",
                   "rasied":5000,
                   "complete":"false",
                   "approvalCount":4,
                   "likes":43,
                   "requests":[
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                   ]
                },
                {
                   "title":"a new coin",
                   "elevatorPitch":"it will change the world",
                   "description":"it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool it will change the world by making everyone fool",
                   "imgLink":"https://i.imgur.com/htS3GSE.jpg",
                   "type":"game",
                   "currentStatus":"ONGOING",
                   "rasied":5000,
                   "complete":"false",
                   "approvalCount":4,
                   "likes":93,
                   "requests":[
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                       {
                           "title":"a new title",
                           "description":"a new description",
                           "amount":1000,
                       },
                   ]
                }
            ]

    return (
        <>

            <section className="text-gray-400 bg-gray-900 p-1">
                <Tab className="bg-gray-900">
                    <div className="w-full">
                        <TabList color="">
                            <TabItem 
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                    setUpdate(update + 1);
                                }}
                                ripple="light"
                                active={openTab === 1 ? true : false}
                                href="tabItem"
                                className="mx-8"
                            >
                                Events
                            </TabItem>
                            <TabItem
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                ripple="light"
                                active={openTab === 2 ? true : false}
                                href="tabItem"
                                className="mx-4"
                            >
                                My Ticket NFT's
                            </TabItem>
                            <TabItem
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                ripple="light"
                                active={openTab === 3 ? true : false}
                                href="tabItem"
                                className="mx-4"
                            >
                                Create Event
                            </TabItem>
                        </TabList>
                    </div>

                    <TabContent>
                        <TabPane active={openTab === 1 ? true : false}>
                            <div>
                                <Events doc={d} loading={loading}/>
                            </div>
                        </TabPane>
                        <TabPane active={openTab === 2 ? true : false}>
                            <div class="grid grid-cols-3 gap-5">
                                <NewIdeas doc={docs} loading={loading}/>
                            </div>
                        </TabPane>
                        <TabPane active={openTab === 3 ? true : false}>
                            <div class="mx-24 w-1/2">
                                <NewForm/>
                            </div>
                        </TabPane>
                    </TabContent>
                </Tab>
            </section>
        </>
    );
}