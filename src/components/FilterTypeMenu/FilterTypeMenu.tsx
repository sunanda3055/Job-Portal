import { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import clsx from "clsx"
import "./FilterTypeMenu.scss"

/**
 * Filter Type Menu
 * Used By: Home
 * Purpose: Read and Display data for Filter Type so user can choose
 */

interface Props {
  showFilter(arg: number): void
}

const FilterTypeMenu: FC<Props> = ({ showFilter }) => {
  const { filterData } = useStore()

  return (
    <div className="filter-type-menu">
      <div className={clsx("filter-type-menu-body")}>
        <div className="filter-type-menu-header">Select a job type of your compatibility</div>
        <ul>
          {filterData.map((filter, index) => (
            <li key={filter.label} onClick={() => showFilter(index)}>
              {filter.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FilterTypeMenu
