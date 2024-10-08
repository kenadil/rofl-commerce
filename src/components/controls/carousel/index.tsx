import Carousel from "react-multi-carousel";
import "./style.scss";
import { useEffect, useState } from "react";
import CarouselItem from "./carousel-item";

export type Product = {
  price: string | number;
  name: string;
  description: ProductDescription;
  img: string | JSX.Element;
};

type ProductDescription = {
  display: string;
  graphic: string;
  processor: string;
  ram: string;
  mouse: string;
  keyboard: string;
  headphones: string;
  stream: boolean;
  holder?: string;
  mic?: string;
  web?: string;
};

interface CarouselProps {
  products: Product[];
  chunkSize: number;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CommerceCarousel: React.FC<CarouselProps> = ({ products, chunkSize }) => {
  const [groupedItems, setGroupedItems] = useState<Array<Product[]>>([]);

  const getGroupedItems = (items: Array<any>, size: any): any => {
    return items.reduce((result, item, index) => {
      if (index % size === 0) {
        result.push([]);
      }
      result[result.length - 1].push(item);
      return result;
    }, []);
  };

  useEffect(() => {
    const groupedItems = getGroupedItems(products, chunkSize || 3);
    setGroupedItems(groupedItems);
  }, [products, chunkSize]);

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={false}
      autoPlay={false}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="commerce-carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      renderDotsOutside={true}
      itemClass="commerce-carousel-group"
    >
      {groupedItems.map((products, index) => (
        <div
          className="commerce-carousel-items"
          key={`carousel-group-${index}`}
        >
          <div className="commerce-carousel-items-wrapper">
            {products.map((product, idx) => (
              <CarouselItem
                product={product}
                key={`carousel-${index}-${idx}`}
              />
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CommerceCarousel;
