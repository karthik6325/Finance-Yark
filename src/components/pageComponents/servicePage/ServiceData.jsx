import React from 'react';
import { Link } from 'react-router-dom'; 
import ServiceData from './ServiceCard';
import { FaHandHoldingUsd, FaPiggyBank, FaShieldAlt, FaHeartbeat, FaCarAlt, FaUserTie, FaBuilding, FaFileContract, FaLock, FaCreditCard } from "react-icons/fa";

const ServiceCard = () => {
  return (
    <div className="p-20 relative flex-col justify-center overflow-hidden bg-gray-50">
        <section id="features">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading font-bold p-20 text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Services</h2>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                <Link to="/services/portfolio-management">
                <ServiceData title="Portfolio Management" Icon={FaHandHoldingUsd} />
                </Link>
                <Link to="/services/mutual-funds">
                    <ServiceData title="Mutual Funds" Icon={FaPiggyBank} />
                </Link>
                <Link to="/services/life-insurance">
                    <ServiceData title="Life Insurance" Icon={FaShieldAlt} />
                </Link>
                <Link to="/services/health-insurance">
                    <ServiceData title="Health Insurance" Icon={FaHeartbeat} />
                </Link>
                <Link to="/services/motor-insurance">
                    <ServiceData title="Motor Insurance" Icon={FaCarAlt} />
                </Link>
                <Link to="/services/personal-loans">
                    <ServiceData title="Personal Loans" Icon={FaUserTie} />
                </Link>
                <Link to="/services/business-loans">
                    <ServiceData title="Business Loans" Icon={FaBuilding} />
                </Link>
                <Link to="/services/bond-investments">
                    <ServiceData title="Bond Investments" Icon={FaFileContract} />
                </Link>
                <Link to="/services/fixed-deposits">
                    <ServiceData title="Fixed Deposits" Icon={FaLock} />
                </Link>
                <Link to="/services/credit-cards">
                    <ServiceData title="Credit Cards" Icon={FaCreditCard} />
                </Link>
            </div>
        </section>
    </div>
  );
};

export default ServiceCard;
