import { use } from 'react';
import MyInfo from './MyInfo';
import { icons } from '@iconify-json/fa6-solid';
import HotArticle from './HotArticle';

async function findBlogPage() {
  return await fetch('https://api.inyaw.com/inyaa-admin/blog/web/page')
    .then(response => response.json())
    .then(data => {
      if (data && data.code && data.data && data.code === 200) {
        return data.data;
      } else {
        return [];
      }
    });
}

export default function Page() {
  const navItems = findBlogPage();
  return (
      <div id="mainContent" className="lg:grid lg:grid-cols-12 lg:gap-4 px-4 py-8">
        <div className="w-full lg:col-start-2 md:col-end-9 lg:pr-3">
          {navItems.content.map((item, index) => {
            return (
              <div key={index} className="grid card rounded-box">
                <a href={'/article/' + item.id}>
                  <div className="card w-full h-4/5 glass static group">
                    <figure>
                      <img src={item.cover + '!inyaa'} className="transform transition duration-700 group-hover:scale-110" alt="car!"/>
                    </figure>
                    <div className="card-body w-full absolute bottom-0 bg-base-content bg-opacity-60 text-base-100 p-3 transition duration-500 translate-y-8 group-hover:translate-y-0">
                      <h2 className="card-title block w-full">
                        <a href={'/article/' + item.id}>{ item.title }</a>
                      </h2>
                      <div className="text-xs">
                        <div className="i-carbon-time text-sm mr-1 inline-block bg-base-500 w-3 h-3" />{ item.createTime }
                        <div className="i-carbon-view text-sm mx-2 mr-1 inline-block bg-base-500 w-3 h-3" />{ item.views } 热度
                        <div className="i-carbon-pending text-sm mx-2 mr-1 inline-block bg-base-500 w-3 h-3" />{ item.comments } 条评论
                        <div className="i-carbon-open-panel-top text-sm mr-1 inline-block bg-base-500 w-3 h-3" />{ item.type.name }
                      </div>
                      <p className="truncate ...">{ item.summary }</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
          <div className="flex justify-center">
            <button className="btn btn-outline text-base-100">下一页</button>
          </div>
        </div>
        <div className="hidden lg:block lg:col-start-9 lg:col-end-12 lg:pl-0.75">
          <MyInfo  articleNum={0} tagNum={0} typeNum={0}/>
          <div className="w-full sticky top-5">
            <HotArticle />
          </div>
        </div>
      </div>
  );
}
