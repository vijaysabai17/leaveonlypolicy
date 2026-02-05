import ThemeToggle from "./ThemeToggle";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="header">
        <ThemeToggle />
        <h1>Leave App</h1>
        <p>Privacy Policy &amp; Terms of Service</p>
      </div>

      <div className="container">
        <p className="last-updated">Last updated: January 2026</p>

        {/* Privacy Policy */}
        <div className="section">
          <h2>Privacy Policy</h2>
          <p>
            Leave App (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
            &ldquo;us&rdquo;) is committed to protecting your privacy. This
            policy explains how we collect, use, and safeguard your information.
          </p>

          <h3>Information We Collect</h3>
          <p>
            We collect only the information necessary to provide our leave
            management service:
          </p>
          <ul>
            <li>Name and email address (for your account)</li>
            <li>Leave request details (type, dates, reason)</li>
            <li>Company affiliation and role (employee or manager)</li>
          </ul>

          <h3>How We Use Your Information</h3>
          <ul>
            <li>
              To manage and process leave requests within your organization
            </li>
            <li>
              To send in-app notifications about leave request updates
            </li>
            <li>To maintain accurate leave balances</li>
            <li>
              To enable manager-employee relationships within your company
            </li>
          </ul>

          <h3>Data Storage</h3>
          <p>
            All data is stored securely on Google Firebase infrastructure (Cloud
            Firestore and Firebase Authentication). Your password is hashed and
            never stored in plain text.
          </p>

          <h3>No Tracking or Analytics</h3>
          <p>
            We do not use any analytics, advertising, or behavioral tracking
            tools. We do not track your usage patterns, location, or browsing
            activity.
          </p>

          <h3>Data Isolation</h3>
          <p>
            Your company&apos;s data is completely isolated from other companies.
            Managers can only view data for employees within their own
            organization.
          </p>

          <h3>Data Retention</h3>
          <p>
            Your account data is retained as long as your account is active.
            Leave request history is preserved for organizational audit purposes.
            You may delete your account at any time through the Edit Profile
            screen.
          </p>
        </div>

        {/* Terms of Service */}
        <div className="section">
          <h2>Terms of Service</h2>
          <p>By using Leave App, you agree to the following terms:</p>

          <h3>Account Responsibilities</h3>
          <ul>
            <li>
              You are responsible for maintaining the security of your account
              credentials.
            </li>
            <li>
              You must provide accurate information during registration.
            </li>
            <li>You must not share your account with others.</li>
          </ul>

          <h3>Acceptable Use</h3>
          <ul>
            <li>
              Use the app only for legitimate leave management within your
              organization.
            </li>
            <li>
              Do not submit fraudulent leave requests or manipulate leave
              balances.
            </li>
            <li>
              Managers must handle leave approvals fairly and in accordance with
              their company policies.
            </li>
          </ul>

          <h3>Roles and Permissions</h3>
          <ul>
            <li>
              Employees can submit leave requests, view their balance, and track
              request status.
            </li>
            <li>
              Managers can approve or reject requests, manage team leave
              balances, and configure company leave policies.
            </li>
            <li>
              Managers are responsible for verifying employees who join their
              company.
            </li>
          </ul>

          <h3>Service Availability</h3>
          <ul>
            <li>
              We strive to maintain service availability but do not guarantee
              uninterrupted access.
            </li>
            <li>
              We may update, modify, or discontinue features with reasonable
              notice.
            </li>
          </ul>

          <h3>Account Termination</h3>
          <ul>
            <li>
              You may delete your account at any time through the Edit Profile
              screen.
            </li>
            <li>
              We reserve the right to suspend accounts that violate these terms.
            </li>
          </ul>

          <h3>Limitation of Liability</h3>
          <p>
            Leave App is provided &ldquo;as is&rdquo; without warranties of any
            kind. We are not liable for decisions made based on leave data within
            the app.
          </p>
        </div>

        {/* Data We Collect */}
        <div className="section">
          <h2>Data We Collect</h2>
          <p>Here is a complete list of data stored by Leave App:</p>

          <h3>Account Information</h3>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Encrypted password (managed by Firebase Auth)</li>
            <li>User role (employee or manager)</li>
            <li>Account creation date</li>
            <li>Manager verification status</li>
          </ul>

          <h3>Company Data</h3>
          <ul>
            <li>Company name and ID</li>
            <li>Manager-employee relationships</li>
            <li>
              Company leave policy settings (default CL, SL, PL balances)
            </li>
          </ul>

          <h3>Leave Records</h3>
          <ul>
            <li>Leave type (Casual, Sick, Privilege)</li>
            <li>Start and end dates</li>
            <li>Reason for leave</li>
            <li>Approval status and manager comments</li>
            <li>Current leave balances</li>
          </ul>

          <h3>Notifications</h3>
          <ul>
            <li>
              In-app notification messages (leave updates, approvals, rejections)
            </li>
            <li>Read/unread status</li>
          </ul>

          <h3>Local Device Storage</h3>
          <ul>
            <li>Authentication session token (for keeping you logged in)</li>
            <li>Cached app state (for faster loading)</li>
            <li>Theme preference (light, dark, or system)</li>
          </ul>
        </div>

        {/* Your Rights */}
        <div className="section">
          <h2>Your Rights</h2>
          <p>You have the following rights regarding your data:</p>

          <h3>Access Your Data</h3>
          <ul>
            <li>
              View your profile information in the Edit Profile screen.
            </li>
            <li>View all your leave requests in the History tab.</li>
            <li>View your current leave balances on the Dashboard.</li>
          </ul>

          <h3>Update Your Data</h3>
          <ul>
            <li>Change your display name in Edit Profile.</li>
            <li>Change your password in Edit Profile.</li>
          </ul>

          <h3>Delete Your Data</h3>
          <ul>
            <li>
              Delete your entire account through the Edit Profile screen.
            </li>
            <li>
              Account deletion removes your profile data and authentication
              credentials permanently.
            </li>
            <li>
              Note: Leave request history may be retained for your
              company&apos;s audit records.
            </li>
          </ul>

          <h3>Data Portability</h3>
          <ul>
            <li>You can view all your leave history within the app.</li>
            <li>
              Contact your company administrator for data export requests.
            </li>
          </ul>
        </div>

        {/* Third-Party Services */}
        <div className="section">
          <h2>Third-Party Services</h2>
          <p>Leave App uses the following third-party services:</p>

          <h3>Firebase Authentication (Google)</h3>
          <ul>
            <li>Handles secure user registration and login.</li>
            <li>Manages password hashing and session tokens.</li>
            <li>
              Privacy policy:{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                firebase.google.com/support/privacy
              </a>
            </li>
          </ul>

          <h3>Cloud Firestore (Google)</h3>
          <ul>
            <li>
              Stores all application data (profiles, leave requests,
              notifications).
            </li>
            <li>Data is encrypted in transit and at rest.</li>
            <li>Hosted on Google Cloud infrastructure.</li>
          </ul>

          <h3>Expo (Expo Inc.)</h3>
          <ul>
            <li>Used for app development and distribution.</li>
            <li>No user data is shared with Expo.</li>
          </ul>

          <h3>What We Do NOT Use</h3>
          <ul>
            <li>No advertising SDKs or ad networks</li>
            <li>No analytics or tracking tools</li>
            <li>No social media integrations</li>
            <li>No third-party data brokers</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="section">
          <h2>Contact Us</h2>
          <p>
            If you have questions about our privacy practices, terms of service,
            or your data, please contact us:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@leaveonly.app">support@leaveonly.app</a>
          </p>
          <p>We aim to respond to all inquiries within 48 hours.</p>
        </div>
      </div>

      <div className="footer">
        &copy; 2026 Leave App. All rights reserved.
      </div>
    </>
  );
}
