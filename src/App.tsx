import './App.css';
import { useState, useRef, useEffect } from 'react';

function App() {
  interface Comment {
    id: number;
    personName: string;
    imgUrl: string;
    comment: string;
  }

  const [visibility, setVisibility] = useState<boolean>(false);
  const [person, setPerson] = useState<string | null>(null);
  const [notes, setNotes] = useState<string>('');
  const [comments, setComments] = useState<string>('');
  const [form, setForm] = useState<Comment[]>([]);
  const [date, setDate] = useState('');

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm([
      ...form,
      {
        id: Math.floor(Math.random() * 100 + 1),
        personName: splitArray[1],
        imgUrl: splitArray[0],
        comment: comments,
      },
    ]);
    setComments('');
  };

  const handleDelete = (c_id: number) => {
    const result = form.filter((e) => {
      return e.id !== c_id;
    });
    setForm(result);
  };

  let splitArray: string[] | undefined = person?.split('-');

  const messageEndRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [form]);

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const d = new Date(e.target.value)
    const formattedDate = d.toISOString().split('T')[0];
    setDate(formattedDate)
  };

  return (
    <div className="w-[320px] h-[530px] border-[1px] border-gray-200 rounded-3xl flex flex-col p-4 relative">
      <nav className="flex justify-between mt-2 h-4">
        <img src="/checkIcon.svg"></img>
        <div className="flex gap-2">
          <img src="/deleteIcon.svg"></img>
          <img src="/CloseIcon.svg"></img>
        </div>
      </nav>
      <input
        type="search"
        className="border-[2px] w-[240px] h-[40px] mx-auto rounded-3xl mt-5 text-xl font-bold text-[#E93030] p-2"
        ></input>
      <input
        type="date"
        value={date}
        pattern=''
        className="border-[2px] w-[240px] h-[40px] mx-auto rounded-3xl mt-1 p-2 font-bold"
        onChange={handleDate}
      ></input>
      <div className="flex gap-2 mt-6 ml-1 relative">
        <img src="/person.svg " className="w-[20px]"></img>
        <p className="italic font-medium text-[#5A5A5A] mt-2 whitespace-nowrap ">
          {' '}
          Assign to:
        </p>
        <button
          className="border-2 rounded-xl flex justify-between p-2 ml-4 items-center w-40 text-[#009379]"
          onClick={() => setVisibility(!visibility)}
        >
          <p className="font-medium whitespace-nowrap">
            {splitArray ? (
              <div className="flex gap-[5px]">
                <img
                  src={splitArray[0]}
                  className="rounded-full w-6 h-6 object-cover"
                ></img>
                <p>{splitArray[1]}</p>
              </div>
            ) : (
              'Select Person'
            )}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </button>
        <ul
          className={`absolute right-0 top-[50px] bg-gray-200 divide-y-4 rounded-xl shadow  ${
            visibility ? 'visible' : 'hidden'
          }`}
        >
          <li
            className="hover:bg-gray-300 rounded-md py-2 px-4 flex gap-3 cursor-pointer"
            onClick={() => {
              setPerson('/pfp3.png-Jake Smith');
              setVisibility(!visibility);
            }}
            value={'Jake Smith'}
          >
            <img src="/pfp3.png"></img>
            Jake Smith
          </li>
          <li
            className="hover:bg-gray-300 flex gap-3 rounded-md py-2 px-4 cursor-pointer"
            onClick={() => {
              setPerson('/pfp4.jpg-Chris Pat');
              setVisibility(!visibility);
            }}
          >
            <img
              src="/pfp4.jpg"
              className="rounded-full w-6 h-6 object-cover"
            ></img>
            Chris Pat
          </li>
          <li
            className="hover:bg-gray-300 flex gap-3 rounded-md py-2 px-4 cursor-pointer"
            onClick={() => {
              setPerson('/pfp5.jpg-John Doe');
              setVisibility(!visibility);
            }}
          >
            <img
              src="/pfp5.jpg"
              className="rounded-full w-6 h-6 object-cover"
            ></img>
            John Doe
          </li>
          <li
            className="hover:bg-gray-300 flex gap-3 rounded-md py-2 px-4 cursor-pointer"
            onClick={() => {
              setPerson('/pfp6.jpg-Joe Gold');
              setVisibility(!visibility);
            }}
          >
            <img
              src="/pfp6.jpg"
              className="rounded-full w-6 h-6 object-cover"
            ></img>
            Jeo Gold
          </li>
          <li
            className="hover:bg-gray-300 flex gap-3 rounded-md py-2 px-4 cursor-pointer"
            onClick={() => {
              setPerson('/pfp7.jpg-Mark Wood');
              setVisibility(!visibility);
            }}
          >
            <img
              src="/pfp7.jpg"
              className="rounded-full w-6 h-6 object-cover"
            ></img>
            Mark Wood
          </li>
        </ul>
      </div>
      <div className="flex gap-3 mt-6 ml-1 items-start">
        <img src="/note.svg" className="w-[20px] mt-1"></img>
        <p className="italic font-medium text-[#5A5A5A]"> Note:</p>
        <textarea
          className="rounded-xl border-[1px] h-10 ml-9 resize-none"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>
      <hr className="w-[280px] ml-1 mt-4"></hr>
      <p className="italic font-medium text-[#5A5A5A] mt-2">Comments</p>
      <div className="w-full h-[140px] overflow-y-scroll no-scrollbar">
        {form.map((e) => {
          return (
            <div key={e.id} className="w-full flex justify-between mt-4">
              <div className="flex gap-2">
                <img
                  src={e.imgUrl}
                  className="rounded-full w-6 h-6 object-cover mt-1"
                ></img>
                <div className="flex flex-col w-[150px]">
                  <p className=" text-[12px] text-[#009379] font-semibold">
                    {e.personName}
                  </p>
                  <p className="text-[11px] font-normal whitespace-pre-wrap">
                    {e.comment}
                  </p>
                </div>
              </div>

              <button onClick={() => handleDelete(e.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="14px"
                  fill="#FF6250"
                >
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
              </button>
            </div>
          );
        })}
        <div ref={messageEndRef}></div>
      </div>

      {splitArray && (
        <form
          className="flex gap-3 items-center justify-center absolute bottom-4 ml-2"
          onSubmit={handleOnSubmit}
        >
          <img
            src={splitArray[0]}
            className="rounded-full w-6 h-6 object-cover"
          ></img>
          <input
            className="w-full border-[1px] rounded-xl h-10 p-2"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="leave a Comment..."
          ></input>
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#00000"
            >
              <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
            </svg>
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
