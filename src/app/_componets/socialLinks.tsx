import Link from "next/link"
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutTubeIcon } from '@/components/iconsSocial';
//let icons = { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutTubeIcon }

export default function SocialLinks({ icon: Icon, ...props }: any) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon className='h-6 w-6 '></Icon>
        </Link>
    )
}
