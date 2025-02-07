import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { FormattedMessage, injectIntl, intlShape } from '@edx/frontend-platform/i18n';

import messages from '../messages';
import { useModel } from '../../../../generic/model-store';

const DroppableAssignmentFootnote = ({ footnotes, intl }) => {
  const {
    courseId,
  } = useSelector(state => state.courseHome);
  const {
    gradesFeatureIsFullyLocked,
  } = useModel('progress', courseId);
  return (
    <>
      <span id="grade-summary-footnote-label" className="sr-only">{intl.formatMessage(messages.footnotesTitle)}</span>
      
    </>
  );
};

DroppableAssignmentFootnote.propTypes = {
  footnotes: PropTypes.arrayOf(PropTypes.shape({
    assignmentType: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    numDroppable: PropTypes.number.isRequired,
  })).isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(DroppableAssignmentFootnote);
