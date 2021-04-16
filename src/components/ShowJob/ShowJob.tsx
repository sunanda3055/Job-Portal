import {FC, useEffect, useState} from "react"
import {useStore} from "../../store/StoreProvider"
import {useHistory} from "react-router-dom"
import {rand} from "../../utils/tools"
import {THistory, TStringArray} from "../../utils/types"
import * as showType from "../../utils/constants"
import CloseIcon from "../../svg/closeicon"
import "./ShowJob.scss"

const getValue = (history: THistory) => {
    return history.location.state.companyNum
}

const ShowJob: FC = () => {
    const {showJobCompany, showJobSkills, filterData, showJobsApplied, setShowJobsApplied} = useStore()
    const history = useHistory();
    const [company, setComapany] = useState<number>(0);

    useEffect(() => {
        const val: number = getValue(history);
        setComapany(val);
    }, []);

    const getSingleValue = (index: number) => {
        const last: number = filterData[index].list.length - 1
        const pick: number = rand(0, last)
        return filterData[index].list[pick]
    }

    const getMultipleValues = (index: number, count: number) => {
        const vals: TStringArray = []
        for (let i: number = 0; i < count; i++) {
            vals[i] = getSingleValue(index)
        }
        //vals = [...new Set(vals)]
        const values = vals.join().replace(/,/g, ", ")
        return values
    }

    const getCompany = () => {
        return showJobCompany.toLowerCase().replace(/[^a-z]/g, "")
    }

    const getWebsite = () => {
        return `http://${getCompany()}.com/`
    }

    return (
        <div className="show-job" >
            <div className="show-job-header">
                <h3>{showJobCompany}</h3>
                <div className="action-group">
                    <button
                        className="apply"
                        onClick={() => {
                            history.push(`/`);
                            setShowJobsApplied([...showJobsApplied, company])
                        }}
                    >
                        Apply
                    </button>
                    <div className="show-job-close">
                        <CloseIcon/>
                    </div>
                </div>
            </div>

            <section>
                <strong className="title">About {showJobCompany}: </strong>
                <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et ex
                    consequat, ullamcorper augue ut, sollicitudin nunc. Suspendisse luctus
                    luctus metus ut efficitur. Nulla velit lectus, accumsan at semper at,
                    egestas quis justo. Ut vel nisi varius, sagittis tellus nec, egestas
                    tortor. Donec pretium est ac nibh blandit, et placerat diam placerat. Ut
                    id dictum risus. Donec non rutrum leo, non mollis nunc. Etiam eu
                    hendrerit justo, vitae finibus neque.</span>
            </section>

            <ul>
                <li>
                    <section>
                        <strong>Tech Stack: </strong>
                        {showJobSkills}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Project Role Description: </strong>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et ex
                        consequat, ullamcorper augue ut, sollicitudin nunc. Suspendisse luctus
                        luctus metus ut efficitur. Nulla velit lectus, accumsan at semper at,
                        egestas quis justo. Ut vel nisi varius, sagittis tellus nec, egestas
                        tortor. Donec pretium est ac nibh blandit, et placerat diam placerat. Ut
                        id dictum risus. Donec non rutrum leo, non mollis nunc. Etiam eu
                        hendrerit justo, vitae finibus neque.
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Tools:</strong> Slack, Jenkins, Jira, Git, GitHub, Docker,
                        Kubernetes (DevOps skills not required for FE Dev)
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Middleware:</strong> Node.js (not required for FE Dev)
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Back End:</strong> MongoDB, Microsoft Azure Cloud Services (not
                        required for FE Dev)
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Education Required: </strong>
                        {getSingleValue(showType.SHOW_FILTER_EDUCATION_REQUIRED)}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Experience Level: </strong>
                        {getSingleValue(showType.SHOW_FILTER_EXPERIENCE_LEVEL)}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Exployee Type: </strong>
                        {getSingleValue(showType.SHOW_FILTER_EMPLOYEE_TYPE)}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Payment: </strong>
                        {getSingleValue(showType.SHOW_FILTER_PAYMENT).replace("+", "")}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Working From Home: </strong>
                        {getSingleValue(showType.SHOW_FILTER_WORKING_FROM_HOME)}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Mobile: </strong>
                        {getSingleValue(showType.SHOW_FILTER_MOBILE)}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Methodology: </strong>
                        {getSingleValue(showType.SHOW_FILTER_METHODOLOGY)}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Accessibility: </strong>
                        {getSingleValue(showType.SHOW_FILTER_ACCESSIBLE)}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Dress Code: </strong>
                        {getSingleValue(showType.SHOW_FILTER_DRESS_CODE)}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Internal or External: </strong>
                        {getSingleValue(showType.SHOW_FILTER_INTERNAL_EXTERNAL)}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Benefits: </strong>
                        {getMultipleValues(showType.SHOW_FILTER_BENEFITS, 4)}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Commute: </strong>
                        {"22 miles / 25 minutes"}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Pets: </strong>
                        {getSingleValue(showType.SHOW_FILTER_PETS_ALLOWED)}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Industry: </strong>
                        {getSingleValue(showType.SHOW_FILTER_INDUSTRY)}
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Company Size: </strong>
                        {rand(5, 500000)}
                    </section>
                </li>
            </ul>

            <section className="additional">
                <strong className="title">Additional Details</strong>
            </section>

            <ul>
                <li>
                    <section>
                        <strong>Address: </strong>285 Fulton St, New York, NY 10007
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Contact Name: </strong>John Smith
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Contact Phone: </strong>212-555-1212
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Contact Email: </strong>johnsmith@{getCompany()}.com
                    </section>
                </li>
                <li>
                    <section>
                        <strong>Website: </strong>
                        <a target="_blank" rel="noreferrer" href={getWebsite()}>
                            {getWebsite()}
                        </a>
                    </section>
                </li>
            </ul>


            <section>
                <section className="show-job-nav">
                    <label>&lt; Previous</label>
                    <strong>Company Photos</strong>
                    <label>Next &gt;</label>
                </section>
                <section className="show-job-photos">
                    <img
                        src="http://patcoston.com/portfolio/fronty/images/company1-thumb.jpg"
                        alt="team"
                    />
                    <img
                        src="http://patcoston.com/portfolio/fronty/images/company2-thumb.jpg"
                        alt="team"
                    />
                    <img
                        src="http://patcoston.com/portfolio/fronty/images/company3-thumb.jpg"
                        alt="team"
                    />
                </section>
            </section>
        </div>
    )
}

export default ShowJob
