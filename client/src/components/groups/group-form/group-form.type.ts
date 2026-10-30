import z from "zod";


export const groupSchema = z.object({
    imageUrl : z.string().optional(),
    name : z.string().min(1, 'Group name required'),
    description : z.string().min(1, 'description required'),
})

export type GroupInput = z.infer<typeof groupSchema>