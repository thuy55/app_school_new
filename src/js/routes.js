import HomePage from "../pages/home.f7";
// import AboutPage from "../pages/about.f7";
// import FormPage from "../pages/form.f7";
// import CatalogPage from "../pages/catalog.f7";
// import ProductPage from "../pages/product.f7";
// import SettingsPage from "../pages/settings.f7";
import LoginPage from "../pages/login.f7";
import SchedulePage from "../pages/schedule.f7";
import ViewSchedulePage from "../pages/view-schedule.f7";
import HealthRecordPage from "../pages/health-record.f7";
import ScoresPage from "../pages/scores.f7";
import ListTeacherPage from "../pages/list-teacher.f7";
import ViewTeacherPage from "../pages/view-teacher.f7";
import DebtLookupPage from "../pages/debt-lookup.f7";
import AccountPage from "../pages/account.f7";
import OptionPage from "../pages/option.f7";
import BriefPage from "../pages/brief.f7";
import LeavePage from "../pages/leave.f7";
import NewsPage from "../pages/news.f7";
import MenuPage from "../pages/menu.f7";
import AttendanceDiaryPage from "../pages/attendanceDiary.f7";
import NotificationDetailPage from "../pages/notificationDetail.f7";
import NotificationsPage from "../pages/notifications.f7";
import NotificationTeacherPage from "../pages/notificationTeacher.f7";

import DynamicRoutePage from "../pages/dynamic-route.f7";
import RequestAndLoad from "../pages/request-and-load.f7";
import NotFoundPage from "../pages/404.f7";

var routes = [
  {
    path: "/",
    component: HomePage,
  },
  // {
  //   path: "/about/",
  //   component: AboutPage,
  // },
  // {
  //   path: "/form/",
  //   component: FormPage,
  // },
  // {
  //   path: "/catalog/",
  //   component: CatalogPage,
  // },
  // {
  //   path: "/product/:id/",
  //   component: ProductPage,
  // },
  // {
  //   path: "/settings/",
  //   component: SettingsPage,
  // },
  {
    path: "/login/",
    component: LoginPage,
  },
  {
    path: "/schedule/",
    component: SchedulePage,
  },
  {
    path: "/view-schedule/",
    component: ViewSchedulePage,
  },
  {
    path: "/health-record/",
    component: HealthRecordPage,
  },
  {
    path: "/scores/",
    component: ScoresPage,
  },
  {
    path: "/list-teacher/",
    component: ListTeacherPage,
  },
  {
    path: "/view-teacher/",
    component: ViewTeacherPage,
  },
  {
    path: "/debt-lookup/",
    component: DebtLookupPage,
  },
  {
    path: "/account/",
    component: AccountPage,
  },
  {
    path: "/option/",
    component: OptionPage,
  },
  {
    path: "/brief/",
    component: BriefPage,
  },
  {
    path: "/leave/",
    component: LeavePage,
  },
  {
    path: "/news/",
    component: NewsPage,
  },
  {
    path: "/menu/",
    component: MenuPage,
  },
  {
    path: "/attendanceDiary/",
    component: AttendanceDiaryPage,
  },
  {
    path: "/notifications/",
    component: NotificationsPage,
  },
  {
    path: "/notificationTeacher/",
    component: NotificationTeacherPage,
  },
  {
    path: "/notificationDetail/",
    component: NotificationDetailPage,
  },
  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
  },
  {
    path: "/request-and-load/user/:userId/",
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io",
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io",
            },
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            },
          }
        );
      }, 1000);
    },
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
