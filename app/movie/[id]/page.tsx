import Image from 'next/image';
import { Movie } from '@/app/interfaces';

async function getData(id: string) {
  const url = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        accept: 'application/json',
        Authorization: process.env.MOVIEDB_API as string,
      },
      next: {
        revalidate: 60,
      },
    }
  );

  return url.json();
}

export default async function MovieId({ params }: { params: { id: string } }) {
  const data: Movie = await getData(params.id);

  return (
    <div className='min-h-screen p-10'>
      <div className='h-[40vh] relative'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt='movie image'
          className='object-cover w-full rounded-lg'
          fill
        />
      </div>
      <h1 className='text-4xl font-bold text-center pt-5'>{data.title}</h1>
    </div>
  );
}
