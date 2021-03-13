import React, { Fragment, useRef } from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'




import { DefaultLayout, CustomGallery, Item } from 'react-photoswipe-gallery'

const MyGallery = () => {

    const layoutRef = useRef();
    return (
        <Fragment>
            <CustomGallery ui={PhotoswipeUIDefault} layoutRef={layoutRef} id="first">
                <div className="grid grid-cols-3 gap-4">
                    <Item
                        original="https://image2.jdomni.in/banner/05112020/28/90/12/5AB7C67985EC9CE26FF9509838_1604554998114.webp"
                        thumbnail="https://image2.jdomni.in/banner/05112020/28/90/12/5AB7C67985EC9CE26FF9509838_1604554998114.webp"
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <div ref={ref} className="max-w-sm rounded-lg cursor-pointer h-60 bg-center bg-cover" onClick={open} style={{ backgroundImage: "url('https://image2.jdomni.in/banner/05112020/28/90/12/5AB7C67985EC9CE26FF9509838_1604554998114.webp')" }}></div>
                        )}
                    </Item>
                    <Item
                        original="https://image2.jdomni.in/banner/05112020/28/90/12/5AB7C67985EC9CE26FF9509838_1604554998114.webp"
                        thumbnail="https://image2.jdomni.in/banner/05112020/28/90/12/5AB7C67985EC9CE26FF9509838_1604554998114.webp"
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <div ref={ref} className="max-w-sm rounded-lg cursor-pointer h-60 bg-center bg-cover" onClick={open} style={{ backgroundImage: "url('https://image2.jdomni.in/banner/05112020/28/90/12/5AB7C67985EC9CE26FF9509838_1604554998114.webp')" }}></div>
                        )}
                    </Item>
                    <Item
                        original="https://image2.jdomni.in/banner/05112020/28/90/12/5AB7C67985EC9CE26FF9509838_1604554998114.webp"
                        thumbnail="https://image2.jdomni.in/banner/05112020/28/90/12/5AB7C67985EC9CE26FF9509838_1604554998114.webp"
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <div ref={ref} className="max-w-sm rounded-lg cursor-pointer h-60 bg-center bg-cover" onClick={open} style={{ backgroundImage: "url('https://image2.jdomni.in/banner/05112020/28/90/12/5AB7C67985EC9CE26FF9509838_1604554998114.webp')" }}></div>
                        )}
                    </Item>
                </div>
            </CustomGallery>
            <DefaultLayout
                shareButton={false}
                fullscreenButton={false}
                zoomButton={false}
                ref={layoutRef}
            />

        </Fragment>
    )
}

export default MyGallery