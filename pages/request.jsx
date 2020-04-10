import React, { useContext } from 'react';
import cmsContext from '../context/cms';
import { getCmsRecordFromKey } from '../utils/cms';
import Interweave from 'interweave';

const About = () => {
  const cms = useContext(cmsContext);
  const content = getCmsRecordFromKey('request_form', cms);

  return <section className="grid-container usa-section" id="share">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-8 usa-prose">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
          {content.title}
        </h2>
        <p>
          <section id="request_form">
            <iframe class="airtable-embed airtable-dynamic-height" src={`https://airtable.com/embed/${content.body_en}`} frameborder="0" onmousewheel="" width="100%" height="2316"></iframe>
          </section>
        </p>
      </div>
    </div>
  </section>
}

export default About;