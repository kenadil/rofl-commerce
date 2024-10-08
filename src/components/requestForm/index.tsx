import { Box, TextField } from "@mui/material";
import "./style.scss";
import CommerceButton from "../controls/button";
import { useState } from "react";

const RequestForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <Box
      sx={{ background: "#000", padding: "90px 110px", borderRadius: 5 }}
      id="register"
    >
      <h5 className="commerce-form-title">Поставить бронь</h5>
      <p className="commerce-form-subtitle">
        Оставьте заявку, и мы с радостью с вами свяжемся
      </p>

      <div className="form-request">
        <TextField
          className="form-request-textfield"
          variant="standard"
          label="Ваше имя"
          focused
          value={name}
          onChange={(e) => {
            const value = e.target.value;
            setName(value);
          }}
        />
        <div style={{ marginBottom: "48px" }}></div>
        <TextField
          className="form-request-textfield"
          variant="standard"
          label="Номер телефона"
          focused
          value={phone}
          onChange={(e) => {
            const value = e.target.value;
            setPhone(value);
          }}
        />
        <div className="commerce-form-button">
          <CommerceButton
            label="Отправить"
            isRef={false}
            onClick={() => alert(`Вы ввели: ${name} ${phone}`)}
          />
        </div>
      </div>
    </Box>
  );
};

export default RequestForm;
