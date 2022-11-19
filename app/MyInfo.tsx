export default function MyInfo({
  articleNum,
  tagNum,
  typeNum,
}: {
  articleNum: number;
  tagNum: number;
  typeNum: number;
}) {
  return (
    <div id="myInfo" className="w-full px-6 py-5 bg-base-100 opacity-80 shadow-md rounded-xl">
      <div className="flex justify-center">
        <img src="https://media.inyaw.com/icon/avatar.png!inyaa" className="rounded-full w-32"/>
      </div>
      <div className="flex justify-center text-2xl">
        四埜宫瑶
      </div>
      <div className="flex justify-center">
        一个无名小卒罢了
      </div>
      <div className="flex justify-center text-center">
        <div className="w-1/3">
          <div>文章</div>
          <div>{ articleNum }</div>
        </div>
        <div className="w-1/3">
          <div>标签</div>
          <div>{ tagNum }</div>
        </div>
        <div className="w-1/3">
          <div>分类</div>
          <div>{ typeNum }</div>
        </div>
      </div>
    </div>
  );
}
