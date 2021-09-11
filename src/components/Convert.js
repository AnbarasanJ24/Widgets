import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./Convert.scss";

const Convert = ({ language, text }) => {
  const [translate, setTranslate] = useState("");

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslate(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, text]);
  return (
    <div className="convert">
      <h5>Output</h5>
      <p>{translate}</p>
    </div>
  );
};

export default Convert;
