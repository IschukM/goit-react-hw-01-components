import PropTypes from 'prop-types';
import { getRandomColor } from '../../utils/getRandomColor';
import {
  Card,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <>
      <Card>
        {title && <Title>{title}</Title>}
        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <StatItem key={id} color={getRandomColor()}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </StatItem>
          ))}
        </StatList>
      </Card>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
