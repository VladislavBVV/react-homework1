

export const Statistics = ({ stats, title }) => { 
    return (
      <section className="statistics">
        {/* <h2 className="title">Upload stats</h2> */}

        {title && <h2>{title}</h2>}

        <ul className="stat-list" >

        {stats.map(stat => {
          return (
           <li className="item" key={stat.id}>
            <span className="label">{stat.label} </span>
            <span className="percentage">{stat.percentage}</span>
          </li>
          )
        })}
        
        






          {/* <li className="item">
            <span className="label">.docx </span>
            <span className="percentage">14% </span>
          </li>
          <li className="item">
            <span className="label">.mp3 </span>
            <span className="percentage">14%</span>
          </li>
          <li className="item">
            <span className="label">.pdf</span>
            <span className="percentage"> 41%</span>
          </li>
          <li className="item">
            <span className="label">.mp4</span>
            <span className="percentage"> 12%</span>
          </li> */}
        </ul>
      </section>
    );
}






// ReactDOM.render(Statistics, document.querySelector('#root'))