/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import BaseStat from "../../models/BaseStat";

interface ICardStatsTableProps {
  baseStat: BaseStat;
}

export const StatItem: React.FC<ICardStatsTableProps> = ({ baseStat }) => {
  const progresColor = (value: number) => {
    let color;
    switch (true) {
      case value <= 20:
        color = "#e81b10";
        break;
      case value <= 40:
        color = "#e85f10";
        break;
      case value <= 60:
        color = "#e8e410";
        break;
      case value <= 80:
        color = "#a0e810";
        break;
      case value <= 100:
        color = "#14e810";
        break;
      default:
        color = "#10e88a";
    }
    return color;
  };

  const cardStatsTableData = css({
    width: "50%",
    padding: "0.25em 0.5em 0",
  });

  const cardStatsTableHeader = css({
    textAlign: "right",
    fontWeight: "lighter",
  });

  const progres = css({
    height: "12px",
    width: `${Math.min(baseStat.getValue(), 105)}%`,
    backgroundColor: progresColor(baseStat.getValue()),
  });

  return (
    <tr css={cardStatsTableData}>
      <th css={cardStatsTableHeader}>{baseStat.getName()}</th>
      <td css={cardStatsTableData}>
        {baseStat.getValue()} <div css={progres}></div>
      </td>
    </tr>
  );
};
