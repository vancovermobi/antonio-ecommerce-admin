import { redirect } from "next/navigation"
import { UserButton, auth } from "@clerk/nextjs"

import { prismadbPLSC } from "@/lib/prismadb"
import StoreSwitcher from "@/components/store-switcher"
import { MainNavRoutes } from "@/components/MainNavRoutes"
import { ThemeToggle } from "@/components/theme-toggle"

const Navbar = async () => {
    const { userId } = auth()

    if(!userId) {
        redirect('/sign-in')
    }

    const stores = await prismadbPLSC.store.findMany({
        where: {
            userId 
        }        
    })

    return (
    <div className="border-b">
        <div className="flex items-center h-16 px-4">
            
            {/*====Store Switcher=====*/}
            <StoreSwitcher className="" items={ stores } />

            {/*===Main Nav routes===*/}
            <MainNavRoutes className="mx-6" />
            
            <div className="flex items-center ml-auto space-x-4">
                <ThemeToggle />
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    </div>
    )
}

export default Navbar