import Image from "next/image";

// TimelineItem.jsx
interface TimelineItemProp {
  title: string;
  place: string;
  year: string;
  description: string;
  imgSrc: string;
}


const TimelineItem:React.FC<TimelineItemProp> = ({ title, place, year, description, imgSrc }) => {
  return (
    <div className="timeline__item flex py-6 border-b border-[#eee] ">
      <Image
        alt=""
        loading="lazy"
        width="40"
        height="40"
        decoding="async"
        data-nimg="1"
        className="timeline__item__img rounded-[50%] bg-[#764b9b] dark:bg-[#44a56b] max-w-full align-middle border-none w-[40px] h-[40px]"
        src={imgSrc}
      />
      <div className="timeline__item__content pl-[15px] flex flex-[1_1] gap-[6px] flex-col">
        <h6 className="timeline__item__title mb-0 text-[18px] capitalize dark:text-[#eeeded]">
          {title}
        </h6>
        <div className="">
          <div className="timeline__item__info text-[12px] inline-flex font-bold gap-[6px] items-center text-[#152035] bg-[#fff] dark:bg-[#999] py-[1px] px-[10px] rounded-[20px]">
            <span className="timeline__item__place">{place}</span>
            <span className="dot mt-0 bg-[#764b9b!important] dark:bg-[#152035!important] w-1 h-1 border block rounded-full"></span>
            <span className="timeline__item__year">{year}</span>
          </div>
        </div>
        <p className="timeline__item__desc mb-0 text-[15px] dark:text-[#eeebeb]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;


