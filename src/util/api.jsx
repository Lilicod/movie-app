export default async function fetcher(apiRoute) {
    const url = "https://api.themoviedb.org/3/" + apiRoute
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjc1YzE5ZGE2NDE0OGRlZmFkNjU5ZDM5ZGZiOTA5YiIsInN1YiI6IjY1Njc2YjZhYThiMmNhMDBjOTg3MTE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dzwz1Ru08a-HpABaU6ey4CHjL2U8a8ZR-1KY2YsgMIM",
      },
    }
  
    const res = await fetch(url, options)
    const data = await res.json()
    return data
  }
  