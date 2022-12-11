import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogList from './blog-components/blog-v2';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';
import Broadcast from './broadcast/Broadcast';

const BlogV2 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="وبلاگ بازی چی"  />
        <Broadcast linkList={[{src:'/',pageName:'صفحه اصلی'},{src:'/blog-details',pageName:'وبلاگ بازی چی'}]}/>
        <BlogList />
        {/* <Subscribe /> */}
        <Footer />
    </div>
}

export default BlogV2

