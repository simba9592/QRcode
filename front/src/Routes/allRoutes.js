import React from "react";
import { Redirect } from "react-router-dom";

//Dashboard
import DashboardAnalytics from "../pages/DashboardAnalytics";
import DashboardCrm from "../pages/DashboardCrm";
import DashboardEcommerce from "../pages/DashboardEcommerce";
import DashboardProject from "../pages/DashboardProject";

//Calendar
// Email box
import MailInbox from "../pages/EmailInbox";

import Calendar from "../pages/Calendar";

// Project
import ProjectList from "../pages/Projects/ProjectList";
import ProjectOverview from "../pages/Projects/ProjectOverview";
import CreateProject from "../pages/Projects/CreateProject";

//Task
import TaskDetails from "../pages/Tasks/TaskDetails";
import TaskList from "../pages/Tasks/TaskList";
import KanbanBoard from "../pages/Tasks/KanbanBoard/Index";

//Transactions



//Invoices
import InvoiceList from "../pages/Invoices/InvoiceList";
import InvoiceCreate from "../pages/Invoices/InvoiceCreate";
import InvoiceDetails from "../pages/Invoices/InvoiceDetails";

// Support Tickets
import ListView from '../pages/SupportTickets/ListView';
import TicketsDetails from '../pages/SupportTickets/TicketsDetails';

// //Ecommerce Pages
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts/index";
import EcommerceSellers from "../pages/Ecommerce/EcommerceSellers/index";
import EcommerceSellerDetail from "../pages/Ecommerce/EcommerceSellers/EcommerceSellerDetail";
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout";




// Widgets
import Widgets from '../pages/Widgets/Index';





//AuthenticationInner pages
import BasicSignIn from '../pages/AuthenticationInner/Login/BasicSignIn';
import CoverSignIn from '../pages/AuthenticationInner/Login/CoverSignIn';
import BasicSignUp from '../pages/AuthenticationInner/Register/BasicSignUp';
import CoverSignUp from "../pages/AuthenticationInner/Register/CoverSignUp";
import BasicPasswReset from '../pages/AuthenticationInner/PasswordReset/BasicPasswReset';
//pages
import Starter from '../pages/Pages/Starter/Starter';
import SimplePage from '../pages/Pages/Profile/SimplePage/SimplePage';
import Settings from '../pages/Pages/Profile/Settings/Settings';
import Team from '../pages/Pages/Team/Team';
import Timeline from '../pages/Pages/Timeline/Timeline';
import Faqs from '../pages/Pages/Faqs/Faqs';
import Pricing from '../pages/Pages/Pricing/Pricing';
import Gallery from '../pages/Pages/Gallery/Gallery';
import Maintenance from '../pages/Pages/Maintenance/Maintenance';
import ComingSoon from '../pages/Pages/ComingSoon/ComingSoon';
import SiteMap from '../pages/Pages/SiteMap/SiteMap';
import SearchResults from '../pages/Pages/SearchResults/SearchResults';
// Landing Index
import Index from "../pages/Landing";

import CoverPasswReset from '../pages/AuthenticationInner/PasswordReset/CoverPasswReset';
import BasicLockScreen from '../pages/AuthenticationInner/LockScreen/BasicLockScr';
import CoverLockScreen from '../pages/AuthenticationInner/LockScreen/CoverLockScr';
import BasicLogout from '../pages/AuthenticationInner/Logout/BasicLogout';
import CoverLogout from '../pages/AuthenticationInner/Logout/CoverLogout';
import BasicSuccessMsg from '../pages/AuthenticationInner/SuccessMessage/BasicSuccessMsg';
import CoverSuccessMsg from '../pages/AuthenticationInner/SuccessMessage/CoverSuccessMsg';
import BasicTwosVerify from '../pages/AuthenticationInner/TwoStepVerification/BasicTwosVerify';
import CoverTwosVerify from '../pages/AuthenticationInner/TwoStepVerification/CoverTwosVerify';
import Basic404 from '../pages/AuthenticationInner/Errors/Basic404';
import Cover404 from '../pages/AuthenticationInner/Errors/Cover404';
import Alt404 from '../pages/AuthenticationInner/Errors/Alt404';
import Error500 from '../pages/AuthenticationInner/Errors/Error500';

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

import UserList from "../pages/DashboardCrm/Userlist";
import MyTasks from "../pages/DashboardCrm/MyTasks";
import ClosingDeals from "../pages/DashboardCrm/ClosingDeals";
import UpcomingActivities from '../pages/DashboardCrm/UpcomingActivities';
import ExcelCustomer from '../pages/DashboardCrm/ExcelCustomer';
import ExcelPayments from '../pages/DashboardCrm/ExcelPayments';
import ExcelBuildings from "../pages/DashboardCrm/ExcelBuildings";
import InvoiceStates from "../pages/DashboardAnalytics/InvoiceStates";
import CollectionData from "../pages/DashboardAnalytics/CollectionData";

const authProtectedRoutes = [
  { path: "/dashboard-owner", component: DashboardAnalytics },
  { path: "/dashboard-admin", component: DashboardCrm },
  { path: "/dashboard-pilot", component: DashboardEcommerce },
  { path: "/dashboard-aircraft", component: DashboardProject },
  { path: "/apps-calendar", component: Calendar },
  { path: "/apps-airplane-add", component: EcommerceProducts },
  { path: "/apps-customer-data", component: ExcelCustomer },
  { path: "/apps-payments-data", component: ExcelPayments },
  { path: "/apps-buildings-data", component: ExcelBuildings },
  { path: "/apps-invoice-states", component: InvoiceStates },
  { path: "/apps-collection-data", component: CollectionData },


  { path: "/apps-ecommerce-sellers", component: EcommerceSellers },
  { path: "/apps-ecommerce-seller-details", component: EcommerceSellerDetail },
  { path: "/apps-ecommerce-user-list", component:UserList},
  { path: "/apps-airplane-list", component:MyTasks},
  { path: "/apps-pilot-list", component:ClosingDeals},
  { path: "/apps-create-report", component:EcommerceCheckout},



  //EMail
  { path: "/apps-mailbox", component: MailInbox },

  //Projects
  { path: "/apps-projects-list", component: ProjectList },
  { path: "/apps-projects-overview", component: ProjectOverview },
  { path: "/apps-projects-create", component: CreateProject },

  //Task
  { path: "/apps-pilot-list-view", component: TaskList },
  { path: "/apps-tasks-details", component: TaskDetails },
  { path: "/apps-tasks-kanban", component: KanbanBoard },


  //Invoices
  { path: "/apps-users-list", component: InvoiceList },
  { path: "/apps-report-management/:id", component: InvoiceDetails },
  { path: "/apps-invoices-create", component: InvoiceCreate },

  //Supports Tickets
  { path: "/apps-aircraft-register", component: ListView },
  { path: "/apps-tickets-details", component: TicketsDetails },

  // Widgets
  { path: "/widgets", component: Widgets },

  { path: "/apps-report-list", component: UpcomingActivities},







  //Pages
  { path: "/pages-starter", component: Starter },
  { path: "/pages-profile", component: SimplePage },
  { path: "/pages-profile-settings", component: Settings },
  { path: "/pages-team", component: Team },
  { path: "/pages-timeline", component: Timeline },
  { path: "/pages-faqs", component: Faqs },
  { path: "/pages-gallery", component: Gallery },
  { path: "/pages-pricing", component: Pricing },
  { path: "/pages-sitemap", component: SiteMap },
  { path: "/pages-search-results", component: SearchResults },


  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: () =><Redirect to="/login" />,
  },
];

const publicRoutes = [
    // Authentication Page
    { path: "/logout", component: Logout },
    { path: "/login", component: Login },
    { path: "/forgot-password", component: ForgetPasswordPage },
    { path: "/register", component: Register },
  

  //AuthenticationInner pages
  { path: "/auth-signin-basic", component: BasicSignIn },
  { path: "/auth-signin-cover", component: CoverSignIn },
  { path: "/auth-signup-basic", component: BasicSignUp },
  { path: "/auth-signup-cover", component: CoverSignUp },
  { path: "/auth-pass-reset-basic", component: BasicPasswReset },
  { path: "/auth-pass-reset-cover", component: CoverPasswReset },
  { path: "/auth-lockscreen-basic", component: BasicLockScreen },
  { path: "/auth-lockscreen-cover", component: CoverLockScreen },
  { path: "/auth-logout-basic", component: BasicLogout },
  { path: "/auth-logout-cover", component: CoverLogout },
  { path: "/auth-success-msg-basic", component: BasicSuccessMsg },
  { path: "/auth-success-msg-cover", component: CoverSuccessMsg },
  { path: "/auth-twostep-basic", component: BasicTwosVerify },
  { path: "/auth-twostep-cover", component: CoverTwosVerify },
  { path: "/auth-404-basic", component: Basic404 },
  { path: "/auth-404-cover", component: Cover404 },
  { path: "/auth-404-alt", component: Alt404 },
  { path: "/auth-500", component: Error500 },
  { path: "/pages-maintenance", component: Maintenance },
  { path: "/pages-coming-soon", component: ComingSoon },
  { path: "/landing", component: Index },

];

export { authProtectedRoutes, publicRoutes };