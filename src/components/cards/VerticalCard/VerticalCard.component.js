import Image from 'next/image';
import PropTypes from 'prop-types';
import Paper from '../../utils/Paper';

const data = {
  tags: ['js', 'css'],
  title: 'Test card component',
  body: 'Adipisicing deserunt esse ea consequat et. Consequat quis commodo adipisicing enim ipsum proident. Eiusmod ea irure dolore elit exercitation quis. Ea cillum laborum proident ut nostrud consequat sit minim tempor minim.',
  author: 'Idle Dose',
  time: '3min',
};

const VerticalCard = ({ tags, title, body, author, time }) => (
  <Paper className="p-0 w-96">
    {/* header/image */}

    <div className="rounded-t-m">
      <Image
        src="https://images.unsplash.com/photo-1650295751050-b184e54e177c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="card_image"
        width={500}
        height={400}
        className="rounded-t-md  object-cover transition hover:scale-110"
      />
    </div>
    {/* body */}
    <div className="p-6 pt-1 flex-col">
      <div className=" ">
        <ul className="flex">
          {tags.map(tag => (
            <li
              key={tag}
              className=" px-4 bg-green-200 m-1  rounded-3xl border-solid border-2 border-green-400"
            >
              {tag}
            </li>
          ))}
        </ul>
        <h4 className="text-xl py-1">{title}</h4>
        <p className="text-sm text-slate-600 py-1 ">{body}</p>
      </div>
      {/* footer */}
      <hr className="my-4" />
      <div className="flex justify-end content-center items-center gap-4">
        {/* <div className=""> */}
        <Image
          src="https://images.unsplash.com/photo-1650295751050-b184e54e177c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="card_image"
          width={35}
          height={35}
          className="rounded-full object-cover shadow-md "
        />
        {/* </div> */}
        <div>
          <h5 className="text-sm">{author}</h5>
          <small>{time}</small>
        </div>
      </div>
    </div>
  </Paper>
);

VerticalCard.propTypes = {
  tags: PropTypes.array,
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string,
};

VerticalCard.defaultProps = {
  tags: data.tags,
  title: data.title,
  body: data.body,
  author: data.body,
  time: data.time,
};

export default VerticalCard;
