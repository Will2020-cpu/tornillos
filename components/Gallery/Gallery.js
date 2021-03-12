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
                        original="https://d2y71a4idrecl2.cloudfront.net/mcdonalds.jpg"
                        thumbnail="https://d2y71a4idrecl2.cloudfront.net/mcdonalds.jpg"
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <div ref={ref} className="max-w-sm rounded-lg cursor-pointer h-60 bg-center bg-cover" onClick={open} style={{ backgroundImage: "url('https://d2y71a4idrecl2.cloudfront.net/mcdonalds.jpg')" }}></div>
                        )}
                    </Item>
                    <Item
                        original="https://d2y71a4idrecl2.cloudfront.net/mcdonalds.jpg"
                        thumbnail="https://d2y71a4idrecl2.cloudfront.net/mcdonalds.jpg"
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <div ref={ref} className="max-w-sm rounded-lg cursor-pointer h-60 bg-center bg-cover" onClick={open} style={{ backgroundImage: "url('https://d2y71a4idrecl2.cloudfront.net/mcdonalds.jpg')" }}></div>
                        )}
                    </Item>
                    <Item
                        original="https://d2y71a4idrecl2.cloudfront.net/mcdonalds.jpg"
                        thumbnail="https://d2y71a4idrecl2.cloudfront.net/mcdonalds.jpg"
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <div ref={ref} className="max-w-sm rounded-lg cursor-pointer h-60 bg-center bg-cover" onClick={open} style={{ backgroundImage: "url('https://d2y71a4idrecl2.cloudfront.net/mcdonalds.jpg')" }}></div>
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