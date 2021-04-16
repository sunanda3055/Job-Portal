import {FC, useState} from "react"
import {useStore} from "../../store/StoreProvider"
import {useHistory} from "react-router-dom"
import {rand} from "../../utils/tools"
import {TStringArray, TNumberArray, TFilterObject} from "../../utils/types"
import * as constant from "../../utils/constants"
import "./ShowResults.scss"

const getTechStack = (techStack: TFilterObject) => {
    const skills: TStringArray = []
    const len: number = techStack.list.length
    for (let i: number = 0; i < 10; i++) {
        let rnd: number = rand(1, len - 1)
        skills.push(techStack.list[rnd])
    }
    const skillString: string = skills.join().replace(/,/g, ", ")
    return skillString
}

const ShowResults: FC = () => {
    const {setShowJobCompany, setShowJobSkills, filterData} = useStore();
    const companyIndex: TNumberArray = []
    const companySkills: TStringArray = []
    const len: number = filterData[constant.SHOW_FILTER_COMPANY].list.length
    const history = useHistory()

    type TNext = { label: string; selected: string }[]

    const [next, setNext] = useState<TNext>([
        {label: "1", selected: "selected"},
        {label: "2", selected: ""},
        {label: "3", selected: ""},
        {label: ">", selected: ""},
    ])

    const techStack: TFilterObject = filterData[constant.SHOW_FILTER_TECH_STACK]
    for (let i: number = 0; i < 10; i++) {
        let rnd: number = rand(1, len - 1)
        companyIndex.push(rnd)
        let skills: string = getTechStack(techStack)
        companySkills.push(skills)
    }

    const handleClickJob = (index: number) => {
        const companyNum = companyIndex[index]
        setShowJobCompany(filterData[constant.SHOW_FILTER_COMPANY].list[companyNum])
        setShowJobSkills(companySkills[index])
        history.push({
            pathname: constant.PATH_JOB,
            state: {
                companyNum: companyNum
            }
        })
    };

    const handleSelectNext = (index: number) => {
        const newNext = [...next]
        newNext.forEach(obj => (obj.selected = ""))
        newNext[index].selected = "selected"
        setNext(newNext)
    }

    return (
        <section className="show-results">
            <h3>Results</h3>
            <div className="show-results-body">
                {companyIndex.map((company, index) => {
                    return (
                        <section
                            key={index}
                            onClick={() => handleClickJob(index)}
                            className="border"
                        >
                            <strong>
                                {filterData[constant.SHOW_FILTER_COMPANY].list[company]}
                            </strong>
                            <p className="detail"><strong>Skills: </strong>{companySkills[index]}</p>
                        </section>
                    )
                })}
            </div>
            <div className="show-results-next">
                <ul>
                    {next.map((val, index) => (
                        <li
                            key={val.label}
                            onClick={() => handleSelectNext(index)}
                            className={val.selected}
                        >
                            {val.label}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ShowResults
