/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMonster = /* GraphQL */ `
  mutation CreateMonster(
    $input: CreateMonsterInput!
    $condition: ModelMonsterConditionInput
  ) {
    createMonster(input: $input, condition: $condition) {
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
export const updateMonster = /* GraphQL */ `
  mutation UpdateMonster(
    $input: UpdateMonsterInput!
    $condition: ModelMonsterConditionInput
  ) {
    updateMonster(input: $input, condition: $condition) {
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
export const deleteMonster = /* GraphQL */ `
  mutation DeleteMonster(
    $input: DeleteMonsterInput!
    $condition: ModelMonsterConditionInput
  ) {
    deleteMonster(input: $input, condition: $condition) {
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
