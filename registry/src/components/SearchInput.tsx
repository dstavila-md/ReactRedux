// import { useState } from 'react';
import { useNavigate, Form } from 'react-router-dom';

export default function SearchInput() {
  // const [term, setTerm] = useState('');
  // const navigate = useNavigate();

	// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	navigate(`/search?term=${term}`)
	// }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input value={term} onChange={(e) => setTerm(e.target.value)} />
  //   </form>
  // );

	return <Form action="/search">
		<input name="term"/>
	</Form>
}
