import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

const serviceData = {
    healthInsurance: {
      title: "Why Health Insurance is Important",
      importance: [
        "Cover unexpected medical expenses",
        "Reduce financial stress and anxiety",
        "Access quality medical care and treatment",
        "Protect your savings and assets",
      ],
      types: [
        "Individual Health Insurance: Covers a single person",
        "Family Floater Health Insurance: Covers multiple family members under one policy",
        "Group Health Insurance: Covers a group of people, often offered by employers",
        "Senior Citizen Health Insurance: Designed for individuals above 60 years",
      ],
      keyPoints: [
        "Modern Treatment Coverage: Ensure the policy covers modern treatments and technologies",
        "100% Coverage on ICU and Rooms: Opt for policies with no deductibles or co-payments for ICU and room rent",
        "Renewal Discounts on Wellness: Look for policies offering discounts for maintaining a healthy lifestyle",
        "Free Yearly Health Check-ups: Choose policies that include free annual health check-ups",
        "Standard No Claim Bonus: Ensure the policy offers a no claim bonus for each claim-free year",
        "Pre-existing Disease Coverage: Check if the policy covers pre-existing diseases and after what waiting period",
        "Network Hospitals and Cashless Claims: Ensure the policy has a wide network of hospitals and offers cashless claims",
        "Sub-limits and Co-payments: Understand any sub-limits or co-payments applicable to specific treatments or expenses",
        "Policy Term and Renewability: Check the policy term and renewability options",
        "Premium Costs and Tax Benefits: Compare premium costs and tax benefits under Section 80D",
      ],
      additionalFeatures: [
        "Critical Illness Cover: Additional coverage for critical illnesses like cancer, heart attack, or stroke",
        "Personal Accident Cover: Additional coverage for accidental injuries or death",
        "Maternity Cover: Coverage for pregnancy-related expenses",
        "OPD Cover: Coverage for outpatient department expenses",
      ],
    },
    motorInsurance: {
      title: "Why Motor Insurance is Important",
      importance: [
        "Cover unexpected expenses due to accidents or theft",
        "Reduce financial stress and anxiety",
        "Protect your vehicle's value",
        "Comply with legal requirements",
      ],
      types: [
        "Third-Party Insurance: Covers damages or injuries to others",
        "Comprehensive Insurance: Covers damages or losses to your vehicle and third-party liabilities",
        "Own Damage Insurance: Covers damages or losses to your vehicle only",
      ],
      keyPoints: [
        "IDV (Insured Declared Value): Ensure the IDV is accurate to avoid under-insurance",
        "Coverage for Accessories: Check if the policy covers vehicle accessories",
        "No Claim Bonus (NCB): Understand the NCB structure and its benefits",
        "Deductibles and Co-payments: Understand any deductibles or co-payments applicable",
        "Additional Benefits: Look for extra benefits like roadside assistance, towing, and ambulance cover",
      ],
      additionalFeatures: [
        "Zero Depreciation Cover: Covers depreciation on vehicle parts",
        "Engine and Gearbox Protection: Covers engine and gearbox damages",
        "Tyre and Rim Protection: Covers tyre and rim damages",
        "Key Replacement Cover: Covers replacement of lost or stolen keys",
        "Personal Accident Cover: Covers injuries or death of the driver or passengers",
        "Passenger Assistance Cover: Covers medical expenses for passengers",
        "Roadside Assistance Cover: Covers towing, fuel, and other roadside expenses",
        "Anti-theft Device Discount: Discounts for installing anti-theft devices",
        "Voluntary Deductible Discount: Discounts for choosing a higher deductible",
        "Loyalty Discount: Discounts for renewing policies with the same insurer",
      ],
    },
    lifeInsurance: {
      title: "Why Life Insurance is Important",
      importance: [
        "Ensure financial stability for your family",
        "Pay off outstanding debts and loans",
        "Cover funeral expenses",
        "Provide for your children's education",
        "Supplement retirement income"
      ],
      types: [
        "Term Life Insurance: Provides coverage for a specified term",
        "Whole Life Insurance: Lifelong coverage with cash value accumulation",
        "Endowment Life Insurance: Combines insurance and savings",
        "Unit Linked Insurance Plan (ULIP): Investment-linked insurance",
        "Money Back Life Insurance: Periodic payouts with life coverage"
      ],
      keyPoints: [
        "Sum Assured: Ensure adequate coverage for your family's needs",
        "Premium Payment Term: Choose a manageable premium payment term",
        "Policy Term: Select a policy term that aligns with your needs",
        "Riders and Add-ons: Consider additional benefits like critical illness or disability cover",
        "Claim Settlement Ratio: Check the insurer's claim settlement ratio"
      ],
      additionalFeatures: [
        "Critical Illness Rider: Covers critical illnesses like cancer or heart attack",
        "Accidental Death Benefit Rider: Enhances death benefit in case of accidental death",
        "Waiver of Premium Rider: Waives premiums in case of disability or critical illness",
        "Income Benefit Rider: Provides regular income to your family",
        "Funeral Expense Benefit: Covers funeral expenses",
        "Tax Benefits: Enjoy tax deductions on premiums paid",
        "Loyalty Additions: Additional benefits for long-term policyholders",
        "Guaranteed Returns: Fixed returns on investment-linked plans"
      ],
      reminders: [
        "Assess your life insurance needs",
        "Compare policies and premiums",
        "Read policy terms and conditions carefully",
        "Ask about any additional benefits or discounts",
        "Ensure accurate medical and personal details"
      ],
    },
    portfolioManagement: {
      title: "YARK Finance Portfolio Management Services",
      importance: [
        "Comprehensive management of investment portfolios",
        "Personalized investment solutions tailored to unique needs",
        "Expert guidance from experienced professionals",
      ],
      services: [
        "Investment Advisory: Expert guidance on investment strategies and asset allocation.",
        "Portfolio Construction: Customized portfolio creation based on client goals and risk profile.",
        "Asset Management: Ongoing monitoring and rebalancing of portfolios to ensure alignment with client objectives.",
        "Risk Management: Identification and mitigation of potential risks to protect client investments.",
        "Performance Reporting: Regular updates on portfolio performance and progress towards goals.",
        "Tax Optimization: Strategies to minimize tax liabilities and maximize after-tax returns.",
        "Estate Planning: Guidance on wealth transfer and succession planning.",
      ],
      clientSegments: [
        "Individuals: High net worth individuals, professionals, and business owners.",
        "Institutions: Corporates, trusts, and non-profit organizations.",
        "Family Offices: Multi-generational wealth management solutions.",
      ],
      minimumInvestment: "₹50 Lakhs",
    },
    mutualFunds: {
      title: "Mutual Funds: A Powerful Investment Tool",
      importance: [
        "Convenient and accessible investment option",
        "Diversification to reduce exposure to risks",
        "Professional management of investments",
        "Liquidity for easy buying and selling of units",
        "Wide range of fund options catering to different goals",
      ],
      benefits: [
        "Long-term wealth creation by leveraging India's growth",
        "Inflation protection to preserve purchasing power",
        "Support for retirement planning with steady income streams",
        "Promotion of financial inclusion and awareness",
        "Tax efficiency through optimized liabilities",
      ],
      types: [
        "Equity Funds: Invest in stocks for long-term growth.",
        "Debt Funds: Invest in bonds for stable returns.",
        "Hybrid Funds: Combine equity and debt investments.",
        "Index Funds: Track a market index for passive investing.",
        "Sectoral Funds: Focused investments in specific industries.",
        "Tax-Saving Funds (ELSS): Provide tax benefits while investing in equities.",
        "Money Market Funds: Invest in short-term debt for liquidity.",
        "International Funds: Diversify into global markets.",
      ],
      ageGroups: [
        "Young Investors (20s-30s): Equity and Hybrid Funds for long-term growth.",
        "Middle-Aged Investors (40s-50s): Balanced Hybrid and Debt Funds for stability.",
        "Senior Investors (60s+): Debt and Money Market Funds for low risk.",
      ],
      additionalTips: [
        "Book profits and reinvest for faster wealth growth.",
        "Start early with minimal investments and increase over time.",
        "Choose wisely between SIP and lumpsum investments.",
        "Watch for exit loads and plan entry/exit strategies carefully.",
      ],
    },
    bondInvestments: {
      title: "Bond Investments in India",
      importance: [
        "Regular income through interest payments",
        "Lower risk compared to equities",
        "Diversification of investment portfolios",
        "Liquidity for easy sale on exchanges",
        "Potential tax benefits on some bonds",
      ],
      types: [
        "Government Bonds (G-Secs): Risk-free bonds issued by the government.",
        "Corporate Bonds: Higher returns with increased risk from companies.",
        "Tax-Free Bonds: Tax-exempt returns from government-backed entities.",
        "Municipal Bonds: Fund local infrastructure projects.",
        "Convertible Bonds: Potential for capital appreciation through equity conversion.",
        "Debentures: Long-term corporate bonds with higher interest rates.",
        "Zero-Coupon Bonds: Discounted bonds with no interest payments.",
        "Inflation-Indexed Bonds: Returns adjusted for inflation.",
      ],
      additionalFeatures: [
        "Personalized investment advice from YARK Finance experts",
        "Regular updates on market trends and bond performance",
        "Diverse bond options to align with financial goals",
      ],
    },
    fixedDeposits: {
      title: "Fixed Deposits: A Safe and Stable Investment Option",
      importance: [
        "High safety with insurance up to ₹5 lakhs",
        "Predictable returns with fixed interest rates",
        "Low risk, ideal for conservative investors",
        "Liquidity with penalties for early withdrawal",
        "Tax benefits under Section 80C",
      ],
      types: [
        "Traditional FDs: Fixed interest rate for a specified term.",
        "Flexi FDs: Allow withdrawals and additional deposits.",
        "Tax-Saver FDs: Offer tax benefits under Section 80C.",
        "Senior Citizen FDs: Higher interest rates for senior citizens.",
        "NRI FDs: Higher interest rates for Non-Resident Indians.",
      ],
      privateInstitutionFDs: [
        "Competitive rates from RBI-registered private institutions",
        "Better returns compared to traditional bank FDs",
      ],
      additionalFeatures: [
        "Personalized investment advice and portfolio management",
        "Comparison of interest rates across banks and institutions",
      ],
    },
    alternativeInvestmentFunds: {
      title: "Alternative Investment Funds (AIFs) in India",
      importance: [
        "Diversification across non-traditional asset classes",
        "High growth potential in emerging sectors",
        "Professional management with experienced fund managers",
        "Regulatory oversight for transparency and protection",
      ],
      minimumInvestment: "Typically ₹1 crore, with some options for ₹10 lakhs monthly drawdown.",
      types: [
        "Category I: Invest in socially desirable sectors like startups and SMEs.",
        "Category II: Private equity and debt funds for unlisted companies.",
        "Category III: Hedge funds with complex trading strategies.",
      ],
      additionalFeatures: [
        "Access to high-growth sectors and sophisticated strategies",
        "Expert management and tailored investment solutions",
      ],
    },
    personalLoans: {
      title: "Why Personal Loans are Important",
      importance: [
        "Flexibility for various personal expenses",
        "Quick access to funds during emergencies",
        "Fixed interest rates for consistent monthly payments",
        "No collateral required, reducing asset risk",
        "Opportunity to improve credit score with timely repayments",
      ],
      types: [
        "Unsecured Personal Loans: No collateral needed, available for various purposes",
        "Secured Personal Loans: Require collateral but may offer lower rates",
        "Debt Consolidation Loans: Combine multiple debts into a single loan",
        "Home Improvement Loans: Specifically for financing renovations",
      ],
      keyPoints: [
        "Emergency Expenses: Ideal for unexpected costs like medical bills or car repairs",
        "Debt Consolidation: Lower interest payments by consolidating high-interest debts",
        "Home Improvements: Potential to increase property value",
        "Education Financing: Invest in skills and education for better career prospects",
        "Funding Major Life Events: Cover significant expenses like weddings or vacations",
      ],
      additionalFeatures: [
        "Competitive interest rates based on credit profile",
        "Flexible repayment terms to suit individual needs",
        "Streamlined application process with quick approvals",
        "Personalized guidance from financial experts at YARK Finance",
      ],
    },
    creditCards: {
      title: "Importance of Credit Cards",
      importance: [
        "Builds credit score for future loans and rentals",
        "Convenient for online and offline purchases",
        "Offers rewards such as cashback and travel points",
        "Provides better fraud protection than debit cards",
        "Acts as an emergency backup for funds",
      ],
      types: [
        "Rewards Credit Cards: Earn points or cashback on purchases",
        "Travel Credit Cards: Benefits like travel insurance and discounts",
        "Secured Credit Cards: Require a cash deposit as collateral",
        "Student Credit Cards: Designed for young adults building credit history",
      ],
      keyPoints: [
        "Pay Your Balance in Full: Avoid interest charges and maintain a good credit score",
        "Track Spending: Use tools to monitor your expenses and stay within budget",
        "Set Up Alerts: Keep track of payment due dates and spending limits",
        "Understand Terms: Know your card’s interest rates, fees, and benefits",
        "Limit Number of Cards: Maintain only a few cards for easier management",
      ],
      additionalFeatures: [
        "Access to exclusive offers and discounts",
        "Fraud liability protection in case of unauthorized use",
        "Online account management tools for tracking expenses",
        "Personalized assistance in choosing the right credit card from YARK Finance",
      ],
    },
  };
    

  const mapServiceToKey = (service) => {
    switch (service) {
      case 'health-insurance':
        return 'healthInsurance';
      case 'life-insurance':
        return 'lifeInsurance';
      case 'motor-insurance':
        return 'motorInsurance';
      case 'portfolio-management':
        return 'portfolioManagement';
      case 'mutual-funds':
        return 'mutualFunds';
      case 'bond-investments':
        return 'bondInvestments';
      case 'fixed-deposits':
        return 'fixedDeposits';
      case 'personal-loans':
        return 'personalLoans';
      case 'credit-cards':
        return 'creditCards';
      default:
        return null; 
    }
  };
  
  const ServiceDetails = () => {
    const { service } = useParams();
    const serviceKey = mapServiceToKey(service); 
    const selectedService = serviceData[serviceKey] || {};
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [service]);

    if (!selectedService.title) {
      return <div className="text-center bg-white min-h-screen">Service not found.</div>; 
    }
    
    return (
      <div className="bg-white min-h-screen p-6 pt-17">
        <h6 className="text-xl mt-10 font-bold mb-8 text-center leading-[1.1] sm:text-3xl md:text-5xl text-gray-800 animate-fadeIn">{selectedService.title}</h6>
        
        {selectedService.importance && (
          <>
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-center text-gray-700 animate-fadeIn">Importance:</h3>
            <ul className="list-disc list-inside mb-6 text-left pl-6 max-w-xl mx-auto animate-fadeIn">
              {selectedService.importance.map((item, index) => (
                <li key={index} className="text-left">{item}</li>
              ))}
            </ul>
          </>
        )}
  
        {selectedService.types && (
          <>
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-center text-gray-700 animate-fadeIn">Types:</h3>
            <ul className="list-disc list-inside mb-6 text-left pl-6 max-w-xl mx-auto animate-fadeIn">
              {selectedService.types.map((item, index) => {
                const [title, description] = item.split(':');
                return (
                  <li key={index} className="text-left">
                    <strong>{title}:</strong> {description}
                  </li>
                );
              })}
            </ul>
          </>
        )}
  
        {selectedService.keyPoints && (
          <>
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-center text-gray-700 animate-fadeIn">Key Points to Consider:</h3>
            <ul className="list-disc list-inside mb-6 text-left pl-6 max-w-xl mx-auto animate-fadeIn">
              {selectedService.keyPoints.map((item, index) => {
                const [title, description] = item.split(':');
                return (
                  <li key={index} className="text-left">
                    <strong>{title}:</strong> {description}
                  </li>
                );
              })}
            </ul>
          </>
        )}
  
        {selectedService.additionalFeatures && (
          <>
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-center text-gray-700 animate-fadeIn">Additional Features:</h3>
            <ul className="list-disc list-inside mb-6 text-left pl-6 max-w-xl mx-auto animate-fadeIn">
              {selectedService.additionalFeatures.map((item, index) => {
                const [title, description] = item.split(':');
                return (
                  <li key={index} className="text-left">
                    <strong>{title}:</strong> {description}
                  </li>
                );
              })}
            </ul>
          </>
        )}
  
        {selectedService.clientSegments && (
          <>
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-center text-gray-700 animate-fadeIn">Client Segments:</h3>
            <ul className="list-disc list-inside mb-6 text-left pl-6 max-w-xl mx-auto animate-fadeIn">
              {selectedService.clientSegments.map((item, index) => {
                const [title, description] = item.split(':');
                return (
                  <li key={index} className="text-left">
                    <strong>{title}:</strong> {description}
                  </li>
                );
              })}
            </ul>
          </>
        )}
  
        {selectedService.minimumInvestment && (
          <p className="mt-6 text-center animate-fadeIn">
            <span className="font-semibold">Minimum Investment:</span> {selectedService.minimumInvestment}
          </p>
        )}
  
        {selectedService.minimumTenureAndInvestment && (
          <>
            <p className="mt-6 text-center animate-fadeIn">
              <span className="font-semibold">Minimum Tenure:</span> {selectedService.minimumTenureAndInvestment.minimumTenure}
            </p>
            <p className="mt-6 text-center animate-fadeIn">
              <span className="font-semibold">Minimum Investment:</span> {selectedService.minimumTenureAndInvestment.minimumInvestment}
            </p>
          </>
        )}
  
        <p className="mt-8 text-center animate-fadeIn">
          Remember, it's essential to carefully evaluate your needs and compare policies before making a decision.
        </p>
        <p className="font-bold mt-4 text-center animate-fadeIn">
          Call us - our financial planners help you with personalized guidance.
        </p>
      </div>
    );
  };
  
  export default ServiceDetails;
  