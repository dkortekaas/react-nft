import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import CardList from "./components/CardList";
import { useEffect, useState } from "react";
import axios from "axios";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x59C324929D878C398703171CaF6830EF24e96ABf&order_direction=asc"
      );
      setPunkListData(openSeaData.data.assets);
    };

    return getMyNfts();
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main punkListData={punkListData} selectedCard={selectedCard} />
      <CardList punkListData={punkListData} setSelectedCard={setSelectedCard} />
    </div>
  );
}

export default App;
