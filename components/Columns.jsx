import React, { useContext } from 'react';
import { CMSContext } from '../context/cms';
import Button from '@/components/Button';


const Columns = ({ block }) => {
  let { state, dispatch } = useContext(CMSContext);

  const columns = state.records.filter(record => {
    return record.tag?.includes(block.key) && record.type == "column" && record.enabled;
  });


  return <section className="grid-container usa-section">
    <div className="grid-row grid-gap">
      {
        columns.map((column) => {
          return <div className="tablet:grid-col">
            {column.image && <img src={column.image} />}
            {column.title && <h3 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
              {column.title}
            </h3>}
            {column.body_markdown && <div>
              {column.body_markdown}
            </div>}
          </div>
        })
      }
    </div>
  </section>
}


export default Columns;