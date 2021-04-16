import {FC} from "react"
import {useStore} from "../../store/StoreProvider";
import * as constant from "../../utils/constants";

const JobsApplied: FC = () => {
    const {filterData, showJobsApplied} = useStore();

    return (
        <div className="jobs-applied">
            <h3>Jobs Applied At:</h3>
            <ul>
                {
                    showJobsApplied.length ? showJobsApplied.map((company, index) => {
                        return (
                            <li key={index}>
                                <strong>{filterData[constant.SHOW_FILTER_COMPANY].list[company]}</strong>
                            </li>
                            )
                        })
                        :
                        <li>
                            No Jobs applied yet.
                        </li>
                }
            </ul>
        </div>
    )
}

export default JobsApplied
