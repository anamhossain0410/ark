import { defineQuery } from "next-sanity";
// import { SiteSettings } from "../types";

export const SITE_QUERY = defineQuery(`
    *[_type == "siteSettings"][0] {
        _id,
        _type,
        siteTitle,
        siteDescription,
        logo {
            asset-> {
                _id,
                url,
                metadata
            }
        },
        favicon {
            asset-> {
                _id,
                url,
                metadata
            }
        },
        navigation,
        footerTitle,
        socialLinks,
        copyright,
        defaultPage,
        blogSettings {
            postsPerPage,
            showAuthor,
            showDate,
            enableComments
        },
        googleAnalytics,
        headerScripts,
        additionalCSS
    }
`)

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...50]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`)

export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{ 
  "slug": slug.current
}`)

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "seo": {
    "title": coalesce(seo.title, title, ""),
    "description": coalesce(seo.description,  ""),
    "image": seo.image,
    "noIndex": seo.noIndex == true,
  },
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  },
  relatedPosts[]{
    _key,
    ...@->{_id, title, slug}
  }
}`)

// ...all other queries

export const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  ...,
  content[]{
    ...,
    _type == "faqs" => {
      ...,
      faqs[]->
    }
  }
}`);