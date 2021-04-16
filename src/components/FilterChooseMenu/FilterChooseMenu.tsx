import { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { IFilters } from "../../utils/interfaces"
import { TStringArray } from "../../utils/types"
import "./FilterChooseMenu.scss"

/**
 * Filter Choose
 * Used By: Home
 * Purpose: Choose a filter based on which Filter Type (from FilterTypeMenu) was chosen
 */

interface Props {
  list: TStringArray
  label: string
}

const FilterChooseMenu: FC<Props> = ({ list, label }) => {
  const { activeFilters, setActiveFilters, setShowFilterTypeMenu } = useStore()
  const size = list.length < 21 ? list.length : 20

  const handleChange = () => {
    const itemList = document.getElementById(
      "filter-choose-menu",
    ) as HTMLSelectElement
    const collection = itemList.selectedOptions as HTMLOptionsCollection
    const filters: TStringArray = []
    for (let i: number = 0; i < collection.length; i++) {
      filters.push(collection[i].label)
    }
    const newActiveFilters: IFilters = { ...activeFilters, [label]: filters }
    setActiveFilters(newActiveFilters)
  }

  return (
    <div className="filter-choose-menu">
      <div className="filter-choose-menu-button">
        <button onClick={() => setShowFilterTypeMenu(true)}>
          Back to Job type
        </button>
      </div>
      <div className="filter-choose-menu-body">
        <div className="filter-choose-menu-header">
          <strong>Filter:</strong> {label} (choose one or more)
        </div>
        <select
          id="filter-choose-menu"
          className="filter-choose-menu-list"
          multiple
          size={size}
          onChange={handleChange}
        >
          {list.map(val => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterChooseMenu
