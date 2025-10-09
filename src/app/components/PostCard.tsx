import { Author } from '@/app/components/Author'
import { Categories } from '@/app/components/Categories'
import { POSTS_QUERYResult } from '@/sanity/types'
import { PublishedAt } from '@/app/components/PublishedAt'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

type PostCardProps = POSTS_QUERYResult[0] & {
  showAuthor?: boolean;
};

export function PostCard(props: PostCardProps) {
  const { title, author, mainImage, publishedAt, categories, showAuthor = true } = props
  console.log('PostCardProps', props);

  return (
    <Link className="group" href={`/posts/${props.slug!.current}`}>
      <article className="flex flex-row gap-4">
        {/* <div className="md:col-span-2 md:pt-1">
          <Categories categories={categories} />
        </div> */}
        {/* <div className="md:col-span-5 md:w-full"> */}
          {/* <h2 className="text-2xl text-pretty font-semibold text-slate-800 group-hover:text-pink-600 transition-colors relative">
            <span className="relative z-[1]">{title}</span>
            <span className="bg-pink-50 z-0 absolute inset-0 rounded-lg opacity-0 transition-all group-hover:opacity-100 group-hover:scale-y-110 group-hover:scale-x-105 scale-75" />
          </h2>
          <div className="flex items-center mt-2 md:mt-6 gap-x-6">
            <Author author={author} />
            <PublishedAt publishedAt={publishedAt} />
          </div> */}
        {/* </div> */}
        <div className="rounded-lg overflow-hidden">
          {mainImage ? (
            <Image
              src={urlFor(mainImage).width(400).height(200).url()}
              width={400}
              height={200}
              alt={mainImage.alt || title || ''}
            />
          ) : null}
          <div className="md:pt-1">
            <Categories categories={categories} />
          </div>
          <div className="md:w-full">
            <h2 className="text-2xl text-pretty font-semibold text-slate-800 group-hover:text-pink-600 transition-colors relative">
              <span className="relative z-[1]">{title}</span>
              <span className="bg-pink-50 z-0 absolute inset-0 rounded-lg opacity-0 transition-all group-hover:opacity-100 group-hover:scale-y-110 group-hover:scale-x-105 scale-75" />
            </h2>
            <div className="flex items-center mt-2 md:mt-6 gap-x-6">
              {showAuthor && <Author author={author} />}
              <PublishedAt publishedAt={publishedAt} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}