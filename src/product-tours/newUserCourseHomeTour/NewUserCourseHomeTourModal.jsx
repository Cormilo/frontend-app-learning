import React from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape, FormattedMessage } from '@edx/frontend-platform/i18n';
import {
  ActionRow, Button, MarketingModal, ModalDialog,
} from '@openedx/paragon';

import heroImage from './course_home_tour_modal_hero.png';
import messages from '../messages';

const NewUserCourseHomeTourModal = ({
  intl,
  isOpen,
  onDismiss,
  onStartTour,
}) => (
  ' '
);

NewUserCourseHomeTourModal.propTypes = {
  intl: intlShape.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onStartTour: PropTypes.func.isRequired,
};

export default injectIntl(NewUserCourseHomeTourModal);
