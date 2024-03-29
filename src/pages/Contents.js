import { Link } from "react-router-dom";

function Contents() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mb-4">Contentsページ</h1>
      <div className="text-blue-500 hover:underline text-center my-1.5">
        <Link to={'/'}>Homeページを開く</Link>
      </div>
      <div className="text-blue-500 hover:underline text-center my-1.5">
        <Link to={'/about'}>Aboutページを開く</Link>
      </div>
    </>
  );
}

export default Contents;