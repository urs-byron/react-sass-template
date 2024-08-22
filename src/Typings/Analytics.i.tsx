import {
    Dispatch,
    CSSProperties,
    SetStateAction,
    MouseEventHandler,
} from 'react'

export interface IPieDonutDataPoint {
    label: string
    percent: number
    color: string
    angle: number
    startAngle: string
    sectionBorder: string
}

export type IPieDonutMouseMoveHandlerPartial = (
    d: IPieDonutDataPoint[]
) => IPieDonutMouseMoveHandler

export type IPieDonutMouseMoveHandler = (
    setState: Dispatch<SetStateAction<IPieDonutDataPoint | null>>
) => MouseEventHandler<HTMLDivElement>

export interface IPieDonutGraph {
    style: CSSProperties
    mouseMoveHandler: IPieDonutMouseMoveHandler
}
