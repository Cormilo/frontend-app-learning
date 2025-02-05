import React from 'react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';

import CompletionDonutChart from './CompletionDonutChart';
import messages from './messages';

const CourseCompletion = ({ intl }) => (
  <section className="text-dark-700 mb-4 rounded raised-card p-4">
    <div className="row w-100 m-0">
      <div className="col-12 col-sm-6 col-md-7 p-0">
        <h2>Course completion</h2>
        <p className="small">
        This represents how much of the course content you have completed. Note that some content may not yet be released.
        </p>
      </div>
      <div className="col-12 col-sm-6 col-md-5 mt-sm-n3 p-0 text-center">
        <CompletionDonutChart />
      </div>
    </div>
  </section>
);

CourseCompletion.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(CourseCompletion);
