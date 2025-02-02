import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout"
import Transaction from "./pages/admin/transaction/Transaction";
import PlaceBet from "./pages/admin/placeBet/PlaceBet";
import Dice from "./pages/admin/games/Dice"
import All_Staff from "./pages/admin/staff/all_staff/All_Staff";
import Logged_sessions from "./pages/admin/all_UsersDetails/logged_session/Logged_sessions";
import Conversation from "./pages/admin/all_UsersDetails/conversation/Conversation";
import All_Users from "./pages/admin/all_UsersDetails/all_users/All_Users";
import Personal_Info from "./pages/admin/all_UsersDetails/personal_info/Personal_Info";
import Users_placedbets from "./pages/admin/all_UsersDetails/user_placebets/Users_placedbets";
import Complain_Details from "./pages/admin/all_UsersDetails/complain_details/Complain_Details";
import Staff_Details from "./pages/admin/staff/staff_details/Staff_Details";
import Total_BetPlaced from "./pages/admin/totalBet/Total_BetPlaced"
import Winner_loser from "./pages/admin/placeBet/winner/Winner_loser"
import Countries from "./pages/admin/placeBet/countries/Countries"
import Department from "./pages/admin/staff/department/Department";
import User_Friends from "./pages/admin/all_UsersDetails/user_friends/User_Friends";
import Chat_History from "./pages/admin/all_UsersDetails/chat_history/Chat_History";
import Revenue from "./pages/admin/revenue/Revenue";
import WhiteHouse_PopupContext from "./WhiteHouse_PopupContext";
import Queries from "./pages/admin/queries/Queries";
import Customer_Support from "./pages/admin/staff/customer_Support/Customer_Support";
import Foot_Soldiers_Home from "./pages/admin/staff/footSoldier/FootSoldier";
import Top_Agents from "./pages/admin/staff/top_agents/Top_Agents";
import Total_Top_Agents from "./pages/admin/staff/top_agents/total_Top_Agents/Total_Top_Agents";
import Sports from "./pages/admin/games/sports/Sports";
import Foot_Soldiers from "./pages/admin/foot_soldiers/Foot_Soldiers";
import All_FootSoldiers from "./pages/admin/foot_soldiers/all_footSoldiers/All_FootSoldiers";
import Soldier_Transaction from "./pages/admin/foot_soldiers/footSoldier_transaction/Soldier_Transaction";
import Pending_Request from "./pages/admin/foot_soldiers/pending_requests/Pending_Request";
import Amount_Paid from "./pages/admin/foot_soldiers/amount_paid/Amount_Paid";
import All_Transaction from "./pages/admin/foot_soldiers/all_transactions/All_Transaction";
import Users_From_Soldiers from "./pages/admin/foot_soldiers/users_from_soldiers/Users_From_Soldiers"
import Trash from "./pages/admin/foot_soldiers/trash/Trash"
import Game_History from "./pages/admin/games/game_history/Game_History";
import Online_Players from "./pages/admin/placeBet/totalOnline_players/Online_Players";
import Admin_SignIn from "./pages/admin/signIn/Admin_SignIn";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Onboarded_users from "./pages/admin/foot_soldiers/recent_onboarded_users/Onboarded_users";
import Unsettled_Details from "./pages/admin/transaction/unsettled_details/Unsettled_Details";
import FootSoldiers_countries from "./pages/admin/foot_soldiers/countries/FootSoldiers_countries";
import Soldiers_details from  "./pages/admin/foot_soldiers/soldiers_personalDetail/Soldiers_details"
import Solider_OnboardedUsers from "./pages/admin/foot_soldiers/soldier_onboardedUsers/Solider_OnboardedUsers";
import Profile from "./pages/admin/profile/Profile";
import Suspended_Accounts from "./pages/admin/all_UsersDetails/all_users/accounts/Suspended_Accounts";
import Country_Users from "./pages/admin/placeBet/countries/country_details/Country_Users";
import Game_Users from "./pages/admin/games/game_Users/Game_Users";
import Soldiers_CountryDetails from "./pages/admin/foot_soldiers/countries/soldiers_CountryDetails/Soldiers_CountryDetails";




const router = createBrowserRouter([

    {
        path: "/",
        element: <WhiteHouse_PopupContext><MainLayout/></WhiteHouse_PopupContext>,
        children: [

            
            {
                index: "/signIn",
                element: <Admin_SignIn/>
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/dice",
                element: <Dice />
            },
            {
                path: "/sports",
                element: <Sports />
            },
       
            {
                path: "/gameHistory",
                element: <Game_History />
            },
            {
                path: "/gameUsers",
                element: <Game_Users/>
            },
            {
                path: "/customerCare",
                element: <Customer_Support />
            },
            {
                path: "/FootSoldiersHome",
                element: <Foot_Soldiers_Home />
            },
            {
                path: "/allStaffs",
                element: <All_Staff />
            },
            {
                path: "/transactions",
                element: <Transaction />
            },
            {
                path: "/loggedsession",
                element: <Logged_sessions />
            },
            {
                path: "/conversations",
                element: <Conversation />
            },
            {
                path: "/placebet",
                element: <PlaceBet />
            },
            {
                path: "/allusers",
                element: <All_Users />
            },
            {
                path: "/userDetails/:phoneNumber",
                element: <Personal_Info />
            },
            {
                path: "/userplacedbet",
                element: <Users_placedbets />
            },
             {
                path: "/unsettledBet",
                element: <Unsettled_Details/>
            },
            {
                path: "/complainDetails",
                element: <Complain_Details />
            },
            {
                path: "/staffDetails/:email",
                element: <Staff_Details />
            },
            
            {
                path: "/totalBetPlaced/:indexParams",
                element: <Total_BetPlaced />
            },
            {
                path: "/totalOnlinePlayers",
                element: <Online_Players />
            },
            {
                path: "/winners",
                element: <Winner_loser />
            },
            {
                path: "/countries",
                element: <Countries />
            },
            {
                path: "/department",
                element: <Department/>
            },
            {
                path: "/userFriends/:friendListString",
                element: <User_Friends />
            },
            {
                path: "/chatHistory",
                element: <Chat_History />
            },
            {
                path: "/revenue",
                element: <Revenue />
            },
            {
                path: "/Queries",
                element: <Queries />
            },
            {
                path: "/topAgent",
                element: <Top_Agents />
            },
            {
                path: "/TotalTopAgents",
                element: <Total_Top_Agents />
            },
            // {
            //     path: "/addNewAgent",
            //     element: <AddNew_Agent />
            // },
            {
                path: "/footSoldiers",
                element: <Foot_Soldiers />
            },
            {
                path: "/allFootSoldiers",
                element: <All_FootSoldiers />
            },
            {
                path: "/soldiersTransaction",
                element: <Soldier_Transaction />
            },
            {
                path: "/pendingRequests",
                element: <Pending_Request />
            },
            {
                path: "/amountPaid",
                element: <Amount_Paid />
            },
            {
                path: "/recentOnboarderUsers",
                element: <Onboarded_users/>
            },
            {
                path: "/AllTransaction",
                element: <All_Transaction />
            },
             {
                path: "/footSoldiersCountries",
                element: <FootSoldiers_countries />
            },
            {
                path: "/soldiersDetails/:phone",
                element: <Soldiers_details/>
            },
            {
                path: "/usersFromSoldiers",
                element: <Users_From_Soldiers />
            },
            {
                path: "/soldierOnboardedUsers",
                element: <Solider_OnboardedUsers />
            },
            {
                path: "/soldiers_CountryDetails",
                element: <Soldiers_CountryDetails/>
            },
            {
                path: "/countryUsers",
                element: <Country_Users/>
            },
            {
                path: "/trash",
                element: <Trash />
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/suspendedAccounts",
                element: <Suspended_Accounts/>
            },

        ]

    },
   
])
export default router