import React from "react";

const CalendarIcon = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 6.625C0 4.5248 0 3.4747 0.408726 2.67254C0.768251 1.96693 1.34193 1.39325 2.04754 1.03373C2.8497 0.625 3.8998 0.625 6 0.625H14C16.1002 0.625 17.1503 0.625 17.9525 1.03373C18.6581 1.39325 19.2317 1.96693 19.5913 2.67254C20 3.4747 20 4.5248 20 6.625V13.375C20 15.4752 20 16.5253 19.5913 17.3275C19.2317 18.0331 18.6581 18.6067 17.9525 18.9663C17.1503 19.375 16.1002 19.375 14 19.375H6C3.8998 19.375 2.8497 19.375 2.04754 18.9663C1.34193 18.6067 0.768251 18.0331 0.408726 17.3275C0 16.5253 0 15.4752 0 13.375V6.625ZM14 5H6C4.91896 5 4.22095 5.00146 3.68969 5.04486C3.18032 5.08648 2.99147 5.15713 2.89877 5.20436C2.54596 5.38413 2.25913 5.67096 2.07936 6.02377C2.03213 6.11647 1.96148 6.30532 1.91986 6.81469C1.87646 7.34595 1.875 8.04396 1.875 9.125V13.375C1.875 14.456 1.87646 15.1541 1.91986 15.6853C1.96148 16.1947 2.03213 16.3835 2.07936 16.4762C2.25913 16.829 2.54596 17.1159 2.89877 17.2956C2.99147 17.3429 3.18032 17.4135 3.68969 17.4551C4.22095 17.4985 4.91896 17.5 6 17.5H14C15.081 17.5 15.7791 17.4985 16.3103 17.4551C16.8197 17.4135 17.0085 17.3429 17.1012 17.2956C17.454 17.1159 17.7409 16.829 17.9206 16.4762C17.9679 16.3835 18.0385 16.1947 18.0801 15.6853C18.1235 15.1541 18.125 14.456 18.125 13.375V9.125C18.125 8.04396 18.1235 7.34595 18.0801 6.81469C18.0385 6.30532 17.9679 6.11647 17.9206 6.02377C17.7409 5.67096 17.454 5.38413 17.1012 5.20436C17.0085 5.15713 16.8197 5.08648 16.3103 5.04486C15.7791 5.00146 15.081 5 14 5ZM7.5 8C7.5 7.72386 7.72386 7.5 8 7.5H8.5625C8.83864 7.5 9.0625 7.72386 9.0625 8V8.5625C9.0625 8.83864 8.83864 9.0625 8.5625 9.0625H8C7.72386 9.0625 7.5 8.83864 7.5 8.5625V8ZM8 10.625C7.72386 10.625 7.5 10.8489 7.5 11.125V11.6875C7.5 11.9636 7.72386 12.1875 8 12.1875H8.5625C8.83864 12.1875 9.0625 11.9636 9.0625 11.6875V11.125C9.0625 10.8489 8.83864 10.625 8.5625 10.625H8ZM7.5 14.25C7.5 13.9739 7.72386 13.75 8 13.75H8.5625C8.83864 13.75 9.0625 13.9739 9.0625 14.25V14.8125C9.0625 15.0886 8.83864 15.3125 8.5625 15.3125H8C7.72386 15.3125 7.5 15.0886 7.5 14.8125V14.25ZM4.5625 10.625C4.28636 10.625 4.0625 10.8489 4.0625 11.125V11.6875C4.0625 11.9636 4.28636 12.1875 4.5625 12.1875H5.125C5.40114 12.1875 5.625 11.9636 5.625 11.6875V11.125C5.625 10.8489 5.40114 10.625 5.125 10.625H4.5625ZM4.0625 14.25C4.0625 13.9739 4.28636 13.75 4.5625 13.75H5.125C5.40114 13.75 5.625 13.9739 5.625 14.25V14.8125C5.625 15.0886 5.40114 15.3125 5.125 15.3125H4.5625C4.28636 15.3125 4.0625 15.0886 4.0625 14.8125V14.25ZM11.4375 7.5C11.1614 7.5 10.9375 7.72386 10.9375 8V8.5625C10.9375 8.83864 11.1614 9.0625 11.4375 9.0625H12C12.2761 9.0625 12.5 8.83864 12.5 8.5625V8C12.5 7.72386 12.2761 7.5 12 7.5H11.4375ZM10.9375 11.125C10.9375 10.8489 11.1614 10.625 11.4375 10.625H12C12.2761 10.625 12.5 10.8489 12.5 11.125V11.6875C12.5 11.9636 12.2761 12.1875 12 12.1875H11.4375C11.1614 12.1875 10.9375 11.9636 10.9375 11.6875V11.125ZM11.4375 13.75C11.1614 13.75 10.9375 13.9739 10.9375 14.25V14.8125C10.9375 15.0886 11.1614 15.3125 11.4375 15.3125H12C12.2761 15.3125 12.5 15.0886 12.5 14.8125V14.25C12.5 13.9739 12.2761 13.75 12 13.75H11.4375ZM14.375 8C14.375 7.72386 14.5989 7.5 14.875 7.5H15.4375C15.7136 7.5 15.9375 7.72386 15.9375 8V8.5625C15.9375 8.83864 15.7136 9.0625 15.4375 9.0625H14.875C14.5989 9.0625 14.375 8.83864 14.375 8.5625V8ZM14.875 10.625C14.5989 10.625 14.375 10.8489 14.375 11.125V11.6875C14.375 11.9636 14.5989 12.1875 14.875 12.1875H15.4375C15.7136 12.1875 15.9375 11.9636 15.9375 11.6875V11.125C15.9375 10.8489 15.7136 10.625 15.4375 10.625H14.875Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

export default CalendarIcon;
