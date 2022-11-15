import { useEffect, useState } from "react";
import axios from "axios";
import WebinarTypes from "./WebinarTypes";

import React from "react";

export default function WebinarTypesApiCall() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://35.192.231.16/momscradle-web-api/api/webinar-type/published
      `
      )
      .then((response) => {
        if (response.data.Status) {
          setAPIData(response.data.Object.WebinarTypeList);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div>
      <WebinarTypes apiData={APIData}></WebinarTypes>
    </div>
  );
}
