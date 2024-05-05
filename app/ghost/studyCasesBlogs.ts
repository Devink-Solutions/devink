import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI(
  {
    url: 'https://blog.cap.devink.site',
    key: '7e12f0e2473a55e7af84b57fc9',
    version: 'v5.0',
    makeRequest: async ({
      url, method, params, headers,
    }) => {
      const apiUrl = new URL(url);
      Object.keys(params).map((key) => apiUrl.searchParams.set(key, params[key]));

      return fetch(apiUrl.toString(), { method, headers })
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}, response data: ${await res.text()}`);
          }

          return { data: await res.json() };
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
    },
  },
);

export async function getStudyCasesBlog(locale: string) {
  return api.posts.browse({ filter: `tag:study-cases+tag:${locale}`, limit: 'all' }).catch((e) => { console.log(e); });
}

export async function getPosts() {
  const languages = [{ locale: 'es' }, { locale: 'en' }, { locale: 'pt' }];
  const query = await Promise.all(languages.map((lang) => getStudyCasesBlog(lang.locale)));
  const formattedPosts = query.map((posts, index) => {
    const language = languages[index].locale;
    return posts?.map((post) => {
      return {
        locale: language,
        slug: post.slug,
      };
    });
  }).flat();
  return formattedPosts;

  



  //  api.posts
  //   .browse({
  //     filter: `tag:study-cases+tag:${languages.map((lang) => lang.locale).join('+')}`,
  //     include: ['tags', 'authors'],
  //     limit: 'all',
  //   })
  //   .catch((err) => {
  //     throw new Error(err);
  //   });
}
