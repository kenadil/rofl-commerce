import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Product } from "..";

const CarouselItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card sx={{ margin: "0 16px" }} className="commerce-carousel-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={`/${product.img}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name} - {product.price} тг
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <ul>
              <li>
                <strong>Монитор</strong>: {product.description.display}
              </li>
              <li>
                <strong>Видеокарта</strong>: {product.description.graphic}
              </li>
              <li>
                <strong>Процессор</strong>: {product.description.processor}
              </li>
              <li>
                <strong>ОЗУ</strong>: {product.description.ram}
              </li>
              <li>
                <strong>Мышка</strong>: {product.description.mouse}
              </li>
              <li>
                <strong>Клавиатура</strong>: {product.description.keyboard}
              </li>
              <li>
                <strong>Наушники</strong>: {product.description.headphones}
              </li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CarouselItem;
