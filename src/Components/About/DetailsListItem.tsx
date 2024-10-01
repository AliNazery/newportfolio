// DetailsListItem.jsx
interface DetailProp {
    label: string, 
    value: string
}


const DetailsListItem:React.FC<DetailProp> = ({ label, value }) => {
  return (
    <li className="details__list-item mb-[10px] w-[50%] float-left dark:text-[#eeeded]">
      <span className="details__list-label capitalize text-[#152035] dark:text-[#eeeded] font-black mr-[5px]">
        {label} :
      </span>
      {value}
    </li>
  );
};

export default DetailsListItem;
