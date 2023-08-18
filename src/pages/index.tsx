import DragField from "@/Components/ui/DragField";
import DragTarget from "@/Components/ui/DragTarget";
import Head from "next/head";

const HomePage = () => {
  return (
    <div className="container mx-auto w-fit">
      <Head>
        <title>Module Drag and Drop</title>
        <meta
          name="Drag and Drop"
          content="This is a job task made by next-js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid xl:grid-cols-12 xl:gap-12 gap-4 my-12 ">
        <DragField />
        <DragTarget />
      </div>
    </div>
  );
};

export default HomePage;
