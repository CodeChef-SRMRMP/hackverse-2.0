import { Card } from './ui/card';
import Image, { StaticImageData } from 'next/image';
import fileCoinLogo from '@/public/assets/images/bronzeSponsors/filecoin.png';
import polygonLogo from '@/public/assets/images/bronzeSponsors/polygon.png';
import replitLogo from '@/public/assets/images/bronzeSponsors/replit.png';

const data = [
  fileCoinLogo,
  polygonLogo,
  replitLogo,
  fileCoinLogo,
  polygonLogo,
  replitLogo,
  fileCoinLogo,
  polygonLogo,
  replitLogo,
];

interface CommunityPartnersProps {}

const CommunityPartners: React.FC<CommunityPartnersProps> = () => {
  return (
    <div id="communitypartner" className="w-screen max-w-6xl mx-auto px-5 pb-5">
      <h1 className="text-center text-3xl font-bold py-5">
        Community Partners
      </h1>
      <Card className="w-full h-[160px] overflow-hidden flex gap-[1rem] bg-secondary">
        <div className="flex h-[160px] flex-shrink-0 items-center justify-around whitespace-nowrap  animate-fade-out1 gap-[1rem] ">
          {data.map((item, index) => (
            <ImageCard imgUrl={item} key={index} />
          ))}
        </div>
        <div className="flex h-[160px] flex-shrink-0 items-center justify-around whitespace-nowrap  animate-fade-out2 gap-[1rem]">
          {data.map((item, index) => (
            <ImageCard imgUrl={item} key={index} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CommunityPartners;

interface ImageCardProps {
  imgUrl: StaticImageData;
}

const ImageCard: React.FC<ImageCardProps> = ({ imgUrl }) => {
  return (
    <Card className="border-0 bg-transparent">
      <Image
        src={imgUrl}
        alt="Image"
        className="rounded-md object-fit object-center h-[160px] w-[160px]"
        width={160}
        height={160}
      />
    </Card>
  );
};
