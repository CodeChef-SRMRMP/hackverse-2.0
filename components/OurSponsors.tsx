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
  const titleSponsors: string[] = ["xdc.png"];

  const diamondSponsors: string[] = [];
  const goldenSponsors: string[] = [];

  const silverSponsors: string[] = ["devfolio.png", "solidity-scan.png"];
  const bronzeSponsors: string[] = [
    "filecoin.png",
    "polygon.png",
    "replit.png",
    "solana.png",
  ];
  const poweredBy: string[] = ["dimo.png"];
  return (
    <div className="w-screen snap-start min-h-[calc(100vh-100px)]">
      <h1 className="text-center text-3xl font-bold py-5">Our Sponsors</h1>
      <div className="max-w-6xl items-stretch justify-center mx-auto grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <MainCard
          imageFolder="titleSponsors"
          title="Title Sponsors"
          logos={titleSponsors}
        />
        <MainCard title="Diamond Sponsors" />
        <MainCard title="Golden Sponsors" />
        <MainCard
          imageFolder="silverSponsors"
          title="Silver Sponsors"
          logos={silverSponsors}
        />
        <MainCard
          imageFolder="bronzeSponsors"
          title="Bronze Sponsors"
          logos={bronzeSponsors}
        />
        <MainCard imageFolder="powered" title="Powered by" logos={poweredBy} />
      </div>
    </div>
  );
};

interface MainCardProps {
  title: string;
  logos?: string[];
  imageFolder?: string;
}

const MainCard = ({ title, logos, imageFolder }: MainCardProps) => {
  return (
    <Card className="bg-secondary">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardDescription className="grid grid-cols-3 items-center justify-center">
        {logos?.map((logo, index) => {
          return (
            <Image
              key={index}
              src={`/assets/images/${imageFolder}/${logo}`}
              width={100}
              height={100}
              alt="sponsor"
            />
          );
        })}
      </CardDescription>
      <CardFooter></CardFooter>
    </Card>
  );
};
