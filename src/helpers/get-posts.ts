import type { Post } from "~/types"
import fs from "fs"

// folder /src/app/(with-footer)/blog/(posts)
// files /src/app/(with-footer)/blog/(posts)/slug/${file}.mdx -> export const metadata = { ... }

export const getPosts = async (): Promise<Post[]> => {
	const posts = fs
		.readdirSync(`${process.cwd()}/src/app/(with-footer)/blog/(posts)`, {
			withFileTypes: true,
		})
		.filter((dirent) => {
			return dirent.isDirectory()
		})

	const allPosts = await Promise.all(
		posts.map(async ({ name }) => {
			const { metadata } = await import(`/src/app/(with-footer)/blog/(posts)/${name}/page.mdx`)

			return {
				...metadata,
				slug: name,
			}
		})
	)

	return allPosts
}
