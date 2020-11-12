import React, { FC } from "react";
export interface NotifyProps {
  className?: string;
}

export const Notify: FC<NotifyProps> = ({ className }) => {
  return (
    <div className={className}>
      <p>
        join #viplife on slack to get notified of our next drop
      </p>
    </div>
  );
};
