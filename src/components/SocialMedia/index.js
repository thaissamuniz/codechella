const SocialMedia = ({link, socialMediaIcon, imge}) => {
    return (
        <li>
            <img src={imge} alt=''/>
            <a href={link} className={socialMediaIcon}></a>
        </li>
    )
}

export default SocialMedia;