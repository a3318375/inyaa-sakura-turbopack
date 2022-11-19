'use client';

import { use } from 'react';

async function findHotBlogList() {
  return await fetch('https://api.inyaw.com/inyaa-admin/blog/web/list?isHot=true')
    .then(response => response.json())
    .then(data => {
      if (data && data.code && data.data && data.code === 200) {
        return data.data;
      } else {
        return [];
      }
    });
}

export default function HotArticle() {
  const hotArticleList = use(findHotBlogList());
  return (
    <div className='sticky px-6 py-5 bg-base-100 opacity-80 shadow-md rounded-xl mt-5'>
      <div>最近文章</div>
      {hotArticleList.map((item, index) => {
        return (
          <div key={index} className='flex pt-2'>
            <a href={'/article/' + item.id}>
              <img src={item.cover} className='w-16 h-full' />
            </a>
            <div className='flex-1 pl-2'>
              <a href={'/article/' + item.id}>{item.title}</a>
              <div>{item.createTime}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
