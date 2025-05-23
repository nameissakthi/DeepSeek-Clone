'use client'
import { useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets.js"
import Sidebar from "@/components/Sidebar";
import PromptBox from "@/components/PromptBox";

export default function Home() {

	const [expand, setExpand] = useState(false)
	const [messages, setMessages] = useState([])
	const [isLoading, setIsLoading] = useState(false)

  return (
	<div>
		<div className="flex h-screen">
			<Sidebar expand={expand} setExpand={setExpand} />
			<div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
				<div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
					<Image src={assets.menu_icon} alt="Menu Icon" className="rotate-180" onClick={()=>(expand ? setExpand(false):setExpand(true))} />
					<Image src={assets.chat_icon} alt="Menu Icon" className="opacity-70" />
				</div>
				{
					messages.length===0?
					<>
						<div className="flex items-center gap-3">
							<Image src={assets.logo_icon} alt="DeepSeek Logo" className="h-16" />
							<p className="text-2xl font-medium">Hi, I'm DeepSeek</p>
						</div>
						<p className="text-sm mt-2">How can i help you today?</p>
					</>
					:
					<></>
				}

				<PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />
				<p className="text-xs absolute bottom-1 text-grey-500">AI-generated, for reference only</p>
			</div>
		</div>
	</div>
  );
}
