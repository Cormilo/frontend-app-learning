import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import classNames from 'classnames';

import messages from './messages';
import Tabs from '../generic/tabs/Tabs';
import { CoursewareSearch, CoursewareSearchToggle } from '../course-home/courseware-search';
import { useCoursewareSearchState } from '../course-home/courseware-search/hooks';


const CourseTabsNavigation = ({
  activeTabSlug, className, tabs, intl,
}) => {
  const { show } = useCoursewareSearchState();

  return (
    <div id="courseTabsNavigation" className={classNames('course-tabs-navigation', className)}>
      <div className="container-xl">
        <div className="nav-bar">
          <div className="nav-menu">
            
          <Tabs
            className="nav-underline-tabs"
            aria-label={intl.formatMessage(messages.courseMaterial)}
          >
            {tabs
              .filter(({ slug }) => slug !== 'dates')
              .map(({ url, title, slug }) => {
                // Извлекаем идентификатор курса из текущего URL
                const match = window.location.pathname.match(/course-v1:[^/]+/);
                const courseId = match ? match[0] : '';

                // Формируем новый URL для instructor
                const newUrl =
                  slug === 'instructor'
                    ? `https://apps.pt.edtechlab.local/gradebook/${courseId}`
                    : url;

                // Если slug === 'instructor', меняем название на "Gradebook"
                const displayTitle = slug === 'instructor' ? 'Gradebook' : title;

                return (
                  <a
                    key={slug}
                    className={classNames('nav-item flex-shrink-0 nav-link', { active: slug === activeTabSlug })}
                    href={newUrl}
                  >
                    {displayTitle}
                  </a>
                );
              })}
          </Tabs>

          </div>
          <div className="search-toggle">
            <CoursewareSearchToggle />
          </div>
        </div>
      </div>
      {show && <CoursewareSearch />}
    </div>
  );
};

CourseTabsNavigation.propTypes = {
  activeTabSlug: PropTypes.string,
  className: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  intl: intlShape.isRequired,
};

CourseTabsNavigation.defaultProps = {
  activeTabSlug: undefined,
  className: null,
};

export default injectIntl(CourseTabsNavigation);
