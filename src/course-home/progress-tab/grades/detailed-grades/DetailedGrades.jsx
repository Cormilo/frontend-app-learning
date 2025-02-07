import React from 'react';
import { useSelector } from 'react-redux';

import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { FormattedMessage, injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Blocked } from '@openedx/paragon/icons';
import { Icon, Hyperlink } from '@openedx/paragon';
import { useModel } from '../../../../generic/model-store';

import DetailedGradesTable from './DetailedGradesTable';

import messages from '../messages';

const DetailedGrades = ({ intl }) => {
  const { administrator } = getAuthenticatedUser();
  const {
    courseId,
  } = useSelector(state => state.courseHome);
  const {
    org,
    tabs,
  } = useModel('courseHomeMeta', courseId);
  const {
    gradesFeatureIsFullyLocked,
    gradesFeatureIsPartiallyLocked,
    sectionScores,
  } = useModel('progress', courseId);

  const hasSectionScores = sectionScores.length > 0;

  const logOutlineLinkClick = () => {
    sendTrackEvent('edx.ui.lms.course_progress.detailed_grades.course_outline_link.clicked', {
      org_key: org,
      courserun_key: courseId,
      is_staff: administrator,
    });
  };

  const overviewTab = tabs.find(tab => tab.slug === 'outline');
  const overviewTabUrl = overviewTab && overviewTab.url;

  const outlineLink = overviewTabUrl && (
    <Hyperlink
      variant="muted"
      isInline
      destination={overviewTabUrl}
      onClick={logOutlineLinkClick}
      tabIndex={gradesFeatureIsFullyLocked ? '-1' : '0'}
    >
      {intl.formatMessage(messages.courseOutline)}
    </Hyperlink>
  );

  return (
    ''
  );
};

DetailedGrades.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(DetailedGrades);
