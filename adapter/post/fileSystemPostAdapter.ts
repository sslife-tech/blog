import path from "path";
import {PostData, PostMetaData} from "~/@types";
import fs from "fs";
import matter, {GrayMatterFile} from "gray-matter";
import {remark} from "remark";
import externalLinks from "remark-external-links";
import html from "remark-html";
import {PostAdapter} from "~/adapter/post";

const postsDirectory = path.join(process.cwd(), 'markdown');

class PostNotFound extends Error {
}

const fileSystemPostAdapter: PostAdapter = {
    getAll: async (): Promise<PostMetaData[]> => allPosts(),

    get: async (offset: number, limit: number): Promise<PostMetaData[]> => allPosts().slice(offset, offset + limit),

    count: async (): Promise<number> => fs.readdirSync(postsDirectory).length,

    related: async (post: PostMetaData, max: number) => allPosts()
        .filter((p) => {
            if (p.slug === post.slug) {
                return false;
            }
            return post.tags.find((tag) => p.tags.includes(tag)) !== undefined;
        })
        .slice(0, max),

    find: async (slug: string): Promise<PostData> => {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        if (!fs.existsSync(fullPath)) {
            throw new PostNotFound('the post is not found');
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        const processedContent = await remark()
            .use(externalLinks, {target: "_blank", rel: ['nofollow']})
            .use(html)
            .process(matterResult.content);

        return {
            ...formatSummary(slug, matterResult),
            html: processedContent.toString(),
        };
    },
};

const allPosts = (): PostMetaData[] => {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData: PostMetaData[] = fileNames.map((fileName: string): PostMetaData => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return formatSummary(slug, matterResult);
    });

    return allPostsData.sort((a: PostMetaData, b: PostMetaData) => {
        if (a.date < b.date) {
            return 1;
        }
        return -1;
    });
};

const formatSummary = (slug: string, matterResult: GrayMatterFile<string>): PostMetaData => {
    const {date, title, author, thumbnail, description, tags} = matterResult.data;

    return {
        slug,
        date: Date.parse(date),
        title,
        author,
        thumbnail,
        description,
        tags
    };
};

export {
    fileSystemPostAdapter,
    PostNotFound
};
