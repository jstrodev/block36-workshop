# Jukebox Mini

You've been hired to create the backend for a digital music service. The team's still working on getting access to tracks, but for now, you can get started on the playlist functionality.

## Database

![Visual representation of the database schema linked below](/docs/schema.svg)\
_[textual representation of the database schema in DBML](/docs/schema.dbml)_

1. Create a new Postgres database named `jukebox-mini`.
2. Initialize Prisma and connect it to the database.
3. Define the models according to the schema above. One User has many Playlists. Each Playlist has one User as its owner.
4. Seed the database with at least 3 users. Each user should be seeded with at least 5 playlists.

## API

Once your database is properly seeded, build an Express app that serves the following routes. Use the appropriate body-parsing and error-handling middleware!

- `GET /users` sends array of all users
- `GET /users/:id` sends the user specified by id.
  - The response should include all playlists owned by the user.
- `POST /users/:id/playlists` creates a new playlist owned by the user specified by id
