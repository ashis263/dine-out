import Menu from "./components/Menu/Menu";
import NameInput from "./components/NameInput/NameInput";
import OrderButton from "./components/OrderButton/OrderButton";
import SidebarIntro from "./components/SidebarIntro/SidebarIntro";

const Sidebar = () => {
  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <SidebarIntro />
      <NameInput />
      <Menu />
      <OrderButton />
    </div>
  );
};

export default Sidebar;
