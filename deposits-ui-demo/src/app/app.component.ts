import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserNavBarComponent } from './component/user-nav-bar/user-nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { PageErrorsComponent } from './component/page-errors/page-errors.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuditTrailsComponent } from './user-pages/audit-trails/audit-trails.component';
import { DashboardComponent } from './user-pages/dashboard/dashboard.component';
import { DepositOptionsComponent } from './user-pages/deposit-options/deposit-options.component';
import { TransactionHistoryComponent } from './user-pages/transaction-history/transaction-history.component';
import { SettingsComponent } from './user-pages/settings/settings.component';
import { TsAndCsComponent } from './component/ts-and-cs/ts-and-cs.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { FaqsComponent } from './component/faqs/faqs.component';
import { HelpCenterComponent } from './component/help-center/help-center.component';
import { ProfileSectionsComponent } from './component/profile-sections/profile-sections.component';
import { DataSectionsComponent } from './component/data-sections/data-sections.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    NavBarComponent,
    UserNavBarComponent,
    FooterComponent,
    PageErrorsComponent,
    SignInComponent,
    ForgotPasswordComponent,
    AuditTrailsComponent,
    DashboardComponent,
    DepositOptionsComponent,
    TransactionHistoryComponent,
    SettingsComponent,
    TsAndCsComponent,
    PrivacyPolicyComponent,
    FaqsComponent,
    HelpCenterComponent,
    ProfileSectionsComponent,
    DataSectionsComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'deposits-ui-demo';
}
