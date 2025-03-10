import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "./ui/button"
import Link from "next/link"

export const DropDown = () => {
    const router = useRouter()
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">FILTERS</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
                <Link href="/product2">SEW Eurodrive</Link>            
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
                <Link href="/product3">Kirloskar</Link>            
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
                <Link href="/product4">Danfoss Drives</Link>            
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
                <Link href="/product5">Symphony Air Coolers</Link>            
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
                <Link href="/product6">Nilfisk</Link>            
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
                <Link href="/product7">Praj Hipurity Systems</Link>            
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
                <Link href="/product8">Snap On Tools</Link>            
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
                <Link href="/product9">WEG Motors</Link>            
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}