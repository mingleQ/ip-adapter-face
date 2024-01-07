import Link from "next/link"

export default function Page() {
    return (

        <div className="bg-gradient-to-br from-pink-300 to-yellow-100 min-h-screen">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-black-600">
                <Link className="" href="/">
                IP Adapter FaceID
                </Link>
                
            </div>
            <div className="space-x-4">
                <Link className="text-gray-700 hover:text-gray-900" href="/">
                Home
                </Link>
                <Link className="text-gray-700 hover:text-gray-900" href="/playground">
                Playground
                </Link>
                <Link className="text-gray-700 hover:text-gray-900" href="#">
                Blogs
                </Link>
            </div>
        
            </nav>


            {/* 主内容区域 */}
            <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
                {/* 操作指南部分 */}
                <aside className="lg:w-1/4">
                <div className="sticky top-20">
                    <h1 className="text-lg font-semibold mb-4">Avatar Generation Guidelines</h1>
                    <ol className="list-decimal list-inside space-y-2">
                    <li>Step1: Upload avatar</li>
                    <li>Step2: Fill in the prompts， e.g. photo of a woman in red dress in a garden </li>
                    <li>Step3: Select generation type</li>
                    <li>Step4: Submit</li>
                    </ol>
                </div>
                </aside>

                {/* 内容区域 */}
                <section className="lg:w-3/4">
                {/* 这里是您现有的内容和组件 */}
                <iframe
                    src="https://multimodalart-ip-adapter-faceid.hf.space/"
                    style={{
                    width: '100%',
                    height: '100vh',
                    border: 'none',
                    margin: '0',
                    padding: '0',
                    overflow: 'hidden'
                    }}
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                ></iframe>
                </section>
            </div>

            <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row">
                {/* 左侧提示语部分 */}
                <div className="lg:w-1/4 lg:pr-10">
                <h2 className="text-xl font-bold mb-4">Prompt suggestions</h2>
                <ul className="space-y-4">
                    {/* 这里列出您的提示语 */}
                    <li className="border-b-2 border-black-200 pb-2">Ethereal woman in a red gown, standing among roses in a twilight garden, her hair and dress flowing, exuding serene beauty.</li>
                    <li className="border-b-2 border-black-200 pb-2">Handsome man in a sharp suit, relaxed in a classical garden at dawn, embodying sophistication and thoughtful allure.</li>
                    <li className="border-b-2 border-black-200 pb-2">Charming woman in a glittering red cocktail dress on a city-view rooftop garden, radiating confidence under the stars</li>
                    <li className="border-b-2 border-black-200 pb-2">Ruggedly attractive man in smart outdoor wear, in a mountain garden by a stream, the picture of tranquility and strength</li>
                    {/* ...更多提示语 */}
                </ul>
                </div>
                {/* 右侧iframe部分 */}
                <div className="lg:w-3/4 lg:pl-10 mt-10 lg:mt-0">
                <iframe
                    src="https://openskyml-fast-sdxl-stable-diffusion-xl.hf.space" // 替换为实际的iframe源
                    className="w-full h-[600px] border-none" // 设置合适的高度
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
                </div>
            </div>
            
        </div>
        
    )
}