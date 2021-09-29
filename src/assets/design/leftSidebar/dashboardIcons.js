import React from 'react';

function dashboardIcons(props) {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.41667 0H3.66667C1.64162 0 0 1.64162 0 3.66667V6.41667C0 8.44171 1.64162 10.0833 3.66667 10.0833H6.41667C8.44171 10.0833 10.0833 8.44171 10.0833 6.41667V3.66667C10.0833 1.64162 8.44171 0 6.41667 0Z'
        fill={props.fill}
      />
      <path
        d='M18.3332 0H15.5832C13.5581 0 11.9165 1.64162 11.9165 3.66667V6.41667C11.9165 8.44171 13.5581 10.0833 15.5832 10.0833H18.3332C20.3582 10.0833 21.9998 8.44171 21.9998 6.41667V3.66667C21.9998 1.64162 20.3582 0 18.3332 0Z'
        fill={props.fill}
      />
      <path
        d='M6.41667 11.9166H3.66667C1.64162 11.9166 0 13.5582 0 15.5833V18.3333C0 20.3583 1.64162 22 3.66667 22H6.41667C8.44171 22 10.0833 20.3583 10.0833 18.3333V15.5833C10.0833 13.5582 8.44171 11.9166 6.41667 11.9166Z'
        fill={props.fill}
      />
      <path
        d='M18.3332 11.9166H15.5832C13.5581 11.9166 11.9165 13.5582 11.9165 15.5833V18.3333C11.9165 20.3583 13.5581 22 15.5832 22H18.3332C20.3582 22 21.9998 20.3583 21.9998 18.3333V15.5833C21.9998 13.5582 20.3582 11.9166 18.3332 11.9166Z'
        fill={props.fill}
      />
    </svg>
  );
}

export default dashboardIcons;
