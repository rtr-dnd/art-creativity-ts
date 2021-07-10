export enum EventType {
  none,
  gutenberg,
  letter,
  painting
}

export interface HistoryEvent {
  title: string
  time: string
  desc: string
  link: string
  type: EventType
}

export interface TextPiece {
  text: string
}

export interface ReferencedTextPiece extends TextPiece {
  reference: number
}
