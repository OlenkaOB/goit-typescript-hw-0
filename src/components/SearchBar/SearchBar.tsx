import React, { FC, FormEvent } from 'react';
import s from './SearchBar.module.css';
import toast from 'react-hot-toast';

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector<HTMLInputElement>('input[name="searchInput"]');

    const inputValue = input?.value.trim() || '';
    if (inputValue === '') {
      toast.error('Please enter the field', {
        style: {
          backgroundColor: '#D924247F',
          color: '#fff',
        },
      });
      return;
    }

    onSubmit(inputValue);
    form.reset();
  };
  return (
    <header className={s.header}>
      <form className={s.form} name="searchForm" onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
