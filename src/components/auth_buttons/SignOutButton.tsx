"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { cn } from '@/lib/utils';
import { useAppDispatch } from "@/rtk/hooks";
import { updateCart } from "@/rtk/slices/cart-slice";
import { SignedIn, useClerk } from '@clerk/nextjs';
import { toast } from 'sonner';

type propsTypes = {
  styles?:string,
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SignOutButton({styles,setIsOpen}:propsTypes) {
  const { signOut } = useClerk()
  const dispatch = useAppDispatch()

  const handleSignOut = async ()=> {
    await signOut()
    dispatch(updateCart({}))
    setIsOpen && setIsOpen(false)
    toast.success('Signed out successfully')
  }

  return (
    <SignedIn>
      
      <AlertDialog>

        <AlertDialogTrigger className={cn('blackBtn',styles)}>
          Sign Out
        </AlertDialogTrigger>

        <AlertDialogOverlay className="bg-white/80"/>

        <AlertDialogContent>

          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          </AlertDialogHeader>

          <AlertDialogFooter>

            <AlertDialogCancel className="hover:bg-gray-100">Cancel</AlertDialogCancel>

            <AlertDialogAction >
              <div onClick={handleSignOut}>Sign Out</div>
            </AlertDialogAction>

          </AlertDialogFooter>

        </AlertDialogContent>

      </AlertDialog>

    </SignedIn>
  )
}
