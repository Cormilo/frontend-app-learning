import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import {
  Icon, IconButton, OverlayTrigger, Popover,
} from '@openedx/paragon';
import { Blocked, InfoOutline } from '@openedx/paragon/icons';

import messages from '../messages';
import { useModel } from '../../../../generic/model-store';

const GradeSummaryHeader = ({ intl, allOfSomeAssignmentTypeIsLocked }) => {
  const {
    courseId,
  } = useSelector(state => state.courseHome);
  const {
    gradesFeatureIsFullyLocked,
  } = useModel('progress', courseId);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="row w-100 m-0 align-items-center">
      <h3 className="h4 mb-3 mr-1">Grade summary</h3>
      
      {!gradesFeatureIsFullyLocked && allOfSomeAssignmentTypeIsLocked && (
        <div className="mb-3 small ml-0 d-inline">
          <Icon className="mr-1 mt-1 d-inline-flex" style={{ height: '1rem', width: '1rem' }} src={Blocked} data-testid="blocked-icon" />
          {intl.formatMessage(messages.gradeSummaryLimitedAccessExplanation)}
        </div>
      )}
    </div>
  );
};

GradeSummaryHeader.propTypes = {
  intl: intlShape.isRequired,
  allOfSomeAssignmentTypeIsLocked: PropTypes.bool.isRequired,
};

export default injectIntl(GradeSummaryHeader);
