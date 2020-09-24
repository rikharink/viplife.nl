import React, { FC } from "react";
export interface NotifyProps {
  className?: string;
}

export const Notify: FC<NotifyProps> = ({ className }) => {
  return (
    <div className={className}>
      <form name="drop-notify" method="POST" data-netlify="true">
        <div>
          <input name="email" className="outline-none border-b bg-transparent" type="text"></input>
          @topicus.nl
        </div>
        <button className="rounded-sm border border-white text-white bg-transparent m-6 p-2" type="submit">notify me of next drop</button>
      </form>
    </div>
  );
};
