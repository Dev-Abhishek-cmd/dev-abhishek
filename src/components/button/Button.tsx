import React from "react";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

export default function Button({
  text,
  className,
  href,
  newTab,
  theme,
}: {
  text?: any;
  className?: any;
  href?: any;
  newTab?: any;
  theme?: any;
}) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab ? "_blank" : undefined}
        style={{
          color: theme?.body,
          backgroundColor: theme?.text,
          border: theme?.text ? `solid 1px ${theme.text}` : undefined,
        }}
        onMouseEnter={(event) =>
          theme && onMouseEnter(event, theme.text, theme.body)
        }
        onMouseOut={(event) =>
          theme && onMouseOut(event, theme.body, theme.text)
        }
      >
        {text}
      </a>
    </div>
  );
}
