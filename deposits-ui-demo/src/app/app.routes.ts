import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { UserNavBarComponent } from './component/user-nav-bar/user-nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { DataSectionsComponent } from './component/data-sections/data-sections.component';
import { FaqsComponent } from './component/faqs/faqs.component';
import { HelpCenterComponent } from './component/help-center/help-center.component';
import { PageErrorsComponent } from './component/page-errors/page-errors.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { ProfileSectionsComponent } from './component/profile-sections/profile-sections.component';
import { TsAndCsComponent } from './component/ts-and-cs/ts-and-cs.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuditTrailsComponent } from './user-pages/audit-trails/audit-trails.component';
import { DashboardComponent } from './user-pages/dashboard/dashboard.component';
import { DepositOptionsComponent } from './user-pages/deposit-options/deposit-options.component';
import { SettingsComponent } from './user-pages/settings/settings.component';
import { TransactionHistoryComponent } from './user-pages/transaction-history/transaction-history.component';
import { ContactSupportComponent } from './component/contact-support/contact-support.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: NavBarComponent },
  { path: '', component: UserNavBarComponent },
  { path: '', component: FooterComponent },
  { path: 'Sign-in', component: SignInComponent },
  { path: 'Forgot-Password', component: ForgotPasswordComponent },
  { path: 'Audit-Trails', component: AuditTrailsComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Deposit-Options', component: DepositOptionsComponent },
  { path: 'Transaction-History', component: TransactionHistoryComponent },
  { path: 'Settings', component: SettingsComponent },
  { path: 'Ts-And-Cs', component: TsAndCsComponent },
  { path: 'Privacy-Policy', component: PrivacyPolicyComponent },
  { path: 'FAQs', component: FaqsComponent },
  { path: 'Help-Center', component: HelpCenterComponent },
  { path: 'Profile-Sections', component: ProfileSectionsComponent },
  { path: 'Data-Sections', component: DataSectionsComponent },
  { path: 'Contact-Support', component: ContactSupportComponent },
  { path: 'Page-Errors', component: PageErrorsComponent },
];
