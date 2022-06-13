import React, {useState, useEffect} from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";


export default function ArtistCard(props) {
    const [showModal, setShowModal] = React.useState(false);
    const [siteName, setSiteName] = React.useState('');
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    
    useEffect(() => {
        setLikes(props.likes);
    },[]);

    const handleLike = event => {

        if(liked)
        {
            setLikes(likes - 1);
        }
        else
            setLikes(parseInt(likes) + 1);
        setLiked(!liked);
    };

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
                        <h1 class="text-xl font-semibold text-gray-800 dark:text-white">{props.title}</h1>

                        <p class="py-2 text-gray-700 dark:text-gray-400">{props.elevatorPitch}asfdmnhasgfjy dsfjsdgdf yusuyffgsjfgffsdjfhghjysdd<br></br>askfuhasufdhgjhhgg</p>
                        
                    </div>
                    <div class="p-2 justify-self-end">
                        <Button color="gray" size="lg" ripple="light" onClick={(e) => setShowModal(true)}>
                            Read More..
                        </Button>
                    </div>
                </CardFooter>
            </div>
            <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    {props.title}
                </ModalHeader>
                <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 font-normal text-justify p-5">
                        {props.description}
                    </p>
                    <p className="text-base leading-relaxed text-gray-600 font-normal text-justify p-5">
                        Total Required Amount: {props.value} ETH
                    </p>
                    <p className="text-base leading-relaxed text-gray-600 font-normal text-justify p-5">
                        Total Raised Amount: {props.rasied} ETH
                    </p>
                    <div className="w-2/3">
                        <input class="rounded-lg overflow-hidden h-2 w-full" type="range" 
                            min="1" 
                            max="100" 
                            value="50" 
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="lightBlue"
                        /*onClick={}*/
                        ripple="light"
                    >
                        Contribute
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}