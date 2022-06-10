import Debug "mo:base/Debug";
import Principal "mo:base/Principal";

actor class NFT (name:Text, onwer: Principal, content:[Nat8]){
    
    let itemName=name;
    let nftOnwer=onwer; //every time we call NFT() we will get new unique Principal
    let imageByts=content; //every time we call NFT() we will get new unique content

    public query func getName() : async Text{
        return itemName
    };

    public query func getOnwer() : async Principal{
        return nftOnwer
    };

    public query func getimage() : async [Nat8]{
        return imageByts
    };
}