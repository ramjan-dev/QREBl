import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import { Link } from 'react-router-dom'
import adsOne  from '/src/assets/adsOne.png'
import adsTwo  from '/src/assets/adsTwo.png'
import adsThree  from '/src/assets/adsThree.png'
const Ads = () => {
  return (
    <>
    <div className="py-6">
        <Container>
            <Flex className={'justify-between'}>
                <div className="w-[49%]">
                    <Link to={'/'}>
                    <Image imgSrc={adsOne} className={"w-full"}/>
                    </Link>

                </div>
                <div className="w-[49%]">
                     <Link to={'/'}>
                    <Image imgSrc={adsTwo} className={"w-full"}/>
                    </Link>

                    <Link to={'/'}>
                    <Image imgSrc={adsThree} className={"w-full mt-[35px]"}/>
                    </Link>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Ads