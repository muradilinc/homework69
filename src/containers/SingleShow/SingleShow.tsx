import {useAppSelector} from '../../redux/hooks';
import {selectorSingleShow} from '../../store/searchShowsSlice';
import htmlViewer from 'html-react-parser';

const placeholderImage = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';

const SingleShow = () => {
  const singleShow = useAppSelector(selectorSingleShow);

  if (!singleShow) {
    return;
  }

  return (
    <div className="w-[50%] my-5 mx-auto">
      <div className="flex justify-between">
        <img
          src={singleShow.image ? singleShow.image.original : placeholderImage}
          alt="image"
          className="w-[200px] h-[300px]"
        />
        <div>
          <h2>Name show: <span className="text-xl">{singleShow.name}</span></h2>
          <p>Status Show: {singleShow.status}</p>
          <p>Language: {singleShow.language}</p>
          {
            singleShow.genres.length !== 0 ?
              <p>Genres: {singleShow.genres.map((item) => (<span key={item} className="me-[5px]">{item}</span>))}</p>
              :
              null
          }
        </div>
      </div>
      <div className="mt-3">
        <h4 className="text-xl">Description:</h4>
        {htmlViewer(singleShow.summary ? singleShow.summary : '<p>no description<p>')}
      </div>
    </div>
  );
};

export default SingleShow;