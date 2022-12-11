import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogDetails from './blog-components/blog-details';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

import Broadcast from './broadcast/Broadcast';
const BlogDetailsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle=""  />
        <Broadcast linkList={[{src:'/',pageName:'صفحه اصلی'},{src:'/blog-details',pageName:'وبلاگ بازی چی'}]}/>
        <BlogDetails />
        {/* <Subscribe /> */}
        <Footer />
    </div>
}

export default BlogDetailsPage

