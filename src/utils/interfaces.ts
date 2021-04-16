import {TStringArray, TNumberArray, TFilterDataArray, THistory} from "./types"

export interface IFilters {
    [key: string]: TStringArray
}

export interface Store {
    filterData: TFilterDataArray
    setFilterData: (filters: TFilterDataArray) => void
    showFilterTypeMenu: boolean
    setShowFilterTypeMenu: (show: boolean) => void
    activeFilters: IFilters
    setActiveFilters: (activeFilters: IFilters) => void
    showResults: boolean
    setShowResults: (show: boolean) => void
    showJobCompany: string
    setShowJobCompany: (company: string) => void
    showJobSkills: string
    setShowJobSkills: (company: string) => void
    showJobsApplied: TNumberArray
    setShowJobsApplied: (filters: TNumberArray) => void
}