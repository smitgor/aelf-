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
import Showall from "../components/showall";
export default function ArtistCard(props) {
  return (
    <div className="" key={props.key}>
      <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-110 duration-150">
        <CardImage
          src={props.imgLink}
          alt="Card Image"
          className="h-60 w-full"
        />
        <CardBody></CardBody>
        <CardFooter className="grid grid-cols-1  ">
          <div class="p-2 text-left">
            <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
              Event Name : Hard Event name
            </h1>
            <h2 class="text-l font-semibold text-gray-800 dark:text-white">
              Current Price : $43
            </h2>

            {/* set new price form */}
            <form class="w-full max-w-sm">
              <div class="flex items-center border-b border-teal-500 py-2">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="number"
                  placeholder="Set Selling Price"
                  aria-label="Full name"
                />
                <button
                  class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
                >
                  Sell NFT
                </button>
                {/* <button
                  class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                  type="button"
                >
                  Cancel
                </button> */}
              </div>
            </form>
          </div>
          <div class="p-2 justify-self-end">
          </div>
        </CardFooter>
      </div>
    </div>
  );
}
