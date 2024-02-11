import React from 'react';
import {cardData} from "@/lib/data";
import Card from "@/components/elements/Card";
import Button from "@/components/elements/Button";

function PopularSection() {
  return (
    <section className="mx-auto">
      <div className="mt-10 flex flex-col items-center justify-center gap-5 text-center">
        <h1 className="text-5xl font-HelveticaBold dark:text-gray-300">The unlimited creative subscription</h1>
        <h3 className="font-HelveticaMedium text-gray-500">Unlimited downloads of 17+ million creative assets. From
          just $16.50 month</h3>
      </div>
      <div
        className="flex flex-wrap justify-center lg:w-[800px] gap-4 mt-14 mb-8">
        {cardData.map((card, index) => {
          if (index < 6) {
            return (
              <Card key={index} title={card.title} image={card.image} href={card.href} date={card.date}
                    category={card.category}/>
            )
          }
        })}
      </div>
      <div className="flex justify-center items-center">
        <Button className="w-64">See more</Button>
      </div>
    </section>
  );
}

export default PopularSection;