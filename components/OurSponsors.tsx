import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const OurSponsors = () => {
  return (
    <div className="w-screen snap-start min-h-[calc(100vh-100px)]">
      <h1 className="text-center text-3xl font-bold py-5">Our Sponsors</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
    </div>
  );
};

const MainCard = () => {
  return (
    <Card className="bg-secondary">
      <CardHeader>
        <CardTitle>Title Sponsors</CardTitle>
      </CardHeader>
      <CardDescription className="grid grid-cols-3 items-center justify-center">
        <Image
          src="/assets/images/titleSponsors/XDC_LOGO.c59cc8ecc32ad3417d15.png"
          width={100}
          height={100}
          alt="sponsor"
        />
        <Image
          src="/assets/images/titleSponsors/XDC_LOGO.c59cc8ecc32ad3417d15.png"
          width={100}
          height={100}
          alt="sponsor"
        />
        <Image
          src="/assets/images/titleSponsors/XDC_LOGO.c59cc8ecc32ad3417d15.png"
          width={100}
          height={100}
          alt="sponsor"
        />
        <Image
          src="/assets/images/titleSponsors/XDC_LOGO.c59cc8ecc32ad3417d15.png"
          width={100}
          height={100}
          alt="sponsor"
        />
      </CardDescription>
      <CardFooter></CardFooter>
    </Card>
  );
};
