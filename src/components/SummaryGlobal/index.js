import React from "react";
import StyledSummary from "./Summary.styled";
import ENDPOINTS from "../../utils/constants/endpoint";

const SummaryGlobal = ({ url, title }) => {
  return (
    <StyledSummary>
      <div>
        <h2>Summary</h2>
        {title ? (
          <p>Data Covid Berdasarkan {title}</p>
        ) : (
          <p>Data Covid Berdasarkan Global</p>
        )}
        {url ? (
          <img src={url} alt="" />
        ) : (
          <img src={ENDPOINTS.SUMMARY_GLOBAL} alt="" />
        )}
      </div>
    </StyledSummary>
  );
};

export default SummaryGlobal;
