import Link from "next/link"

export default async function HomePage() {

  return (
    <div>
      <h1>Noah <span>Riley</span> Pittman</h1>
      <h3>Full Stack Developer, Multi-Faceted Creative</h3>
      <p>
        I build websites and applications with React & Typescript. I like going to the gym, and spending time with my wife.
        <br />
        I&apos;m currently a student, and I do freelance design & development work. If you&apos;re interested in working with me, feel free to reach out!
      </p>
      <h3>Connect</h3>
      <ul>
        <Link href={"/"}>
          <li>Email</li>
        </Link>
        <Link href={"/"}>
          <li>Github</li>
        </Link>
        <Link href={"/"}>
          <li>Linkedin</li>
        </Link>
      </ul>
      <h3>Projects</h3>
      <ul>
        <li>
          <h4>Project Title</h4>
          <p>Project description</p>
          <div>
            <span>stack</span>
            <span>stack</span>
            <span>stack</span>
          </div>
        </li>
        <li>
          <h4>Project Title</h4>
          <p>Project description</p>
          <div>
            <span>stack</span>
            <span>stack</span>
            <span>stack</span>
          </div>
        </li>
        <li>
          <h4>Project Title</h4>
          <p>Project description</p>
          <div>
            <span>stack</span>
            <span>stack</span>
            <span>stack</span>
          </div>
        </li>
      </ul>
      <h3>Writing</h3>
      <ul>
        <li>
          <h4>Title</h4>
          <p>Description</p>
        </li>
        <li>
          <h4>Title</h4>
          <p>Description</p>
        </li>
        <li>
          <h4>Title</h4>
          <p>Description</p>
        </li>
      </ul>
    </div>
  )
}
