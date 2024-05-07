// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            tags: z.array(z.string()),
            image: image()
                .refine((img) => img.width >= 280, {
                    message: 'Cover image must be at least 280 pixels wide!',
                })
                .optional(),
            date: z.date(),
        }),
})

const projectsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            tags: z.array(z.string()),
            image: image()
                .refine((img) => img.width >= 280, {
                    message: 'Cover image must be at least 280 pixels wide!',
                })
                .optional(),
        }),
})

const teamCollection = defineCollection({
    type: 'data',
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            role: z.string(),
            email: z.string().optional(),
            image: image()
                .refine((img) => img.width >= 280, {
                    message: 'Cover image must be at least 280 pixels wide!',
                })
                .optional(),
        }),
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    blog: blogCollection,
    projects: projectsCollection,
    team: teamCollection,
}
