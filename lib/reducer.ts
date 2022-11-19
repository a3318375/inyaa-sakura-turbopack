//toolkit将大大简化redux开发，并解决类型问题
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ScrollType = {
  menuShow: boolean,
  myInfoShow: boolean,
  scroll: number,
}

export const initDemoState: ScrollType = {
  menuShow: true,
  myInfoShow: false,
  scroll: 0,
};
export const demoSlice = createSlice({
  name: 'demo',
  initialState: initDemoState,
  reducers: {
    // 使用toolkit，不需要返回一个新的state
    setMenuShow: (state, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.menuShow = payload;
    },
    setScroll: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      state.scroll = payload;
    },
  },
});

// 使用toolkit，不需要创建action文件
export const { setMenuShow, setScroll } = demoSlice.actions;

export const fetchScroll = (status: number) => (dispatch) => {
  dispatch(setScroll(status));
};

export default demoSlice.reducer;
