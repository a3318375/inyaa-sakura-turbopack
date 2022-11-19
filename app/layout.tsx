import '@/styles/dist.css';
import React, { useState } from 'react';
import GlobalNav from './GlobalNav';
import Footer from '@/ui/Footer';
import MyInfo from './MyInfo';
import HotArticle from './HotArticle';
import Background from './Background';
import store from '@/lib/store';
import { Provider } from 'react-redux';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body>
        <div className="w-full h-screen grid overflow-hidden">
          <Provider store={store}>
            <Background />
            <div id="pageContent" className="overflow-y-auto">
              <GlobalNav user={null} />
              <div>
                <div id="mainContent" className="lg:grid lg:grid-cols-12 lg:gap-4 px-4 py-8">
                  <div className="w-full lg:col-start-2 md:col-end-9 lg:pr-3">
                    <div>{children}</div>
                    <div className="flex justify-center">
                      <button className="btn btn-outline text-base-100">下一页</button>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:col-start-9 lg:col-end-12 lg:pl-0.75">
                    <MyInfo articleNum={0} tagNum={0} typeNum={0}/>
                    <div className="w-full sticky top-5">
                      <HotArticle />
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </Provider>
        </div>
      </body>
    </html>
  );
}
