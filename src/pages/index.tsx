import Head from "next/head";
import Navbar from "~/components/navbar";
import { type Translation } from "translations/translations";
import mgl from "translations/mgl";
import en from "translations/en";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { BsCamera } from "react-icons/bs"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { api } from "~/utils/api";


// keywordoor haih taglaad haih
// contains query keyword
// iphonecharger geh meteer buh charachter oruulj haih

interface Category {
  id: number,
  name: string
}


export default function Home() {

  const categories = api.category.getAll.useQuery();
  const getItems = api.getItem.getAll.useQuery();

  const [language, setLanguage] = useState('mgl')
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const translation: Translation = language === 'mgl' ? mgl : en
  console.log(categories)

  return (
    <>
      <Head>
        <title>UFE Lost n Found</title>
      </Head>
      <main className="bg-white h-screen">
        <div className="fixed z-10 w-full">
          <Navbar />
        </div>
        <div className="w-screen h-[40vh]  flex items-center justify-center" style={{ backgroundImage: `url('/bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
          <div className="">
            <div className="">
              <p className="text-white m-36 text-uppercase font-bold text-4xl">{translation.mainText}</p>
            </div>

            <div className="flex bg-white p-2 rounded-xl w-[600px] m-0 justify-between">
              <input type="text" placeholder={translation.searchPlaceholder} className="h-10 text-xl outline-none w-[70%]" />
              <button className="px-2 rounded-xl border-2 border-brand"><IoIosSearch className='text-2xl font-bold text-brand' /></button>
              <button onClick={onOpen} className="bg-brand text-white rounded-xl p-2">{translation.foundButton}</button>
            </div>
          </div>
        </div>
        <div className="p-10">
        <h2 className="text-brand font-bold text-3xl flex justify-center p-10">Сүүлд олдсон эд зүйлс</h2>
          <div className="grid grid-cols-4 gap-10">
         
            {getItems.data?.map((item) => (
              <div key={item.id} className="bg-white shadow-lg p-4 rounded-lg">
                <img src="bg2.jpeg" alt="" className="rounded-xl"/>
                <p className="mt-5 font-bold text-2xl">{item.itemName}</p>
                <p className=" text-lg">{item.itemDescription}</p>
                <p className="text-slate-400">{item.createdAt.toLocaleString()}</p>
                <button className="bg-brand text-white font-bold p-2 rounded-xl mt-5">Хүсэлт илгээх</button>
              </div>
            ))}
          </div>
          <div className="">
           
          </div>
          <div className="flex p-10 justify-between m-0 mx-[10%]">
            <div className="items-center">
              <div className="flex justify-center items-center">
                <FaRegStar className='text-white bg-brand rounded-full p-3 text-5xl' />
              </div>
              <div className="flex font-bold justify-center items-center my-5 text-3xl">
                <p>Хаясан зүйлс</p>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-[#26233899] w-[50%] text-center">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our
                  pricing plans for more features.</p>
              </div>

            </div>
            <div className="items-center">
              <div className="flex justify-center items-center">
                <FaRegStar className='text-white bg-brand rounded-full p-3 text-5xl' />
              </div>
              <div className="flex font-bold justify-center items-center my-5 text-3xl">
                <p>Хаясан зүйлс</p>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-[#26233899] w-[50%] text-center">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our
                  pricing plans for more features.</p>
              </div>

            </div>
            <div className="items-center">
              <div className="flex justify-center items-center">
                <FaRegStar className='text-white bg-brand rounded-full p-3 text-5xl' />
              </div>
              <div className="flex font-bold justify-center items-center my-5 text-3xl">
                <p>Хаясан зүйлс</p>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-[#26233899] w-[50%] text-center">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our
                  pricing plans for more features.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen h-[20vh]" style={{ backgroundImage: `url('/bg2.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
          <div className="w-full h-full bg-[#0C34584D]  flex justify-center items-center">
            <p className="text-white font-bold text-2xl">Lets find it together</p>
          </div>
        </div>
        <div className="">
          <h2 className="text-brand font-bold text-3xl flex justify-center p-10 m-10">Түгээмэл асуулт, хариулт</h2>
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="gap-1 text-xl">Олсон зүйлээ оруулна уу</ModalHeader>
                <ModalBody>
                  <div className="p-2">
                    <form action="">
                      <div className="relative flex flex-col text-primary-default border-2 border-brand border-dashed rounded-2xl cursor-pointer">
                        <input accept="*" type="file" multiple
                          className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer" />
                        <div className="bg-primary-soft rounded-2xl flex items-center justify-center p-12 text-center">
                          <BsCamera className="text-2xl text-brand" />
                        </div>
                      </div>
                      <p className="font-bold text-lg my-5">Эдгээрийг бүгдийг нь бөглөнө үү</p>
                      <select name="category" id="category" className="w-full h-12 p-2 rounded-xl outline-none border border-[#2623384D] mb-5">
                        <option value="" disabled selected>Select a category</option>
                        {categories.data?.map((category: Category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                      <input type="text" name="itemName" id="itemName" placeholder="Олсон зүйл(Чихэвч, Утас...)" className="w-full h-12 p-2 rounded-xl outline-none border border-[#2623384D] mb-5" />
                      <input type="date" name="foundDate" id="foundDate" placeholder="Хэзээ олсон бэ?(2023/ 12/ 03...)" className="w-full h-12 p-2 rounded-xl outline-none border border-[#2623384D] mb-5" />
                      <input type="text" name="foundLoc" id="foundLoc" placeholder="Олсон байршилаа оруулна уу( С байрнаас олсон)" className="w-full h-12 p-2 rounded-xl outline-none border border-[#2623384D] mb-5" />
                      <textarea name="itemName" id="itemName" placeholder="Нэмэлт мэдээлэл" className="w-full p-2 rounded-xl outline-none border border-[#2623384D] mb-5 resize-none h-24" />
                      <button className="bg-brand p-2 w-full rounded-lg text-white font-bold " type="submit">Илгээх</button>
                    </form>
                  </div>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

      </main>
    </>
  );
}

