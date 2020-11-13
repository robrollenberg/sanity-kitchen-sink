export default {
  widgets: [
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
                  buildHookId: '5faecd229c7ce20c393e452f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wunudacy',
                  apiId: '59d45cca-19ba-4a3b-849c-4281f40eec60'
                },
                {
                  buildHookId: '5faecd235cedab150b9bde93',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kbq5trut',
                  apiId: 'f8467d97-711e-4d95-910c-425e6c3755c1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robrollenberg/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kbq5trut.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
