
import aws from '../../assets/skills/aws.svg'
import azure from '../../assets/skills/azure.svg'
import css from '../../assets/skills/css.svg'
import git from '../../assets/skills/git.svg'
import html from '../../assets/skills/html.svg'
import javascript from '../../assets/skills/javascript.svg'
import materialui from '../../assets/skills/materialui.svg'
import microsoftoffice from '../../assets/skills/microsoftoffice.svg'
import photoshop from '../../assets/skills/photoshop.svg'
import php from '../../assets/skills/php.svg'
import react from '../../assets/skills/react.svg'
import tailwind from '../../assets/skills/tailwind.svg'
import mongoDB from '../../assets/skills/mongoDB.svg'

const sillImg = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'tailwind':
            return tailwind;
        case 'php':
            return php;
        case 'aws':
            return aws;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'azure':
            return azure;
        case 'microsoftoffice':
            return microsoftoffice;
        case 'mongoDB':
            return mongoDB;
        default:
            break;
    }
}

export default sillImg
