import { useSelector, useDispatch } from 'react-redux';
import { selectVisiblePositions } from 'store/positions/position-selectors';
import { JobPosition } from './JobPosition';

import { addFilter } from 'store/productsActions';
import { selectFilters } from 'store/filters/filter-selectors';

const JobList = () => {
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) => selectVisiblePositions(state, currentFilters));
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  )
}

export {JobList};