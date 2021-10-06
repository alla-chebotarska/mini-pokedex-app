import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BaseStat from "../../models/BaseStat";

interface ICardStatsProps {
  baseStats: BaseStat[];
}

export const CardStats: React.FC<ICardStatsProps> = ({baseStats}) => {
  const cardStats = css({
    margin: "1em 0",
    width: "100%",
  });

  const cardStatsData = css({
    width: "50%",
    padding: "0.25em 0.5em 0",
  });

  const cardStatsHeader = css({
    textAlign: "right",
    fontWeight: "lighter",
  });
  return (
    <table css={cardStats}>
      <tbody>
        {baseStats.map((item) => (
          <tr css={cardStatsData}>
            <th css={cardStatsHeader}>{item.getName()}</th>
            <td css={cardStatsData}>{item.getValue()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
