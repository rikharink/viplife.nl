import React, { FC } from "react";
export interface NextDropProps {
  className?: string;
  dropdate?: Date;
}

export const NextDrop: FC<NextDropProps> = ({ className, dropdate }) => {
  let now = new Date();
  let oneDay = 1000 * 60 * 60 * 24;
  let days = "";
  if(dropdate){
      days = Math.ceil((dropdate.getTime() - now.getTime()) / oneDay).toString();
  } else {
      days = "???"
  }
  return (
    <div className={className}>
      <span>Next drop in {days} days</span>
    </div>
  );
};
