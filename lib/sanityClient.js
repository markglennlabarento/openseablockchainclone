import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'szanxv3d',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skexaKjtkmLNF0bKdz6lqQd3SHbcTwdsO7trSNjkUnkcwFQZj41XhBZp2ZfgKkWo5Q65giA1Zd9FsWZ4yMiqWd1vIxLZmZtEJYsX5H87NgJ0ZWbQObxPGPChQFVRrLu5k6rlqqS3UKYIlpkwk7P3Uumg0wnWLEzc0KKHbpvrW90qqItvaoqo',
  useCdn: false,
})
