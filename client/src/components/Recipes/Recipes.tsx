import React from 'react'
import { RECIPES_ARRAY } from '../../constants/dietTypes'
import { Recipe } from '..'

import {
  RecipesContainer,
  Container,
  WrapperFilter,
  FilterContainer,
  Filter,
  Select,
  Option,
  WrapperPagination,
  PaginationContainer,
  PaginationButton,
  PaginationNumber,
  PaginationArrowLeft,
  PaginationArrowRight,
  MainWrapper
} from './RecipesStyles'

const Recipes = () => {
  return (
    <Container>
      <MainWrapper>
      <WrapperPagination>
        <PaginationContainer>
          <PaginationButton>
            <PaginationArrowLeft>{`<`}</PaginationArrowLeft>
          </PaginationButton>
          <PaginationNumber>1</PaginationNumber>
          <PaginationNumber>2</PaginationNumber>
          <PaginationNumber>3</PaginationNumber>
          <PaginationNumber>4</PaginationNumber>
          <PaginationNumber>5</PaginationNumber>
          <PaginationNumber>6</PaginationNumber>
          <PaginationNumber>7</PaginationNumber>
          <PaginationNumber>8</PaginationNumber>
          <PaginationNumber>9</PaginationNumber>
          <PaginationNumber>10</PaginationNumber>
          <PaginationButton>
            <PaginationArrowRight>{`>`}</PaginationArrowRight>
          </PaginationButton>
        </PaginationContainer>
      </WrapperPagination>
      <WrapperFilter>
        <FilterContainer>
          <Filter>Sort</Filter>
          <Select>
            <Option>A-Z</Option>
            <Option>Z-A</Option>
          </Select>
        </FilterContainer>
      </WrapperFilter>
      </MainWrapper>
      <RecipesContainer>
        {RECIPES_ARRAY.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} />
        ))}
      </RecipesContainer>
    </Container>
  )
}

export default Recipes