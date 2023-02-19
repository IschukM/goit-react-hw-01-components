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
        <Title>{title}</Title>

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
  stats: PropTypes.array.isRequired,
};
