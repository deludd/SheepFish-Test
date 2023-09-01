import { useDispatch, useSelector } from 'react-redux';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { selectFilters } from 'store/filters/filter-selectors';
import { removeFilter, clearFilter } from 'store/productsActions';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters)

  if(currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map(filter => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button
          onClick={() => dispatch(clearFilter())}
          className='link'
        >
          Clear
        </button>
      </div>
    </Card>
  )
}

export {FilterPanel};