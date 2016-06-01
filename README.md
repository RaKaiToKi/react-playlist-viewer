# react Playlist Viewer
React learning course

## Installation

```console
$ git clone https://github.com/kimak/react-playlist-viewer.git
$ npm i
```
## Development

```console
npm start
```

Then open in your browser at http://localhost:8080

## Production

To generate a minified bundle for prod environment

```console
$ npm run build
```
## Project Final

Additional features :

- Top Tracks
- Duration of tracks
- Preview of Tracks
- Link to listen the full track on spotify
- Add some CSS...

On the artist page, I try to details the most as I can the artist with the top tracks and the duration, preview and link to spotify for each track. I used the Spotify API, and have to create a reducer to get the datas I wanted, and for the duration, I had to convert the data given by the API. After that I try to custumize a bit the design of the page.

Before that, I tried to insert the video of the top track, but I got several problems, so I dropped that part of the project. 