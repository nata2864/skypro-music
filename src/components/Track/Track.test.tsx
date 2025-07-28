import { Track } from '@/sharesTypes/sharesTypes';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { formatTime } from '@/utils/helper';
import TrackItem from './Track';
import ReduxProvider from '@store/ReduxProvider';

const mockTrack: Track = {
  _id: 8,
  name: 'Chase',
  author: 'Alexander Nakarada',
  release_date: '2005-06-11',
  genre: ['Классическая музыка'],
  duration_in_seconds: 205,
  album: 'Chase',
  logo: null,
  track_file:
    'https://webdev-music-003b5b991590.herokuapp.com/media/music_files/Alexander_Nakarada_-_Chase.mp3',
  staredUser: [],
};

const mockTracks: Track[] = [
  {
    _id: 8,
    name: 'Chase',
    author: 'Alexander Nakarada',
    release_date: '2005-06-11',
    genre: ['Классическая музыка'],
    duration_in_seconds: 205,
    album: 'Chase',
    logo: null,
    track_file:
      'https://webdev-music-003b5b991590.herokuapp.com/media/music_files/Alexander_Nakarada_-_Chase.mp3',
    staredUser: [],
  },
  {
    _id: 9,
    name: 'Open Sea epic',
    author: 'Frank Schroter',
    release_date: '2019-06-12',
    genre: ['Классическая музыка'],
    duration_in_seconds: 165,
    album: 'Open Sea epic',
    logo: null,
    track_file:
      'https://webdev-music-003b5b991590.herokuapp.com/media/music_files/Frank_Schroter_-_Open_Sea_epic.mp3',
    staredUser: [],
  },
];

describe('Track component', () => {
  test('Отрисовывает данные трека', () => {
    render(
      <ReduxProvider>
        <TrackItem item={mockTrack} playList={mockTracks} />
      </ReduxProvider>,
    );
    expect(screen.getAllByText(mockTrack.author).length).toBeGreaterThan(0);
    expect(screen.getAllByText(mockTrack.name).length).toBeGreaterThan(0);
    expect(screen.getAllByText(mockTrack.album).length).toBeGreaterThan(0);
    expect(
      screen.getAllByText(formatTime(mockTrack.duration_in_seconds)).length,
    ).toBeGreaterThan(0);
  });
});
