import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';

const movieCardProps = {
  imageUrl: 'https://www.themoviedb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
  title: 'Avatar: The Way of Water'
};

describe('movie card', () => {
  it('poster image renders', () => {
    render(<MovieCard imageUrl={movieCardProps.imageUrl} title={movieCardProps.title} />);
    const movieImage = screen.getByAltText('Movie image');
    expect(movieImage).toBeInTheDocument();
  });
  it('should have a title', () => {
    render(<MovieCard imageUrl={movieCardProps.imageUrl} title={movieCardProps.title} />);
    const title = screen.getByText(movieCardProps.title);
    expect(title).toBeInTheDocument();
  });
});
