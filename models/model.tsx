export enum EventType {
  none,
  gutenberg,
  letter,
  painting
}

export type HistoryEvent = {
  time: string,
  desc: string,
  link: string,
  type: EventType
} 
