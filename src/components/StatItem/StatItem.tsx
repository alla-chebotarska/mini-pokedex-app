/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import BaseStat from "../../models/BaseStat";

interface ICardStatsTableProps {
  baseStat: BaseStat,
}

export const StatItem: React.FC<ICardStatsTableProps> = ({ baseStat }) => {

  const cardStatsTableData = css({
    width: "50%",
    padding: "0.25em 0.5em 0",
  });

  const cardStatsTableHeader = css({
    textAlign: "right",
    fontWeight: "lighter",
  });
  return (
    <tr css={cardStatsTableData}>
      <th css={cardStatsTableHeader}>{baseStat.getName()}</th>
      <td css={cardStatsTableData}>{baseStat.getValue()}</td>
    </tr>
  );
};
