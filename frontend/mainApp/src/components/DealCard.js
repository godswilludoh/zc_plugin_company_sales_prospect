import React, { Fragment, useState } from 'react';

import { Calendar } from 'react-feather';
import EditDeals from './EditDeals';
import DealsOptions from './DealOptions';

const stages = {
  Negotiation: 'border-green',
  Prospect: 'border-error',
  Closed: 'border-secondary',
  Proposal: 'border-pink',
};

const DealCard = ({ deal }) => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);

  const handleCloseModal = () => {
    setOpen(false);
    // setOpen2(false);
  };

  return (
    <>
      {deals.map((item, index) => {
        const { deal_stage, name, _id, deal, description, amount, close_date } =
          item;
        return (
          <Draggable key={id} draggableId={id} index={index}>
            {(provided) => {
              <div
                className='characters'
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <div
                  className={`cursor-pointer w-64 mb-4 px-4 py-3 rounded shadow-lg border-t-2 ${stages[deal_stage]}`}
                >
                  <EditDeals open={open} handleCloseModal={handleCloseModal} />
                  <div className='flex justify-between items-center'>
                    <span className='font-bold text-lg mt-2 text-gray-700'>
                      {name}
                    </span>
                    <DealsOptions
                      handleOpenModal={handleOpenModal}
                      handleCloseModal={handleCloseModal}
                      handleCloseDeleteModal={handleCloseModal}
                      id={_id}
                      deal={deal}
                    />
                  </div>
                  <div>
                    <p className='text-gray-500'>{description}</p>
                    <p className='text-green font-bold mt-3'>${amount}</p>
                    <p className='flex text-gray-400 pt-2'>
                      <Calendar className='mr-2' /> {close_date}
                    </p>
                  </div>
                </div>
              </div>;
            }}
          </Draggable>
        );
      })}
    </>
  );
};

export default DealCard;
