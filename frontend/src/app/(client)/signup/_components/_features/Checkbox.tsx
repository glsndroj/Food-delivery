"use client"

import { Checkbox } from "@/components/ui/checkbox"

interface checkboxPassProps {
  checked: boolean;
  onChange: ()=> void
}

export function CheckboxPass({checked, onChange}: checkboxPassProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox checked={checked} onCheckedChange={onChange}/>
        
      </div>
    </div>
  )
}
