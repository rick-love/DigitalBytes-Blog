type Props = {
    params: { project: string }
}

import { getProject } from "@/sanity/sanity-utils"

export default async function Project({ params }: Props) {
    const slug = params.project
    const project = await getProject(slug)

    return <div>projects here</div>
}