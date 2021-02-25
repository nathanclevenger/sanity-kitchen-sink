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
                  buildHookId: '6037ad495b6bb5223b3db5a9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6ih3w46e',
                  apiId: '4650e54e-6df5-43d1-9aae-b04242b9226d'
                },
                {
                  buildHookId: '6037ad4abe7da423088eebbc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-22stdh37',
                  apiId: 'ad0d6996-d1c5-4a2b-8f74-4f40c12c57fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nathanclevenger/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-22stdh37.netlify.app', category: 'apps'}
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
