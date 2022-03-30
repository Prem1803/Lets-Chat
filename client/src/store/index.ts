import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authReducer } from "../reducers/authReducer";
import { alertReducer } from "../reducers/alertReducer";
import { friendsReducer } from "../reducers/friendsReducer";
import { chatReducer } from "../reducers/chatReducer";
import videoChatReducer from "../reducers/videoChatReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    friends: friendsReducer,
    chat: chatReducer,
    videoChat: videoChatReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
// type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;

type AppDispatch = typeof store.dispatch;

// const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, useAppSelector };
