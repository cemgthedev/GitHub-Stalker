import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { Label } from "@/components/Label";
import { EmailIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "@/icons";
import Link from "next/link";

export function DefaultFooter() {
    return (
        <Footer style={'dark'} className="dark:bg-indigo-600 duration-300">
            <Footer.Row className="flex items-center justify-center">
                <Footer.Column>
                    <hr />
                </Footer.Column>
                <div className="flex gap-1 w-fit">
                    <Link href={"https://github.com/cemgthedev/GitHub-Stalker"} target="_blank" className="hover:bg-indigo-500 dark:hover:bg-cyan-400 p-1 rounded-[4px] duration-150">
                        <GithubIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
                    </Link>
                    <Link href={"https://www.instagram.com/cemg.dev/"} target="_blank" className="hover:bg-indigo-500 dark:hover:bg-cyan-400 p-1 rounded-[4px] duration-150">
                        <InstagramIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/carlos-eduardo-moura-gomes-bb0ab7250/"} target="_blank" className="hover:bg-indigo-500 dark:hover:bg-cyan-400 p-1 rounded-[4px] duration-150">
                        <LinkedinIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
                    </Link>
                    <Link href={"mailto:cemg.the.dev@gmail.com"} target="_blank" className="hover:bg-indigo-500 dark:hover:bg-cyan-400 p-1 rounded-[4px] duration-150">
                        <EmailIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
                    </Link>
                </div>
                <Footer.Column>
                    <hr />
                </Footer.Column>
            </Footer.Row>
            <Footer.Row>
                <Footer.Column className="gap-0">
                    <Heading className="text-slate-50 text-center">GitHub Stalker</Heading>
                    <Label size="xs" className="text-slate-50 text-center">Copyright (c) 2022 Carlos Eduardo de Moura Gomes</Label>
                </Footer.Column>
            </Footer.Row>
        </Footer>
    );
}