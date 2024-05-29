import React from 'react';
import ServiceData from './ServiceCard';
import { FaHandHoldingUsd } from "react-icons/fa";

const ServiceCard = () => {
  return (
    <div class="p-20 relative flex-col justify-center overflow-hidden bg-gray-50">
        <section id="features">
            <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 class="font-heading font-bold p-20 text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Services</h2>
            </div>
            <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                <ServiceData title="Portfolio Management" Icon={FaHandHoldingUsd}/>
                <ServiceData title="Mutual Funds" Icon={FaHandHoldingUsd}/>
                <ServiceData title="Life Insurance" Icon={FaHandHoldingUsd}/>
                <ServiceData title="Health Insurance" Icon={FaHandHoldingUsd}/>
                <ServiceData title="Motor Insurance" Icon={FaHandHoldingUsd}/>
                <ServiceData title="Personal Loans" Icon={FaHandHoldingUsd}/>
                <ServiceData title="Business Loans" Icon={FaHandHoldingUsd}/>
                <ServiceData title="Bond Investments" Icon={FaHandHoldingUsd}/>
                <ServiceData title="Fixed Deposits" Icon={FaHandHoldingUsd}/>
                <ServiceData title="Credit Cards" Icon={FaHandHoldingUsd}/>
                <ServiceData title="ETF's" Icon={FaHandHoldingUsd}/>
                <ServiceData title="Fire Insurance" Icon={FaHandHoldingUsd}/>
                <ServiceData title="Marine Insurance" Icon={FaHandHoldingUsd}/>
                <ServiceData title="Loan against Mutual Funds" Icon={FaHandHoldingUsd}/>
            </div>
        </section>
    </div>
  );
};

export default ServiceCard;
