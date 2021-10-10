/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import BaseStat from "../../models/BaseStat";
import { StatItem } from "../StatItem/StatItem";

interface ICardStatsTableProps {
  baseStats: BaseStat[];
}

export const CardStatsTable: React.FC<ICardStatsTableProps> = ({
  baseStats,
}) => {
  const cardStatsTable = css({
    margin: "1em 0",
    width: "100%",
  });

  return (
    <table css={cardStatsTable}>
      <tbody>
        {baseStats.map((baseStat) => (
          <StatItem
            baseStat={baseStat}
            key={baseStat.getName() + baseStat.getValue()}
          />
        ))}
      </tbody>
    </table>
  );
};
