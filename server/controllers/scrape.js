import puppeteer from 'puppeteer';
import cheerio from 'cheerio';


const finalListOfPruducts = [];

export const addBagsToDB = async (req, res) => {
   
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const products = await scrapeProducts(page)
    return products;
}


function priceFix(stringNumber){
   
    const fixedPrice = stringNumber.substring(1);
    const priceTostring = parseInt(fixedPrice);
    const priceInNis = priceTostring * 4.46;
    return priceInNis + String.fromCharCode(0x20aa);
}


async function sleep(mileseconds){
    return new Promise(resolve => setTimeout(resolve, mileseconds));
}

async function scrapeProducts(page){
 
    let url = "https://www.mybag.com/sale.list?pageNumber=1&facetFilters=en_Accessorytype_content:Bag";
    await page.goto(url);
    const html = await page.content();
    const $ = cheerio.load(html);
    const totalPages = $(".responsivePaginationPages").attr("data-total-pages");

     for(let index = 1; index <= totalPages; index++){
         url = `https://www.mybag.com/sale.list?pageNumber=${index}&facetFilters=en_Accessorytype_content:Bag`
         const theProductListAsHTML = $(".productBlock");

         
         const productsList = theProductListAsHTML.map((i, ele) => {
        
        //Product title
        const titleElement = $(ele).find(".productBlock_productName").text();
        var title = titleElement.replace(/\s/g, '');
        
       
        //Product link
        const productLink = $(ele).find(".productBlock_link").attr("href");
        //Product price
        const prevPrice = $(ele).find(".productBlock_rrpValue").text();
        const currentPrice = $(ele).find(".productBlock_priceValue").attr("content");
        //Convert product price NIS
        const prevPriceInNis = priceFix(prevPrice);
        const currentPriceInNis = priceFix(currentPrice);
        
        //Product image
        const image = $(ele).find(".productBlock_imageContainer").find("img").attr("src");

        //Product brand
        const brand = $(ele).find(".js-enhanced-ecommerce-data").attr("data-product-brand");

        return {productTitle: title, prevPriceInNis, currentPriceInNis, image, brand, productLink};
        
    }).get();

        finalListOfPruducts.push(productsList);
         await sleep(1000);// 1 sec sleep
    }

    return finalListOfPruducts;
}

addBagsToDB();
