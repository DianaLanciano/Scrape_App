import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBags } from "../../api";
import './styles.css';

import Bag from "./Bag/Bag";

const Bags = () => {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    getAllBags();
  }, []);

  const getAllBags = async () => {
      fetchBags()
      .then((data) => {
        console.log(data.data);
        setBags(data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 10 }}>
      {bags.map(bag =>  <Bag key={bag._id} bag={bag}/>)}
      </div>
    </>
  );
};

export default Bags;
