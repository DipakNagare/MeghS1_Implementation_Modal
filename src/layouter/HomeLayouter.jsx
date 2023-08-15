import { useContext } from "react"
import Menu from "../components/content/Menu/Menu"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import { DynamicContext } from "../context/DynamicContext"
import { GlobalContext } from "../context/GlobalContext"
import Header from "../components/header/Header"

import TextTypeModal from "../components/modals/TextTypeModal"
import TextTypeHandlers from "../components/handlers/TextTypeHandlers"
import GlobalHandlers from "../components/handlers/GlobalHandlers"
import Carousel from "../components/carousel/Carousel"
import AfterCarouselComponents from "../components/AfterCarouselComponent/AfterCarouselComponents"
import ExtraAfterCarouselComponents from "../components/extraAfterCarouselComponents/ExtraAfterCarouselComponents"
import AfterExtraComponents from "../components/AfterExtraComponents/AfterExtraComponents"
import Card from "../components/card/Card"
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents"
import FileTypeHandlers from "../components/handlers/FileTypeHandlers"
import FileTypeModal from "../components/modals/FileTypeModal"
import LinkTypeModal from "../components/modals/LinkTypemodal"
import LinkTypeHandlers from "../components/handlers/LinkTypeHandlers"
import { ValidationContext } from "../components/Validations/ValidationContext"
import ValidationHandlers from "../components/Validations/ValidationHandlers"

// import CarouselTypeHandler from "../components/handlers/CarouselHandler"
const HomeLayouter = () => {

    const { globalHandlers,loading,setLoading } = GlobalHandlers()
    const { textTypeHandlers } = TextTypeHandlers()
    const { fileTypeHandlers } = FileTypeHandlers()
    const { linkTypeHandlers } = LinkTypeHandlers()
    const { validationHandlers } = ValidationHandlers()
    // const {carouselTypeHandler} = CarouselTypeHandler()
    const { dynamicContextState } = useContext(DynamicContext)
    const { globalContextState } = useContext(GlobalContext)
    const { validationState } = useContext(ValidationContext)
    
    return (
        <div>
            <TextTypeModal globalContextState={globalContextState} textTypeHandlers={textTypeHandlers} validationState={validationState} validationHandlers={validationHandlers} />
            <FileTypeModal globalContextState={globalContextState} fileTypeHandlers={fileTypeHandlers} validationState={validationState} validationHandlers={validationHandlers} />
            <LinkTypeModal globalContextState={globalContextState} linkTypeHandlers={linkTypeHandlers} validationState={validationState} validationHandlers={validationHandlers}/>
            

            <Header globalHandlers={globalHandlers} globalContextState={globalContextState} dynamicContextState={dynamicContextState} textTypeHandlers={textTypeHandlers} lang={globalContextState.lang}  loading={loading} setLoading={setLoading}/>
            <Navbar dynamicContextState={dynamicContextState} textTypeHandlers={textTypeHandlers} globalContextState={globalContextState} lang={globalContextState.lang} fileTypeHandlers={fileTypeHandlers} linkTypeHandlers={linkTypeHandlers}/>
            <Menu  dynamicContextState={dynamicContextState} textTypeHandlers={textTypeHandlers} globalContextState={globalContextState} lang={globalContextState.lang} />
            <Carousel dynamicContextState={dynamicContextState} globalContextState={globalContextState}  lang={globalContextState.lang} fileTypeHandlers={fileTypeHandlers} />
            <AfterCarouselComponents globalContextState={globalContextState} dynamicContextState={dynamicContextState} textTypeHandlers={textTypeHandlers} lang={globalContextState.lang}/>
            <ExtraAfterCarouselComponents globalContextState={globalContextState} dynamicContextState={dynamicContextState} textTypeHandlers={textTypeHandlers} lang={globalContextState.lang} fileTypeHandlers={fileTypeHandlers}/>
            <AfterExtraComponents  globalContextState={globalContextState} dynamicContextState={dynamicContextState} textTypeHandlers={textTypeHandlers} lang={globalContextState.lang}/>
            <Card dynamicContextState={dynamicContextState} textTypeHandlers={textTypeHandlers} lang={globalContextState.lang}/>
            <UpcomingEvents  globalContextState={globalContextState} dynamicContextState={dynamicContextState} textTypeHandlers={textTypeHandlers} lang={globalContextState.lang} fileTypeHandlers={fileTypeHandlers} />
            <Footer  dynamicContextState={dynamicContextState} globalContextState={globalContextState} lang={globalContextState.lang} linkTypeHandlers={linkTypeHandlers} textTypeHandlers={textTypeHandlers} />
        </div>
    )
}

export default HomeLayouter