import React from "react";
import { ProjectDetail } from "../ProjectDetail";

const Project = () => {
  return (
    <div className="container-fluid p-0">
      <div className="jumbotron jumbotron-fluid bg-dark text-white mb-0">
        <div className="container">
          <h1 className="display-4">Projects</h1>
          <p className="lead">Check out some of my latest projects below.</p>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          {ProjectDetail.map((project) => (
            <div className="col-md-6 mb-4" key={project.id}>
              <div
                className="card shadow-sm h-100"
                style={{ transition: "all 0.2s ease-in-out" }}
              >
                <div className="card-header bg-white">
                  <h5 className="card-title">{project.title}</h5>
                </div>
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ transition: "all 0.2s ease-in-out" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.6)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "left" }}>
                    {project.description}
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center mx-auto"
                    style={{ width: "200px" }}
                  >
                    <div className="btn-group w-100">
                      <a
                        href={project.demo}
                        className="btn btn-sm btn-outline-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                      <a
                        href={project.repo}
                        className="btn btn-sm btn-outline-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .card:hover {
            position: relative;
            z-index: 2;
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Project;
 
// import React from "react";
// import { ProjectDetail } from "../ProjectDetail";
// import { Carousel } from "react-bootstrap";

// const Project = () => {
//   return (
//     <div className="container-fluid p-0">
//       <div className="jumbotron jumbotron-fluid bg-dark text-white mb-0">
//         <div className="container">
//           <h1 className="display-4">Projects</h1>
//           <p className="lead">Check out some of my latest projects below.</p>
//         </div>
//       </div>
//       <div className="container mt-5 mb-5">
//         <Carousel fade={true}>
//           {ProjectDetail.map((project) => (
//             <Carousel.Item key={project.id}>
//               <div className="d-flex flex-column align-items-center">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="d-block w-75 mb-4"
//                 />
//                 <h3>{project.title}</h3>
//                 <p style={{ width: "75%", textAlign: "left" }}>
//                   {project.description}
//                 </p>
//                 <div className="btn-group mt-2">
//                   <a
//                     href={project.demo}
//                     className="btn btn-primary"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Demo
//                   </a>
//                   <a
//                     href={project.repo}
//                     className="btn btn-secondary"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Code
//                   </a>
//                 </div>
//               </div>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Project;

