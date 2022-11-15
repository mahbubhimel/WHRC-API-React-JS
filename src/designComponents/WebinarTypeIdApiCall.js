import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import WebinarTypeIdDesign from "./WebinarTypeIdDesign";

export default function WebinarTypeIdApiCall(props) {
  const { id } = props;
  const [TypeIdData, setTypeIdData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://35.192.231.16/momscradle-web-api/api/webinar/published/by-type/${id}

      `
      )
      .then((response) => {
        if (response.data.Status) {
          setTypeIdData(response.data.Object.webinars);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, [id]);

  console.log(TypeIdData);
  return (
    <div>
      <WebinarTypeIdDesign ApiById={TypeIdData}></WebinarTypeIdDesign>
    </div>
  );
}
