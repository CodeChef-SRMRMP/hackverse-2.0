import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

const FAQs = () => {
  return (
    <div className="pb-10 w-screen max-w-6xl mx-auto px-5">
      <h1 className="text-center text-3xl font-bold py-5">FAQs</h1>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How do I participate in a hackathon?
          </AccordionTrigger>
          <AccordionContent>
            To Participate in this hackathon, you need to register you team on
            devfolio, follow this link{' '}
            <Link
              href={'https://hackverse-tamil-nadu.devfolio.co/'}
              className="text-blue-500 hover:underline"
            >
              Devfolio
            </Link>{' '}
            to get registered
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Can I work alone in a hackathon, or do I need a team?
          </AccordionTrigger>
          <AccordionContent>
            You can work alone or in a team of up to 4 people. The maximum team
            size is 4.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I attend a hackathon remotely?
          </AccordionTrigger>
          <AccordionContent>
            This hackathon is happening in hybrid mode, so you can both attend
            it in offline or in online mode
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQs;
