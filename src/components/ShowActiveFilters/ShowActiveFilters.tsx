import {FC} from "react"
import {useStore} from "../../store/StoreProvider"
import {IFilters} from "../../utils/interfaces"
import {TObjectEntries} from "../../utils/types"
import CloseIcon from "../../svg/closeicon"
import clsx from "clsx"
import "./ShowActiveFilters.scss"

/**
 * Show Active Filters
 * Used By: Home
 * Purpose: Displays the filters which are currently active
 */

interface Props {
    activeFilterArray: TObjectEntries
}

const ShowActiveFilters: FC<Props> = ({activeFilterArray}) => {
    const {activeFilters, setActiveFilters} = useStore()

    const handleDelete = (filter: string) => {
        const newActiveFilters: IFilters = {...activeFilters}
        delete newActiveFilters[filter]
        setActiveFilters(newActiveFilters)
    }

    const toggleFilter = (label: string, indexFilter: number) => {
        const newActiveFilters: IFilters = {...activeFilters}
        let newVal = activeFilters[label][indexFilter]
        if (newVal.substring(0, 4) === "NOT:") {
            newVal = activeFilters[label][indexFilter].substring(4) // Remove NOT:
        } else {
            newVal = `NOT:${activeFilters[label][indexFilter]}` // Prefix NOT:
        }
        newActiveFilters[label][indexFilter] = newVal
        setActiveFilters(newActiveFilters)
    }

    return (
        <div className="show-active-filters">
            <strong>Current Filters: </strong> Click to toggle NOT filter
            <div className={clsx("show-active-filters-body", "border")}>
                {activeFilterArray.map((filter, indexArray) => {
                    return (
                        <section key={indexArray}>
                            <div className="filter-title">
                                <span
                                    className="show-active-filters-close"
                                    onClick={() => handleDelete(filter[0])}
                                >
                                    <CloseIcon/>
                                </span>
                                <strong>{filter[0]}:</strong>{" "}
                            </div>
                            {filter[1].map((val, indexFilter) => {
                                return (
                                    <button
                                        key={indexFilter}
                                        className="filter-btn"
                                        onClick={() => toggleFilter(filter[0], indexFilter)}
                                    >
                                        {val}
                                    </button>
                                )
                            })}
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default ShowActiveFilters
