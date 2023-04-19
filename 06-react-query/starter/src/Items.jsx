import { useQuery } from '@tanstack/react-query';
import customFetch from './utils';
import SingleItem from './SingleItem';


const Items = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/')
      return data
    }
  })

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading....</p>
  }

  // if (isError) {
  //   return <p style={{ marginTop: '1rem' }}>There was an Error</p>
  // }

  if (error) {
    console.log(error)
    return <p style={{ marginTop: '1rem' }}>{error.response.data}</p>

  }

  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
