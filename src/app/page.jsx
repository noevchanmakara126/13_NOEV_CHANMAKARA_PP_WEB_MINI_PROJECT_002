import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import ContenetCardComponent from "@/components/ContenetCardComponent";

export default function Home() {
  return (
    <div className=" w-full m-auto ">
      <BreadcrumbComponent link1="Home" link2="Todo" link3="Home" />
      <div className="flex flex-col  gap-4 ">
        <ContenetCardComponent />
        <ContenetCardComponent />
        <ContenetCardComponent />
      </div>
    </div>
  );
}
