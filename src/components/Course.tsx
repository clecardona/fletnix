//@ts-nocheck
//NPM Packages
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

//Local imports
import { getById } from "scripts/methods";
import { useCourses } from "state/CoursesProvider";
import play from "assets/icns/play.svg";
import Files from "./shared/Files";
import Links from "./shared/Links";
import useFetch from "hooks/useFetch";
import Spinner from "./shared/Spinner";
import BoxError from "./shared/BoxError";
import Modal from "./shared/Modal";

export default function Course() {
  //Global state
  const { dispatchCourses } = useCourses();
  const courses = useFetch("courses", dispatchCourses);
  //Local states
  const { courseID } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  // Constants
  const course = getById(courseID, courses.data);
  const DEFAULT_IMAGE_URL =
    "https://cdn.dribbble.com/users/2441743/screenshots/15643454/media/0e2498180f43d6bd007b72bc94a3f030.jpg?compress=1&resize=800x300";

  return (
    <main className="page-course">
      {courses.loading === true && <Spinner />}
      {courses.error !== null && <BoxError />}
      {(!courses.loading && courses.error) === null && (
        <>
          <div className="container">
            <h2 className="title">{course.title}</h2>
            <img
              className="illustration"
              src={course.imageURL ? course.imageURL : DEFAULT_IMAGE_URL}
              alt="img"
            />
            <p className="description">{course.content}</p>

            {course.links && <Links data={course.links} />}
            {course.files && <Files data={course.files} />}
            <Link to={"/playlist/" + courseID} className="btn btn-video">
              <h4>
                Video playlist <img src={play} alt="" />
              </h4>
            </Link>
          </div>
          <div className="buttons">
            <Link to="/" className="btn btn-main btn-180">
              <h4>Back to courses</h4>
            </Link>
            <button
              className="btn btn-ghost btn-180"
              onClick={() => setIsOpen(true)}
            >
              <h4>Edit video playlist</h4>
            </button>
            <Modal
              type="edit-playlist"
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              data={course}
            >
              Edit video playlist
            </Modal>
          </div>
        </>
      )}
    </main>
  );
}
