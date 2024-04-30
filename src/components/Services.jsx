import React from 'react'

const Services = () => {

    const offer = [
      {
        id: 1,
        title: "Airtime Top Up",
        desc: "We offer prompt sales of airtime from all services providers (MTN, GLO, AIRTEL & 9MOBILE), where our customers can get their airtime just with a few punches on their phones.",
      },
      {
        id: 2,
        title: "Internet Data Plans",
        desc: "We offer prompt sales of airtime from all services providers (MTN, GLO, AIRTEL & 9MOBILE), where our customers can get their airtime just with a few punches on their phones.",
      },
      {
        id: 3,
        title: "Cable TV Subscriptions",
        desc: "We offer prompt sales of airtime from all services providers (MTN, GLO, AIRTEL & 9MOBILE), where our customers can get their airtime just with a few punches on their phones.",
      },
      {
        id: 4,
        title: "Electricity Bill Payments",
        desc: "We offer prompt sales of airtime from all services providers (MTN, GLO, AIRTEL & 9MOBILE), where our customers can get their airtime just with a few punches on their phones.",
      },
      {
        id: 5,
        title: "Exam Pins",
        desc: "We offer prompt sales of airtime from all services providers (MTN, GLO, AIRTEL & 9MOBILE), where our customers can get their airtime just with a few punches on their phones.",
      },
     
    ];

  return (
    <>
      <div className='my-20'>
        <div className='text-center'>
          <h2 className="font-bold text-[50px] pt-8">Our Services</h2>
        </div>
        {/* grid items */}

        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto w-[95%] lg:w-[80%] py-20'>
            {
                offer.map((item) => (
                    <div className='bg-gray-100 rounded-md shadow-md ring-1 space-y-5 p-5 mb-5'>
                        <h2 className='text-center font-bold text-[30px]'>{item.title}</h2>
                        <p className='text-sm font-light'>{item.desc}</p>
                    </div>
                ))
            }
        </div>

      </div>
    </>
  );
}

export default Services