import React, { ReactElement } from 'react';

type LargeCardProps = {
  children: JSX.Element;
  width?: string;
  minWidth?: string;
  borderRadius?: string;
  noBackgroundGray?: boolean;
};
export const LargeCard = (props: LargeCardProps) => {
  return (
    <div
      style={{
        width: props.width || '80%',
        minWidth: props.minWidth || '380',
        borderRadius: props.borderRadius || '0.5rem',
      }}
      className={`${props.noBackgroundGray ? '' : 'bg-dark'}  py-5`}
    >
      {props.children}
    </div>
  );
};
