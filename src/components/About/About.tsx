import { FC } from "react"

const About: FC = () => {
  return (
    <div className="about">
      <h3>About Job Portal:</h3>
      <section>
        This Portal is an attempt to improve job-search for front-end web-developers.
        This is a recruiter-free zone. You connect directly with the companies.
        No middleman!
      </section>
      <section>
        This portal lets you filter your search results more accurately than any
        other job search site. This means less false-positives so you can find
        the job you want more easily.
      </section>
      <section>
        You can filter on the exact tech stack you're looking for, including
        specifying which versions you want. You can also specify which
        tech-stack you don't want.
      </section>
      <section>
        10 Examples of filters this job portal has that others don't.
        <ol>
          <li>How much does the job pay?</li>
          <li>How big is the company?</li>
          <li>What is the commute time and distance?</li>
          <li>What benefits does the job offer?</li>
          <li>Is the site internal and/or external?</li>
          <li>How much education is required?</li>
          <li>
            How much of the website or app is mobile, responsive or PC only?
          </li>
          <li>How much accessibility is required?</li>
          <li>What project methodology do they use? Waterfall? Agile? etc.</li>
          <li>Do they allow pets?</li>
        </ol>
      </section>
    </div>
  )
}

export default About
