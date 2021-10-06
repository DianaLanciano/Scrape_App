import Bag from "../models/bags.js";
import { addBagsToDB } from "./scrape.js";

async function initDB() {
  if ((await Bag.find()).length != 0) {
    Bag.remove();
    const bags = await addBagsToDB();

    bags[0].forEach((element) => {
      Bag.create(
        {
          title: element.productTitle,
          brand: element.brand,
          image: element.image,
          prevPrice: element.prevPriceInNis,
          CurrPrice: element.currentPriceInNis,
          productLink: element.productLink,
        },
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    });
  }
}


initDB();

export const getBags = async (req, res) => {
  try {
    
    const bags = await Bag.find();
    res.status(200).json(bags);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBag = async (req, res) => {
  try {
    const singleBag = await Bag.findById(req.params.id);
    res.status(200).json(singleBag);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveBag = async (req, res) => {
  const bag = req.body;
  const fullObject = Bag.find({ _id: bag._id });
  const csv = new ObjectsToCsv(fullObject);

  // Save to file:
  await csv.toDisk("./savedItems.csv");
};
