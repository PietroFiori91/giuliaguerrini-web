export const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc){
    title,
    slug,
    publishedAt,
    body,
    mainImage{
      asset->{url}
    },
    categories[]->{title}
  }
`;

export const SINGLE_POST_QUERY = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    body,
    mainImage{
      asset->{
        url
      }
    },
    categories[]->{
      title
    }
  }
`;
