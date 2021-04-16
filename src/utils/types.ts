export type TStringArray = Array<string>
export type TNumberArray = Array<number>
export type TObjectEntries = [string, TStringArray][]
export type TFilterObject = {
  label: string
  index: number
  list: Array<string>
}
export type TFilterDataArray = Array<TFilterObject>
export type TIndex = {
    index: number
}
export type THistory = {
    location: any
}