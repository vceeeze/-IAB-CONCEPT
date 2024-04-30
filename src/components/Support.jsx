import React from 'react'

const Support = () => {

    const quest = [
      {
        question: "Is there a free trail available?",
        answer:
          "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
      }, {
        question: "Is there a free trail available?",
        answer:
          "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
      },
      {
        question: "Can i change my plan later",
        answer:
          "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.",
      }, {
        question: "Can i change my plan later",
        answer:
          "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.",
      },
    ];

  return (
    <>
      <div className='py-[60px]'>
        <div>
          <h5 className="text-[40px] font-bold text-center">
            Frequently Asked Questions
          </h5>
          <p className='text-center'>Quick answers to questions you may have.Can't find what you're looking for? Contact us.</p>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2  gap-10 mx-auto w-[95%] lg:w-[80%] py-20'>
            {
                quest.map((item) => (
                    <div>
                        <p className='font-semibold text-[21px]'>{item.question}</p>
                        <p>{item.answer}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  );
}

export default Support