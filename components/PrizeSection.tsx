import React from 'react';
import Image, { StaticImageData } from 'next/image';
import FirstPrize from 'public/assets/images/prizes/1stPrize.svg';
import SecondPrize from 'public/assets/images/prizes/2ndPrize.svg';
import ThirdPrize from 'public/assets/images/prizes/3rdPrize.svg';
import { Card, CardHeader, CardTitle } from './ui/card';

const PrizeSection: React.FC = () => {
  return (
    <div id="prize" className="w-screen py-10 max-w-6xl mx-auto px-5">
      <h1 className="text-center text-3xl font-bold py-5">Prize</h1>
      <div className="bg-secondary text-2xl animate-pulse rounded-md w-full flex flex-col md:flex-row justify-center font-bold md:text-4xl items-center md:items-end gap-[1rem] md:gap-0">
        <div className="md:hidden">
          <PrizeCard imageSrc={FirstPrize} prizeAmount="₹ 20,000" />
        </div>

        <PrizeCard imageSrc={SecondPrize} prizeAmount="₹ 10,000" />
        <div className="hidden md:block">
          <PrizeCard imageSrc={FirstPrize} prizeAmount="₹ 20,000" />
        </div>
        <PrizeCard imageSrc={ThirdPrize} prizeAmount="₹ 5,000" />
      </div>
    </div>
  );
};

export default PrizeSection;

interface PrizeCardProps {
  imageSrc: StaticImageData;
  prizeAmount: string;
}

const PrizeCard: React.FC<PrizeCardProps> = ({ imageSrc, prizeAmount }) => {
  return (
    <Card className="bg-transparent max-w-sm">
      <Image
        src={imageSrc}
        alt="Prize"
        className={`object-fit object-center ${
          FirstPrize == imageSrc ? 'w-[100%]' : 'w-[75%]'
        } mx-auto`}
      />
      <CardHeader>
        <CardTitle className="text-center text-[3rem]">{prizeAmount}</CardTitle>
      </CardHeader>
    </Card>
  );
};
