import React, { useState, useEffect } from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Showall from "../components/showall"
export default function ArtistCard(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [siteName, setSiteName] = React.useState("");


  return (
    <div className="" key={props.key}>
      <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-110 duration-150">
        <CardImage
          src={props.imgLink}
          alt="Card Image"
          className="h-60 w-full"
        />
        <CardFooter className="grid grid-cols-1  ">
          <div class="p-2 text-left">
            <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
              {props.title}
            </h1>

            <p class="py-2 text-gray-700 dark:text-gray-400">
              {props.elevatorPitch}asfdmnhasgfjy dsfjsdgdf
              yusuyffgsjfgffsdjfhghjysdd<br></br>askfuhasufdhgjhhgg
            </p>
            <p>Type: {props.type}</p>
          </div>
          <div class="p-2 justify-self-end">
            <Button
              color="gray"
              size="lg"
              ripple="light"
              onClick={(e) => setShowModal(true)}
            >
              Read More..
            </Button>
          </div>
        </CardFooter>
      </div>
      <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
        <ModalBody>
          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                 Event Name : {props.title}
                </h1>

                
<div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
    <div class="border-t border-gray-200">
        <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    VENUE : 
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Hard Coded Venue
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    DATE :
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Hard Coded time
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    TIME :
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Hard Coded time
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Description
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                </dd>
            </div>
        </dl>
    </div>
</div>

                <div class="flex justify-center py-4 my-4">
                  
                  <Showall/>
                 
                </div>
              </div>
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src={props.imgLink}
                />
              </div>
            </div>
          </section>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}
