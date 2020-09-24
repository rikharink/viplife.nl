import React, { FC } from "react";
export interface NotifyProps {
  className?: string;
}

export const Notify: FC<NotifyProps> = ({ className }) => {
  return (
    <div className={className}>
      <form
        name="drop-notify"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="post"
      >
        <div>
          <input
            name="email"
            className="outline-none border-b bg-transparent"
            type="text"
            minLength={1}
            required
          ></input>
          @topicus.nl
        </div>
        <input type="hidden" name="form-name" value="drop-notify" />
        <p className="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <button
          className="rounded-sm border border-white text-white bg-transparent m-6 p-2"
          type="submit"
        >
          notify me of next drop
        </button>
      </form>
    </div>
  );
};
