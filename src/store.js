import { configureStore } from "@reduxjs/toolkit";
import diceSummaryReducer from "../src/pages/admin/api_detaills/GlobalStates/diceSummarySlice";
import NigerianUsersReducer from "./pages/admin/api_detaills/GlobalStates/NigerianUsersSlice";
import OnlineUsersReducers from "./pages/admin/api_detaills/GlobalStates/onlineUsers";
import DiceBetsListReducer from "./pages/admin/api_detaills/GlobalStates/DiceBetsList";
import LoosingDiceBetsListReducer from "./pages/admin/api_detaills/GlobalStates/LoosingDiceBetsListSlice";
import WinningDiceBetsListReducer from "./pages/admin/api_detaills/GlobalStates/WinningDiceBetListSlice";
import FootballSummaryReducer from "./pages/admin/api_detaills/GlobalStates/FootballSummarySlice";
import FootballBetListReducer from "./pages/admin/api_detaills/GlobalStates/FootballBetList";
import FooltSoldiersProfileReducer from "./pages/admin/api_detaills/GlobalStates/FooltSoldiersProfileSlice";
import footSoldiersPaymentReducer from "./pages/admin/api_detaills/GlobalStates/footSoldiersPayment";
import FootSoldierSummaryReducer from "./pages/admin/api_detaills/GlobalStates/FootSoldierSummary";
import UserFromFootSoldierReducer from "./pages/admin/api_detaills/GlobalStates/UserFromFootSoldier";
import CCPerformanceReducer from "./pages/admin/api_detaills/GlobalStates/CCWeeklyPerformance";
// import TopPerformingCC from './pages/admin/api_detaills/GlobalStates/CCWeeklyPerformance'
import QueriesReducer from "./pages/admin/api_detaills/GlobalStates/QueriesReducer";
import AllStaffsReducer from "./pages/admin/api_detaills/GlobalStates/AllStaffs";
import StaffsProfileReducer from "./pages/admin/api_detaills/GlobalStates/AllStaffsProfile";
import QueryDetails from "./pages/admin/api_detaills/GlobalStates/QueryDetails";
import FootballBetDetails from "./pages/admin/api_detaills/GlobalStates/FootballBetDetails";
import ResolveQuery from "./pages/admin/api_detaills/GlobalStates/ResolveQuery";
import authReducer from "./pages/admin/api_detaills/GlobalStates/authSlice";
import RevenueReducer from "./pages/admin/api_detaills/GlobalStates/Revenue"
import adminProfileReducer from "./pages/admin/api_detaills/GlobalStates/UpdateAdmin"
import AllUsersReducer from "./pages/admin/api_detaills/GlobalStates/AllUsers"
import CountriesReducer from "./pages/admin/api_detaills/GlobalStates/Countries"
import TransactionReducer from "./pages/admin/api_detaills/GlobalStates/Transactions"





const store = configureStore({
  reducer: {
    diceSummary: diceSummaryReducer,
    NigerianUsers: NigerianUsersReducer,
    OnlineUser: OnlineUsersReducers,
    DiceBetsList: DiceBetsListReducer,
    WinningDiceBetsList: WinningDiceBetsListReducer,
    LoosingDiceBetsList: LoosingDiceBetsListReducer,
    FootballSummary : FootballSummaryReducer,
    FootballBetList : FootballBetListReducer,
    FooltSoldiersProfile : FooltSoldiersProfileReducer,
    footSoldiersPayment : footSoldiersPaymentReducer,
    FootSoldierSummary : FootSoldierSummaryReducer,
    UserFromFootSoldier : UserFromFootSoldierReducer,
    CCPerformanceWeekly : CCPerformanceReducer,
    Queries : QueriesReducer,
    AllStaffsList : AllStaffsReducer,
    AllUsers : AllUsersReducer,
    userQueryDetailsReducer : QueryDetails,
    FootballBetDetailsReducer : FootballBetDetails,
    ResolveQueryReducer : ResolveQuery,
    auth : authReducer,
    RevenueReducer : RevenueReducer,
    adminProfileReducer : adminProfileReducer,
    CountriesReducer : CountriesReducer,
    TransactionReducer : TransactionReducer,
    StaffsProfile : StaffsProfileReducer,
    
    // TopPerformingCCList : TopPerformingCC,
    

  },
});

export default store;
