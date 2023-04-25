import React from 'react';
import { createMatchMedia } from '../../__tests__/mocks/matchMedia';
import { waitFor, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('header', () => {
  describe('on screens over 600px', () => {
    beforeAll(() => {
      window.matchMedia = createMatchMedia(600);
    });
    it('logo image reders', () => {
      render(<Header />);
      const logoImage = screen.getByAltText('Logo');
      expect(logoImage).toBeInTheDocument();
    });
    it('list of pages renders', () => {
      render(<Header />);
      const pagesList = screen.getAllByRole('listitem');
      expect(pagesList).toHaveLength(3);
    });
    it('should not show burger button', () => {
      render(<Header />);
      const burger = screen.queryByRole('button', { name: /click to open drawer/i });
      expect(burger).not.toBeInTheDocument();
    });
    it('drawer is not visible initially', () => {
      render(<Header />);
      const drawer = screen.queryByTestId('drawer');
      expect(drawer).not.toBeInTheDocument();
    });
    describe('on screens under 600px', () => {
      beforeAll(() => {
        window.matchMedia = createMatchMedia(599);
      });
      it('should not render a list of pages', () => {
        render(<Header />);
        const pagesList = screen.queryAllByRole('listitem');
        expect(pagesList).toHaveLength(0);
      });
      it('should show burger button', () => {
        render(<Header />);
        const burger = screen.getByRole('button', { name: /click to open drawer/i });
        expect(burger).toBeInTheDocument();
      });
      it('drawer is not visible initially', () => {
        render(<Header />);
        const drawer = screen.queryByRole('drawer');
        expect(drawer).not.toBeInTheDocument();
      });
      it('drawer opens on burger button click', async () => {
        const user = userEvent.setup();
        render(<Header />);
        const burgerButton = screen.getByRole('button', { name: /click to open drawer/i });
        await user.click(burgerButton);
        const drawer = screen.getByTestId('drawer');
        expect(drawer).toBeInTheDocument();
      });
      it('drawer hides after cross button click', async () => {
        const user = userEvent.setup();
        render(<Header />);
        const burgerButton = screen.getByRole('button', { name: /click to open drawer/i });
        await user.click(burgerButton);
        const crossButton = screen.getByRole('button', { name: /click to close drawer/i });
        await user.click(crossButton);
        await waitFor(() => {
          const drawer = screen.queryByTestId('drawer');
          expect(drawer).not.toBeInTheDocument();
        });
      });
    });
  });
});
