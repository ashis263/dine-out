import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import FilterIcon from "../components/FilterIcon/FilterIcon";
import FilterOption from "../components/FilterOption/FilterOption";

const TopBar = ({ orders, setOrdersToRender }) => {
  return (
    <div className="flex justify-between">
      <SectionHeading heading="Order Reports" />
      <div className="flex gap-4 items-center">
        <FilterIcon />
        <FilterOption orders={orders} setOrdersToRender={setOrdersToRender} />
      </div>
    </div>
  );
};

export default TopBar;
