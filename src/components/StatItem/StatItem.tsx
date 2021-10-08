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
      case value < 20:
        color = "#ff0000";
        break;
      case value < 40:
        color = "#ff9933";
        break;
      case value < 60:
        color = "#ffff66";
        break;
      case value < 80:
        color = "#99ff33";
        break;
      case value < 100:
        color = "#009900";
        break;
      default:
        color = "#004d00";
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
