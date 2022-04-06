/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMonster = /* GraphQL */ `
  query GetMonster($id: ID!) {
    getMonster(id: $id) {
      id
      name
      url
      clear
      challenges
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMonsters = /* GraphQL */ `
  query ListMonsters(
    $filter: ModelMonsterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMonsters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        url
        clear
        challenges
        category
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
