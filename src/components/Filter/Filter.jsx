import PropTypes from 'prop-types';
import { FilterContainer } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterContainer>
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  </FilterContainer>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
