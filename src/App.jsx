import { RouterProvider } from 'react-router-dom'
import router from './router'
import Suspend_Reason from './popUps/suspendReason/Suspend_Reason'
import Account_Suspended from './popUps/accountSuspended/Account_Suspended'
import Error from './popUps/error/Error'
// import { BetsApiProvider } from './pages/admin/api_detaills/GlobalStates/BetsContext'
import { Provider } from "react-redux";
import store from "./store"
import { AnimatePresence } from 'framer-motion';
function App() {

  return (
    <>
      <AnimatePresence mode="wait">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </AnimatePresence>
    </>
  )
}

export default App
