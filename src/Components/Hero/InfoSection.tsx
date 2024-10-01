import React from "react";

const infoItems = [
  {
    label: "Email:",
    value: "alinazery@yahoo.com",
  },
  {
    label: "Phone:",
    value: "+93 783740098",
  },
  {
    label: "Location:",
    value: "Herat, Afghanistan",
  },
];

const InfoSection = () => (
  <div className="info w-full flex">
    {infoItems.map((item, index) => (
      <div key={index} className="info__item pr-[30px]">
        <p className="info__label mb-0 text-white font-extrabold font-muli">
          {item.label}
        </p>
        <p className="info__value mb-0 text-white font-normal text-[15px]">
          {item.value}
        </p>
      </div>
    ))}
  </div>
);

export default InfoSection;
