"use client"

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Trash } from "lucide-react";
import axios from 'axios'
import { Color } from "@/prisma/generated/clientplsc";

import { AlertModal } from "@/components/modals/alert-modal";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useOrigin } from "@/hooks/use-origin";

const formSchema = z.object({
    name    : z.string().min(2),
    value   : z.string().min(4).max(9).regex(/^#/, {
        message: 'String must be a value hex code',
    }), 
})

type ColorFromValues = z.infer<typeof formSchema>

interface ColorFormProps {
    initialData: Color | null 
}
 
const ColorForm: React.FC<ColorFormProps> = ({
    initialData
}) => {
    const params = useParams()
    const router = useRouter()
    const origin = useOrigin()

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const title = initialData ? 'Edit color' : 'Create color'
    const description = initialData ? 'Edit a color' : 'Add a new color'
    const toastMessage = initialData ? 'Color updated' : 'Color created'
    const action = initialData ? 'Save changes' : 'Create'

    const form = useForm<ColorFromValues> ({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            name    : '',
        },
    })

    const onSubmit = async (data: ColorFromValues) => {
        try {
            setLoading(true)
            if(initialData) {
                await axios.patch(`/api/${params.storeId}/colors/${params.colorId}`, data)
            }else {
                await axios.post(`/api/${params.storeId}/colors`, data)
            }
            router.refresh()
            router.push(`/${params.storeId}/colors`)
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
            
            await axios.delete(`/api/${params.storeId}/colors/${params.colorId}`)
            
            router.refresh()
            router.push(`/${params.storeId}/colors`)
            toast.success('Color deleted.')
            
        } catch (error: any) {
            toast.error('Make sure you removed all product using this color first.')
        } finally {
            setLoading(false)
            setOpen(false)
        }   
    }

    return ( 
    <>
        <AlertModal 
            title={`Are you sure delete Color: ${ initialData?.name } ?`}
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
                                        placeholder='Color name'
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
                                <div className="flex items-center gap-x-4">
                                    <Input 
                                        disabled={ loading }
                                        placeholder='Color value'
                                        { ...field }
                                    />
                                    <div
                                        className="border p-4 rounded-full"
                                        style={{ backgroundColor: field.value }}
                                    />
                                </div>
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
 
export default ColorForm;