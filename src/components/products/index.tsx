import CommerceCarousel, { Product } from "../controls/carousel";

const products: Product[] = [
  {
    price: "1 200",
    name: "Общий зал",
    description: {
      display: 'Asus 24" 280Hz',
      graphic: "GeForce RTX 3060Ti",
      ram: "Kingston FURY 16Gb",
      processor: "Intel Core i5 - 13400F",
      mouse: "HyperX Pulsefire Surge",
      keyboard: "HyperX Alloy Origins Core",
      headphones: "HyperX Cloud 2",
      stream: false,
    },
    img: "common.jpg",
  },
  {
    price: "2 000",
    name: "VIP зал",
    description: {
      display: "24'5 AOC AGON 360Hz",
      graphic: "GeForce RTX 3070Ti",
      ram: "G.Skill RIPJAWS DDDR4 16Gb",
      processor: "Intel Core i7 - 12700F",
      mouse: "Zowie EC-2-C",
      keyboard: "Varmilo Sea Melody Panda 68",
      headphones: "HyperX Cloud 2",
      stream: false,
    },
    img: "vip.jpg",
  },
  {
    price: "5 000",
    name: "Bootcamp Zone",
    description: {
      display: "24' Asus ROG 360Hz",
      graphic: "GeForce RTX 4070Ti SUPER",
      ram: "G.Skill RIPJAWS DDDR4 32Gb",
      processor: "Intel Core i7 - 13700KF",
      mouse: "Logitech GPRO Super Light",
      keyboard: "Varmilo Sea Melody Panda 68",
      headphones: "HyperX Cloud2 WIRELESS",
      stream: false,
    },
    img: "bootcamp.jpg",
  },
  {
    price: "4 000",
    name: "Premier Room",
    description: {
      display: "24' Asus ROG 240Hz",
      graphic: "GeForce RTX 2080Ti",
      ram: "Kingston FURY 16Gb",
      processor: "Intel Core i5 - 13400F",
      mouse: "HyperX Pulsefire Surge",
      keyboard: "HyperX Alloy Origins Core",
      headphones: "HyperX Cloud Alpha/2",
      stream: false,
    },
    img: "premier.jpg",
  },
  {
    price: "18 000",
    name: "Стримерская",
    description: {
      display: "24' Asus ROG 360Hz",
      graphic: "GeForce RTX 4090",
      ram: "G.Skills Trident Z 32Gb",
      processor: "Intel Core i7 - 12700F",
      mouse: "Zowie EC-2-C",
      keyboard: "Varmilo Sea Melody Panda 68",
      headphones: "HyperX Cloud Stinger 2 WIRELESS",
      stream: true,
      holder: "Zowie",
      mic: "THROWMAX",
      web: "THROWMAX",
    },
    img: "streamer.jpg",
  },
];

const Products = () => {
  return (
    <>
      <h3 className="commerce-section-title">Оборудование</h3>
      <CommerceCarousel products={products} chunkSize={3} />;
    </>
  );
};

export default Products;
