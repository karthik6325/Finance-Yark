import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import ServiceData from './ServiceCard';
import { FaHandHoldingUsd } from "react-icons/fa";

const ServiceCard = () => {
  return (
    <div className="p-20 relative flex-col justify-center overflow-hidden bg-gray-50">
        <section id="features">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading font-bold p-20 text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Services</h2>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                {/* Wrap each ServiceData component with Link */}
                <Link to="/contact">
                    <ServiceData title="Portfolio Management" Icon={FaHandHoldingUsd}/>
                </Link>
                <Link to="/contact">
                    <ServiceData title="Mutual Funds" Icon={FaHandHoldingUsd}/>
                </Link>
                <Link to="/contact">
                    <ServiceData title="Life Insurance" Icon={FaHandHoldingUsd}/>
                </Link>
                <Link to="/contact">
                    <ServiceData title="Health Insurance" Icon={FaHandHoldingUsd}/>
                </Link>
                <Link to="/contact">
                    <ServiceData title="Motor Insurance" Icon={FaHandHoldingUsd}/>
                </Link>
                <Link to="/contact">
                    <ServiceData title="Personal Loans" Icon={FaHandHoldingUsd}/>
                </Link>
                <Link to="/contact">
                    <ServiceData title="Business Loans" Icon={FaHandHoldingUsd}/>
                </Link>
                <Link to="/contact">
                    <ServiceData title="Bond Investments" Icon={FaHandHoldingUsd}/>
                </Link>
                <Link to="/contact">
                    <ServiceData title="Fixed Deposits" Icon={FaHandHoldingUsd}/>
                </Link>
                <Link to="/contact">
                    <ServiceData title="Credit Cards" Icon={FaHandHoldingUsd}/>
                </Link>
                <Link to="/contact">
                    <ServiceData title="ETF's" Icon={FaHandHoldingUsd}/>
                </Link>
                <Link to="/contact">
                    <ServiceData title="Fire Insurance" Icon={FaHandHoldingUsd}/>
                </Link>
                <Link to="/contact">
                    <ServiceData title="Marine Insurance" Icon={FaHandHoldingUsd}/>
                </Link>
                <Link to="/contact">
                    <ServiceData title="Loan against Mutual Funds" Icon={FaHandHoldingUsd}/>
                </Link>
            </div>
        </section>
    </div>
  );
};

export default ServiceCard;
