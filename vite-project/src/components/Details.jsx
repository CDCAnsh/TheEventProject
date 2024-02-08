import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EventsList from "../assets/details.json";
import "./TimeIcon.css";

const Details = () => {
  return (
    <div>
      {/* ----------------Top Image-------------------*/}
      {EventsList.map(event =>
        <div key={event.eventId}>
          <div className="d-flex justify-content-center h-5  m-4">
            <img
              src={event.imageUrl}
              className="object-fit-contain border border-0 rounded"
              alt="Centered Image"
              width="942px"
              height="390px"
            />
          </div>

          {/*---------------------Left Session -----------------------*/}

          <div
            className="contain d-flex justify-content-between m-4 "
            key={event.eventId}
          >
            <div
              className="left border border-dark flex-grow-1 me-3 p-4 rounded-5"
              style={{
                width: "645px"
                // height: "828px"
              }}
            >
              <div className="fl">
                <h1>
                  {event.title}
                </h1>
                <div className="d-flex p-3">
                  {/* <div className="container d-flex me-0"> */}
                  <div className="row ">
                    <div className="col p-0 ">
                      <img
                        src={event.image1Url}
                        alt="Image 1"
                        className="img-responsive rounded-circle"
                        width="30px"
                        height="30px"
                      />
                    </div>
                    <div className="col p-0 ">
                      <img
                        src={event.image2Url}
                        alt="Image 2"
                        className="img-responsive rounded-circle"
                        width="30px"
                        height="30px"
                        style={{ marginLeft: "-40%" }}
                      />
                    </div>
                    <div className="col p-0">
                      <img
                        src={event.image3Url}
                        alt="Image 3"
                        className="img-responsive rounded-circle"
                        width="30px"
                        height="30px"
                        style={{ marginLeft: "-60%" }}
                      />
                    </div>
                    {/* </div> */}
                  </div>
                  <p className="host align-self-end">
                    Hosted By {event.mentorName1}, {event.mentorName2} CDC
                    Community
                  </p>
                </div>
              </div>

              <div className="date d-flex my-2">
                <div className="icon">
                  {/* <em>Saturday</em> */}
                  <strong>
                    {event.Month}
                  </strong>
                  <span>
                    {event.Date}
                  </span>
                </div>
                <div className="date&time fs-6 ms-2">
                  <div>
                    <dt>
                      {event.Date} {event.Month} {event.Years}
                    </dt>
                  </div>
                  <div>
                    {event.Time}
                  </div>
                </div>
              </div>
              <div className="loc d-flex ">
                <PlaceOutlinedIcon
                  style={{ width: "41px", height: "41px", marginRight: "5px" }}
                />
                <div>
                  <dt>{event.location.city}</dt>
                  <dd>
                    {event.location.State} , {event.location.country}
                  </dd>{" "}
                </div>
              </div>
              <div className="registration w-100  border border-black text-center rounded-3 my-4 p-3">
                <span>Not Registerd</span>
                <div>
                  <a href="#">Click Here to Registerd</a>
                </div>
              </div>

              <p className="para d-flex align-items-start justify-content-center">
                {event.des}
              </p>
            </div>

            {/* ------------------Right Session------------------- */}
            <div
              className="right ms-3 "
              style={{
                width: "314px"
              }}
            >
              <div className="shadow-sm mb-4 bg-dark-subtle rounded-5 p-4">
                <h2>Speakers</h2>
                <div className="main d-flex">
                  <div className="instructor w-75">
                    <dt className="n1 fs-4 m-0">
                      {event.mentorName1}
                    </dt>
                    <dd className="data w-75">Instructor at CDC Company</dd>
                    <div className="media d-flex">
                      <div className="twitter me-3">
                        <a
                          href="https://twitter.com/i/flow/login"
                          className="twitter text-dark"
                        >
                          <XIcon />
                        </a>
                      </div>
                      <a
                        href="https://web.telegram.org/k/"
                        className="telegram text-dark"
                      >
                        <TelegramIcon />
                      </a>
                    </div>
                  </div>
                  <div className="image align-self-start w-25">
                    <img
                      src={event.image1Url}
                      width="50px"
                      alt="#"
                      className="rounded-circle"
                    />
                  </div>
                </div>

                <div className="main d-flex mt-3">
                  <div className="instructor w-75">
                    <dt className="n1 fs-4">
                      {event.mentorName2}
                    </dt>
                    <dd className="data w-75">
                      Open Source dev at CDC Company
                    </dd>
                    <div className="media d-flex">
                      <div className="twitter me-3">
                        <a
                          href="https://twitter.com/i/flow/login"
                          className="twitter text-dark"
                        >
                          <XIcon />
                        </a>
                      </div>
                      <a
                        href="https://web.telegram.org/k/"
                        className="telegram text-dark"
                      >
                        <TelegramIcon />
                      </a>
                    </div>
                  </div>
                  <div className="image align-self-center w-25">
                    <img
                      src={event.image2Url}
                      width="50px"
                      alt="#"
                      className="rounded-circle"
                    />
                  </div>
                </div>
              </div>

              {/* --------------------------Map Section-------------------- */}
              <div
                className="map my-5 bg-dark-subtle"
                style={{ borderRadius: "20px", alignItems: "end" }}
              >
                <div className="location" style={{ margin: "0", padding: "0" }}>
                  <div
                    className="icons d-flex align-items-center h5 p-1 ms-1"
                    style={{ margin: "0", padding: "0" }}
                  >
                    <PlaceOutlinedIcon />
                    Location
                  </div>
                  <div className="loc align-self-end">
                    <iframe
                      src={event.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{
                        border: "0",
                        marginBottom: "0",
                        padding: "0",
                        borderBottomLeftRadius: "15px",
                        borderBottomRightRadius: "15px",
                        margin: "0"
                      }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
