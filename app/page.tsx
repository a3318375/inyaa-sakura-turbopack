import { ClockIcon, FireIcon, ChatBubbleBottomCenterTextIcon, WalletIcon } from '@heroicons/react/24/outline'

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

export default async function Page() {
  const navItems = await findBlogPage();
  return (
    <div>
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
                   { item.title }
                  </h2>
                  <div className="text-xs">
                    <ClockIcon className="text-sm mr-1 inline-block bg-base-500 w-3 h-3"/><span>{ item.createTime }</span>
                    <FireIcon className="text-sm mr-1 inline-block bg-base-500 w-3 h-3"/><span>{ item.views } 热度</span>
                    <ChatBubbleBottomCenterTextIcon className="text-sm mr-1 inline-block bg-base-500 w-3 h-3"/><span>{ item.comments } 条评论</span>
                    <WalletIcon className="text-sm mr-1 inline-block bg-base-500 w-3 h-3"/><span>{ item.type.name }</span>
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
  );
}
