"use client"

import * as React from "react"
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface CategoriesProps {
    categoryNumber: number // Prop to accept the category number
  }

export function Categories({ categoryNumber }: CategoriesProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2 mt-4"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-lg">
          Category {categoryNumber}
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
          {isOpen ? (
              <CaretUpIcon className="h-4 w-4" />
            ) : (
              <CaretDownIcon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="w-full h-[1px] bg-gray-200" />
      <CollapsibleContent className="space-y-2">
            sample content
      </CollapsibleContent>
    </Collapsible>
  )
}
