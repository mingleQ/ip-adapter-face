/**
 * v0 by Vercel.
 * @see https://v0.dev/t/U6Of5HHaZ9P
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="bg-gradient-to-br from-pink-300 to-yellow-100 min-h-screen">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-black-600">
              <Link className="" href="/">
              IP Adapter FaceID
              </Link>
              
          </div>
          <div className="space-x-4">
              <Link className="text-black-700 hover:text-gray-900" href="/">
              Home
              </Link>
              <Link className="text-black-700 hover:text-gray-900" href="/playground">
              Playground
              </Link>
              <Link className="text-black-700 hover:text-gray-900" href="#">
              Blogs
              </Link>
          </div>
      
      </nav>
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 ">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
             Generate various styles of images based on a face by  the IP-Adapter-FaceID model
            </h1>
            <p className="text-gray-600 mb-6">
              You upload a photo and enter a prompt like &quot;photo of a woman in red dress in a garden&quot; or &quot;add sunglasses to the face.&quot; 
              The model will then process this input and output an image with the requested modifications.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/playground">
                
                  <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Get started for free
                  </Button>
                
              </Link>

              <Link className="font-bold text-black hover:text-gray-800 py-2 px-4" href="#">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
           <img
                src="/faceid.png" // 确保图片路径是正确的
                alt="Face ID Images"
                className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      {/* <section className="container mx-auto px-6 py-12">
        <iframe
          src="https://multimodalart-ip-adapter-faceid.hf.space/"
          width="100%"
          height="600"
          allowFullScreen
        ></iframe>
      </section> */}
    </div>
  )
}

