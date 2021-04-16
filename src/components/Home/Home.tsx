import {FC, useState} from "react"
import FilterTypeMenu from "../FilterTypeMenu/FilterTypeMenu"
import FilterChooseMenu from "../FilterChooseMenu/FilterChooseMenu"
import ShowActiveFilters from "../ShowActiveFilters/ShowActiveFilters"
import ShowResults from "../ShowResults/ShowResults"
import Post from "../Post/Post"
import {useStore} from "../../store/StoreProvider"
import {TStringArray, TObjectEntries} from "../../utils/types"
import "./Home.scss"

const Home: FC = () => {
    const [list, setList] = useState<TStringArray>([])
    const [label, setLabel] = useState<string>("")
    const {
        setShowFilterTypeMenu,
        setShowResults,
        filterData,
        showFilterTypeMenu,
        showResults,
        activeFilters,
    } = useStore()

    const activeFilterArray: TObjectEntries = Object.entries(activeFilters)

    if (activeFilterArray.length) {
        setShowResults(true)
    } else {
        setShowResults(false)
    }

    if (!list.length) {
        setShowFilterTypeMenu(true)
    }

    const showFilter = (showIndex: number) => {
        setShowResults(true)
        setShowFilterTypeMenu(false)
        setList(filterData[showIndex].list)
        setLabel(filterData[showIndex].label)
    }

    return (
        <div className="home">
            <div className="home-header">
                {showFilterTypeMenu && <FilterTypeMenu showFilter={showFilter}/>}
                {!showFilterTypeMenu && <FilterChooseMenu list={list} label={label}/>}
            </div>
            <>
                {showResults ? (
                    <div className="home-body">
                        <ShowActiveFilters activeFilterArray={activeFilterArray}/>
                        <ShowResults/>
                    </div>
                )
                :
                    (
                        <div className="home-body">
                            <Post />
                        </div>
                    )
                }
            </>

        </div>
    )
}

export default Home
