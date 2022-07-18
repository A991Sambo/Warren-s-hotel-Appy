import "./AirbnbHome.css";
import BookPage from "./Book";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBnBhUI_oEO_jrYLpCIoej3FtyGf1eGZa4",
  authDomain: "budget-app-ceb77.firebaseapp.com",
  databaseURL: "https://budget-app-ceb77-default-rtdb.firebaseio.com/",
  projectId: "budget-app-ceb77",
  storageBucket: "budget-app-ceb77.appspot.com",
  messagingSenderId: "39875310589",
  appId: "1:39875310589:web:15d8de3702931d0f931f94",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

const Home = () => {
  const [valid, setvalid] = useState(true);
  const [hide, sethide] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const book_date = document.getElementById("book-date");
    const book_time = document.getElementById("book-time");

    const leave_date = document.getElementById("leave-date");
    const leave_time = document.getElementById("leave-time");

    if (
      !book_date.value ||
      !book_time.value ||
      !leave_date.value ||
      !leave_time.value
    ) {
      alert("Please fill all the fields");
    } else {
      writeUserData();
      function writeUserData() {
        const db = getDatabase();
        set(ref(db, "data/"), {
          bookingdate: book_date.value,
          bookingtime: book_time.value,
          leave_date: leave_date.value,
          leave_time: leave_time.value,
        });
      }
      alert("Your booking has been made");
      const BookPageDiv = document.querySelector(".box");
      const container = document.querySelector(".container");
      setvalid(!valid + BookPageDiv.classList.add("show"));
      sethide(!hide + container.classList.add("hide"));
    }
  };
  return (
    <>
      <BookPage />
      <div className="container">
        <div className="content">
          <div className="text">Book Now</div>
          <div className="form2">
            <div className="txt">Date & Time you would like to Stay</div>
            <form action="" onSubmit={handleSubmit}>
              <div className="inputData">
                <input type="date" name="" id="book-date" />
              </div>
              <div className="inputData">
                <input type="time" name="" id="book-time" />
              </div>
              <div className="txt">Date & Time you would like to leave</div>
              <div className="inputData">
                <input type="date" name="" id="leave-date" />
              </div>
              <div className="inputData">
                <input type="time" name="" id="leave-time" />
              </div>
              <div className="book">
                <button type="submit">Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
