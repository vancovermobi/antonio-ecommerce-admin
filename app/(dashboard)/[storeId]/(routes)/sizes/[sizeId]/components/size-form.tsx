"use client"

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Trash } from "lucide-react";
import axios from 'axios'
import { Size } from "@/prisma/generated/clientplsc";

import { AlertModal } from "@/components/modals/alert-modal";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useOrigin } from "@/hooks/use-origin";

const formSchema = z.object({
    name    : z.string().min(2),
    value   : z.string().min(2),
})

type SizeFromValues = z.infer<typeof formSchema>

interface SizeFormProps {
    initialData: Size | null 
}
 
const SizeForm: React.FC<SizeFormProps> = ({
    initialData
}) => {
    const params = useParams()
    const router = useRouter()
    const origin = useOrigin()

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const title = initialData ? 'Edit size' : 'Create size'
    const description = initialData ? 'Edit a size' : 'Add a new size'
    const toastMessage = initialData ? 'Size updated' : 'Size created'
    const action = initialData ? 'Save changes' : 'Create'

    const form = useForm<SizeFromValues> ({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            name    : '',
        },
    })

    const onSubmit = async (data: SizeFromValues) => {
        try {
            setLoading(true)
            if(initialData) {
                await axios.patch(`/api/${params.storeId}/sizes/${params.sizeId}`, data)
            }else {
                await axios.post(`/api/${params.storeId}/sizes`, data)
            }
            router.refresh()
            router.push(`/${params.storeId}/sizes`)
            toast.success(toastMessage)
            
        } catch (error: any) {
            toast.error('Something went wrong.')
        } finally {
            setLoading(false)
        }
    }
    const onDelete = async () => {
        try {
            setLoading(true)
            
            await axios.delete(`/api/${params.storeId}/sizes/${params.sizeId}`)
            
            router.refresh()
            router.push(`/${params.storeId}/sizes`)
            toast.success('Size deleted.')
            
        } catch (error: any) {
            toast.error('Make sure you removed all product using this size first.')
        } finally {
            setLoading(false)
            setOpen(false)
        }   
    }

    return ( 
    <>
        <AlertModal 
            title={`Are you sure delete size: ${ initialData?.name } ?`}
            description="This action cannot be undone."
            isOpen={ open }
            onClose={() => setOpen(false)}
            onConfirm={onDelete}
            loading={ loading }
        />
        <div className="flex items-center justify-between">
            <Heading 
                title={ title }
                description={ description }
            />

            {/*===Delete Store===*/}
            { initialData && (
            <Button
                disabled={ loading }
                variant="destructive"
                size='sm'
                onClick={() => setOpen(true)}
            >
                <Trash className='h-4 w-4' />
            </Button>
            )}
        </div>

        <Separator />

        <Form {...form }>
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 w-full'
        >   
            <div className='md:grid md:grid-cols-3 gap-8'> 
                <FormField 
                    control={ form.control }
                    name='name'
                    render={({ field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                    <Input 
                                        disabled={ loading }
                                        placeholder='Size name'
                                        { ...field }
                                    />
                                </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />            
                <FormField 
                    control={ form.control }
                    name='value'
                    render={({ field}) => (
                        <FormItem>
                            <FormLabel>Value</FormLabel>
                            <FormControl>
                                <Input 
                                    disabled={ loading }
                                    placeholder='Size value'
                                    { ...field }
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            <Button
                type='submit'
                disabled={ loading }
                className='ml-auto'
            >
                { action }
            </Button>
        </form>
    </Form>
    </>
    );
}
 
export default SizeForm;