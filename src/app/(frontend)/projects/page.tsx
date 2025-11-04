"use client"

import PageContainer from "@/components/custom/page-container"
import { PkmnTextbox } from "@/components/custom/pkmn-textbox"
import { ProjectDisplay } from "@/components/custom/project-display"
import { useCMS } from "@/components/custom/providers"
import { OldProject as Project } from "@/payload-types"

export default function ProjectsPage() {
  const { projects }: { projects: Array<Project> } = useCMS();

  if (projects != undefined)
    return (
      <PageContainer>
        <PkmnTextbox label={"Projects"}>
          <ul className="space-y-8 mb-4">
            {projects.map((p: Project, i) => (
              <ProjectDisplay key={i} project={p} />
            ))}
          </ul>
        </PkmnTextbox>
      </PageContainer >
    )

}

