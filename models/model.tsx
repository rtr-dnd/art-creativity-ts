export enum EventType {
  none,
  gutenberg,
  letter,
  painting
}

export interface HistoryEvent {
  time: string
  desc: string
  link: string
  type: EventType
}
