import { Table, TableCell, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const day1 = [
  {
    time: '4:00 - 7:00 PM IST',
    value: 'HackVerse 2.0 Launch Event',
  },
];

const day2 = [
  {
    time: '7:30 AM IST',
    value: 'Checkin Starts',
  },
  {
    time: '7:30 - 9:00 AM IST',
    value: 'Networking and Team Making',
  },
  {
    time: '9:00 - 12:00 PM IST',
    value: 'Hackathon Inagruation + Speaker Slot',
  },
  {
    time: '12:00 - 1:00 PM IST',
    value: 'Lunch',
  },
  {
    time: '1:00 PM IST',
    value: 'Hackathon Starts',
  },
  {
    time: '4:00 - 6:00 PM IST',
    value: 'Workshop + Tea Break',
  },
  {
    time: '9:30 - 10:30 PM IST',
    value: 'Dinner',
  },
  {
    time: '12:00 - 01:00 AM IST',
    value: 'Games and Fun Activities',
  },
];

const day3 = [
  {
    time: '8:00 - 9:00 AM IST',
    value: 'Networking + Breakfast',
  },
  {
    time: '9:00 - 10:00 AM IST',
    value: 'Workshop',
  },
  {
    time: '1:00 PM IST',
    value: 'Hackathon Ends',
  },
  {
    time: '1:00 - 2:00 PM IST',
    value: 'Lunch',
  },
  {
    time: '2:00 - 4:00 PM IST',
    value: 'Judging',
  },
  {
    time: '4:00 - 6:00 PM IST',
    value: 'Closing Ceremony',
  },
];

export default function Schedule() {
  return (
    <div className="w-screen max-w-6xl mx-auto px-5">
      <h1 className="text-center text-3xl font-bold py-5">Schedule</h1>
      <Tabs
        defaultValue="day-1"
        className="w-full bg-foreground/20 dark:bg-foreground/5 p-4 rounded-sm"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="day-1">27 Oct 2023</TabsTrigger>
          <TabsTrigger value="day-2">28 Oct 2023</TabsTrigger>
          <TabsTrigger value="day-3">29 Oct 2023</TabsTrigger>
        </TabsList>
        <TabsContent value="day-1">
          <div className="rounded-md border">
            <Table>
              {day1.map((item, index) => (
                <TableRowComponent
                  key={index}
                  time={item.time}
                  value={item.value}
                />
              ))}
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="day-2">
          <div className="rounded-md border">
            <Table>
              {day2.map((item, index) => (
                <TableRowComponent
                  key={index}
                  time={item.time}
                  value={item.value}
                />
              ))}
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="day-3">
          <div className="rounded-md border">
            <Table>
              {day3.map((item, index) => (
                <TableRowComponent
                  key={index}
                  time={item.time}
                  value={item.value}
                />
              ))}
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface TableRowProps {
  time: string;
  value: string;
}

export const TableRowComponent: React.FC<TableRowProps> = ({ time, value }) => {
  return (
    <TableRow className="hover:bg-transparent last:border-b-0">
      <TableCell className="text-base md:text-xl w-[35%] text-right">
        {time}
      </TableCell>
      <TableCell className="text-base md:text-xl w-[65%]">{value}</TableCell>
    </TableRow>
  );
};
