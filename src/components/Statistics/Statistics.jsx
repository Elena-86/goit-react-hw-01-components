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
      <StatisticsTitle>{title}</StatisticsTitle>
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
