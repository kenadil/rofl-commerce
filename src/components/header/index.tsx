import { Box } from "@mui/material";
import "./style.scss";
import CommerceButton from "../controls/button";

const Header = () => {
  return (
    <Box sx={{ p: "298px 0 103px" }} className="commerce-header-box">
      <div className="commerce-header-info">
        <h1 className="commerce-header-title">Компьютерный клуб в Караганде</h1>
        <p className="commerce-header-subtitle">
          Играй в современные игры на топовом оборудовании
        </p>
        <div className="commerce-header-button">
          <CommerceButton
            label={"Забронировать"}
            isRef={true}
            anchor={"#register"}
          />
        </div>
      </div>
    </Box>
  );
};

export default Header;
