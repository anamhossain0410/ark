import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      // Regular document lists
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      
      S.divider(),

      S.documentTypeListItem("page").title("Pages"),
      S.documentTypeListItem("faq").title("FAQs"),
      
      // Singleton - Site Settings
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
      
      S.divider(),
      
      // Filter out explicitly listed document types
      ...S.documentTypeListItems().filter(
        (item) => 
          item.getId() && 
          !['post', 'category', 'author', 'siteSettings', 'page', 'faq'].includes(item.getId()!)
      ),
    ])