import React from "react";

import { useTranslation } from "react-i18next";
import "../App.css";

const LanguageSelector = (props) => {
  const { i18n } = useTranslation();

  const onChangeLang = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flags_side_by_side">
      <img
        width={30}
        height={20}
        src="https://countryflagsapi.com/png/turkey"
        alt="tr"
        onClick={() => onChangeLang("tr")}
        style={{ cursor: "pointer" }}
      />
      <img
        width={30}
        height={20}
        src="https://countryflagsapi.com/png/gb"
        alt="en"
        onClick={() => onChangeLang("en")}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};
export default LanguageSelector;
