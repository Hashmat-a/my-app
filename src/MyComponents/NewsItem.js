import React from "react";

const  NewsItem =(props)=> {
 
    let { title, description,author,date, imageUrl, newsUrl, source } =props;
    return (
      <div>
        <>
          <div className="card">
            <span className="badge badge-secondary">{source}</span>
            <img
              className="card-img-top"
              src={
                imageUrl
                  ? imageUrl
                  : "https://images.moneycontrol.com/static-mcnews/2021/02/Inflation_shutterstock_336372560-770x433.jpg"
              }
              alt="Car"
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" :author} on
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                href={newsUrl}
                target="_blank"
                className="btn btn-dark"
                rel="noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        </>
      </div>
    );
  
}
export default NewsItem