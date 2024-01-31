import React from 'react'

import { Markdown } from '../Markdown'
import { ProjectDetailsSection } from './ProjectDetailsSection'
import { ProjectSectionId } from './sectionId'

export interface UpgradesAndGovernanceSectionProps {
  id: ProjectSectionId
  title: string
  sectionOrder: number
  content: string
  image: string | undefined
}

export function UpgradesAndGovernanceSection(
  props: UpgradesAndGovernanceSectionProps,
) {
  return (
    <ProjectDetailsSection
      id={props.id}
      title={props.title}
      sectionOrder={props.sectionOrder}
    >
      {props.image && (
        <figure className="mb-8 mt-4 text-center">
          <img
            className="inline max-w-full align-[unset] dark:invert"
            src={props.image}
            alt="A diagram of the upgrades and governance"
          />
          <figcaption className="text-xs text-gray-500 dark:text-gray-600">
            A diagram of the upgrades and governance
          </figcaption>
        </figure>
      )}
      <Markdown>{props.content}</Markdown>
    </ProjectDetailsSection>
  )
}
