import React, { useEffect,useState } from "react";
import logo from "../../assets/logo.png";
import {Actor, HttpAgent} from '@dfinity/agent'
import {Principal} from "@dfinity/principal";
import { idlFactory } from "../../../declarations/nft/index";

function Item(props) {
  const [name, setName] = useState();
  const canisterId = Principal.fromText(props.id);
  
  const host = window.location.href
  const agent = new HttpAgent({host});

  async function loadNft(){
    const actor = await Actor.createActor(idlFactory, {agent,canisterId});
    const name = await actor.getName();
    setName(name);
    // const image = await actor.getImage();
    // const owner = await actor.getOnwer();
  }
  
  useEffect(()=>{
    loadNft()
  },[])
  
  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={logo}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
          {name}
          <span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: sdfsdf-erwerv-sdf
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
