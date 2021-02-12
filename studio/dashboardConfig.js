export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6025ffc2d5d062332fa3d030',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vayrtzya',
                  apiId: '36ba196a-df1e-4d8e-9c20-4df11139e566'
                },
                {
                  buildHookId: '6025ffc2dc45de3336693dd3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pcgtevz6',
                  apiId: '42cf372b-edfd-48da-8716-9d02e7f1cf2c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarceloM9123/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pcgtevz6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
