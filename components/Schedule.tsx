import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import { Tabs, TabsList } from "./ui/tabs";

const Schedule = () => {
  return (
    <div className="w-screen min-h-[calc(100vh-100px)] max-w-6xl mx-auto px-5">
      <h1 className="text-center text-3xl font-bold py-5">Schedule</h1>
      <div>
        <Tabs defaultValue="day-1" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="day-1">27 Oct 2023</TabsTrigger>
            <TabsTrigger value="day-2">28 Oct 2023</TabsTrigger>
            <TabsTrigger value="day-3">29 Oct 2023</TabsTrigger>
          </TabsList>
          <TabsContent value="day-1">Day 1</TabsContent>
          <TabsContent value="day-2">Day 2</TabsContent>
          <TabsContent value="day-3">Day 3</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Schedule;
