import { Octokit } from "@octokit/core"
import { Repo } from "@/app/columns"

type FetchReposResponse = {
  error?: string
  data: Repo[]
}

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

export const fetchRepos = async (searchPhrase = ""): Promise<FetchReposResponse> => {
  if (!searchPhrase.trim()) return { data: [] }

  try {
    // TODO: Add pagination support from backend to fetch more than 1000 repositories & synchronize with frontend pagination
    const response = await octokit.request("GET /search/repositories", {
      q: searchPhrase,
      per_page: 1000, // Maximum allowed value
    })

    const items = response.data.items.map(
      (item): Repo => ({
        id: item.id,
        name: item.name,
        owner: item.owner?.login || "Unknown owner",
        stars: item.stargazers_count,
        created_at: item.created_at,
      }),
    )

    return { data: items }
  } catch (error) {
    console.error("Error fetching repositories:", error)
    throw new Error("Failed to fetch data")
  }
}
