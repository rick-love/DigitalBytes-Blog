import { PortableTextBlock } from "sanity"

export type Page = {
    title: ReactNode
    _id: string,
    _createdAt: Date,
    name: string,
    slug: string,
    content: PortableTextBlock[]
  }
  