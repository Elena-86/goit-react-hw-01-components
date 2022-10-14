import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatList,
  StatListItem,
  StatListItemLabel,
  StatListItemPercentage,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title.length < 0 && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatList>
        {stats.map(stat => (
          <StatListItem key={stat.id}>
            <StatListItemLabel>{stat.label}</StatListItemLabel>
            <StatListItemPercentage>{stat.percentage}%</StatListItemPercentage>
          </StatListItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
