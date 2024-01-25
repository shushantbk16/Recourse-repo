export const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} `}>
      <span>{caption}</span>
      {title}
    </h1>
  )
}

export const TitleSm = ({ title }) => {
  return <h1 >{title}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>
}
