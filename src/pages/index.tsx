import DragField from "@/Components/ui/DragField";
import DragTarget from "@/Components/ui/DragTarget";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid xl:grid-cols-12 xl:gap-12 gap-4 mt-12">
        <DragField />
        <DragTarget />
      </div>
    </div>
  );
};

export default HomePage;
