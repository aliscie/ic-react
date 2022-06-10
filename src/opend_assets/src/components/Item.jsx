import React, { useEffect,useState } from "react";
import {Actor, HttpAgent} from '@dfinity/agent'
import {Principal} from "@dfinity/principal";
import { idlFactory } from "../../../declarations/nft/index";

function convertArr8(imageArr){
  const image8 = new Uint8Array(imageArr);
  return URL.createObjectURL(
    new Blob( [image8.buffer],  {type:'image/png'})
    );
}

function Item(props) {
  const [name, setName] = useState();
  const [userId, setUserID] = useState();
  const [image, setImage] = useState();

  const canisterId = Principal.fromText(props.id);
  
  const host = window.location.href
  const agent = new HttpAgent({host});

  async function loadNft(){
    const actor = await Actor.createActor(idlFactory, {agent,canisterId});
    const name = await actor.getName();
    setName(name);
    
    const owner = await actor.getOnwer();
    setUserID(owner.toText())

    const imageArr = await actor.getimage();
    setImage(convertArr8(imageArr))
    

  }
  
  useEffect(()=>{
    loadNft()
  },[])
  
  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={image}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
          {name}
          <span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            {userId}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
