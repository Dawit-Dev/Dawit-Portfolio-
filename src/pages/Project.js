// import React from "react";
// import projects from "../Project.json";

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
//         <div className="row">
//           {projects.map((project) => (
//             <div className="col-md-4" key={project.id}>
//               <div className="card mb-4 shadow-sm">
//                 <img
//                   src={project.image}
//                   className="card-img-top"
//                   alt={project.title}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{project.title}</h5>
//                   <p className="card-text">{project.description}</p>
//                   <div
//                     className="d-flex justify-content-between align-items-center mx-auto"
//                     style={{ width: "200px" }}
//                   >
//                     <div className="btn-group w-100">
//                       <a
//                         href={project.demo}
//                         className="btn btn-sm btn-outline-secondary"
//                       >
//                         Demo
//                       </a>
//                       <a
//                         href={project.repo}
//                         className="btn btn-sm btn-outline-secondary"
//                       >
//                         Code
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;
// import React from "react";
// import { ProjectDetail } from "../ProjectDetail";

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
//         <div className="row">
//           {ProjectDetail.map((project) => (
//             <div className="col-md-4" key={project.id}>
//               <div className="card mb-4 shadow-sm">
//                 <img
//                   src={project.image}
//                   className="card-img-top"
//                   alt={project.title}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{project.title}</h5>
//                   <p className="card-text">{project.description}</p>
//                   <div
//                     className="d-flex justify-content-between align-items-center mx-auto"
//                     style={{ width: "200px" }}
//                   >
//                     <div className="btn-group w-100">
//                       <a
//                         href={project.demo}
//                         className="btn btn-sm btn-outline-secondary"
//                       >
//                         Demo
//                       </a>
//                       <a
//                         href={project.repo}
//                         className="btn btn-sm btn-outline-secondary"
//                       >
//                         Code
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;

/////////////////////////
// import React from "react";
// import { ProjectDetail } from "../ProjectDetail";

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
//         <div className="row row-cols-1 row-cols-md-2">
//           {ProjectDetail.map((project) => (
//             <div className="col mb-4" key={project.id}>
//               <div className="card h-100 shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title">{project.title}</h5>
//                   <img
//                     src={project.image}
//                     className="card-img-top"
//                     alt={project.title}
//                     style={{ transition: "all 0.2s ease-in-out" }}
//                     onMouseOver={(e) =>
//                       (e.currentTarget.style.transform = "scale(1.9)")
//                     }
//                     onMouseOut={(e) =>
//                       (e.currentTarget.style.transform = "scale(1)")
//                     }
//                   />

//                   <p className="card-text">{project.description}</p>
//                   <div
//                     className="d-flex justify-content-between align-items-center mx-auto"
//                     style={{ width: "200px" }}
//                   >
//                     <div className="btn-group w-100">
//                       <a
//                         href={project.demo}
//                         className="btn btn-sm btn-outline-secondary"
//                       >
//                         Demo
//                       </a>
//                       <a
//                         href={project.repo}
//                         className="btn btn-sm btn-outline-secondary"
//                       >
//                         Code
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;
//////
// import React from "react";
// import { ProjectDetail } from "../ProjectDetail";

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
//         <div className="row">
//           {ProjectDetail.map((project) => (
//             <div className="col-md-6 mb-4" key={project.id}>
//               <div className="card shadow-sm">
//                 <div className="card-header bg-white">
//                   <h5 className="card-title">{project.title}</h5>
//                 </div>
//                 <img
//                   src={project.image}
//                   className="card-img-top"
//                   alt={project.title}
//                   style={{ transition: "all 0.2s ease-in-out" }}
//                   onMouseOver={(e) =>
//                     (e.currentTarget.style.transform = "scale(1.9)")
//                   }
//                   onMouseOut={(e) =>
//                     (e.currentTarget.style.transform = "scale(1)")
//                   }
//                 />
//                 <div className="card-body">
//                   <p className="card-text">{project.description}</p>
//                   <div
//                     className="d-flex justify-content-between align-items-center mx-auto"
//                     style={{ width: "200px" }}
//                   >
//                     <div className="btn-group w-100">
//                       <a
//                         href={project.demo}
//                         className="btn btn-sm btn-outline-secondary"
//                       >
//                         Demo
//                       </a>
//                       <a
//                         href={project.repo}
//                         className="btn btn-sm btn-outline-secondary"
//                       >
//                         Code
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;
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
                  <p className="card-text">{project.description}</p>
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
