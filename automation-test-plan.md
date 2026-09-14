# Cypress Automation Test Plan

## Objective
To create a stable repository of Cypress tests that demonstrates the core UI automation skills represented by the following tasks:

- Dynamic ID
- Class Attribute
- Hidden layers
- Load Delay
- Client side delay
- Click
- Text input
- Scrollbars
- Dynamic table
- Verify text
- Progress bar
- Visibility
- Sample app
- Mouse-over
- Non-breaking space
- Over-lapped elements
- Shadow DOM
- Alerts
- File upload
- Animated button
- Disabled input
- Auto-wait
- Frames
- Geo-location
- Clear input
- Scroll to click
- CSS selectors
- Select

This suite should be reliable, easy to maintain, and clearly organized around reproducible user interactions.

## Scope
This plan covers the creation of a reusable Cypress E2E repository focused on browser automation scenarios and real UI behavior. The intent is to validate the app’s front-end responsiveness, element targeting, form interaction, delayed rendering, and edge-case DOM scenarios without relying on brittle implementation details.

## Test Strategy

### 1. Use stable selectors
- Prefer semantic selectors such as accessible labels, placeholder text, role-based queries, and stable test attributes when available.
- Use CSS selectors only when necessary and keep them specific to the element being targeted.
- Avoid selectors based on unstable IDs, generic class names, or deeply nested DOM structures unless they are the only reliable option.

### 2. Favor Cypress auto-waiting
- Use Cypress’s built-in retries and waiting for element visibility and state changes.
- Reserve explicit waits for app-specific delays that are not resolved by normal Cypress waiting.
- Avoid arbitrary fixed sleeps that make tests flaky.

### 3. Assert against user-visible behavior
- Verify text, visibility, enabled/disabled state, selection values, alert handling, and successful page updates.
- Validate real user outcomes instead of implementation-specific internals.

### 4. Group tests by behavior type
Organize the suite around the most common automation categories:
- Basic interaction flows: Click, Text input, Clear input, Select
- Timing and async handling: Load Delay, Client side delay, Progress bar, Auto-wait, Animated button
- Layout and UI targeting: Visibility, Hidden layers, Over-lapped elements, Scrollbars, Scroll to click
- Data-driven UI: Dynamic table, Verify text, Dynamic ID
- Browser and DOM edge cases: Shadow DOM, Frames, Alerts, Geo-location, File upload
- Special-character and state validation: Non-breaking space, Disabled input, Mouse-over, Sample app

## Coverage Matrix

| Task | Coverage area | Validation focus | Recommended approach |
| --- | --- | --- | --- |
| Dynamic ID | Selector reliability | Handles changing element IDs | Use text, labels, or stable attributes when possible |
| Class Attribute | CSS selectors | Targeting elements via class names | Use exact, stable class selectors if necessary |
| Hidden layers | Visibility logic | Elements hidden behind overlays | Assert visible state before interaction |
| Load Delay | Async behavior | Delayed rendering or loading | Wait for element before asserting state |
| Client side delay | UI updates | After client processing | Assert final state, not intermediate timing |
| Click | Basic interaction | Button and link actions | Verify page or state change after click |
| Text input | Form interaction | Typing validation | Assert typed value and field state |
| Scrollbars | Layout | Scrollable containers | Scroll into view before interacting |
| Dynamic table | Data-driven UI | Table values and row updates | Check specific row and cell values |
| Verify text | Content assertions | Text presence and accuracy | Assert exact visible text or partial match |
| Progress bar | Async progress | Loading completion | Wait for final value and completion state |
| Visibility | Element state | Hidden or visible states | Use should('be.visible') and should('not.be.visible') |
| Sample app | Full flow checks | End-to-end demonstration | Use as smoke/regression baseline |
| Mouse-over | Hover behavior | Tooltips and hover states | Trigger hover and assert resulting UI |
| Non-breaking space | Special characters | Whitespace edge cases | Validate rendered text precisely |
| Over-lapped elements | Element targeting | Covered or stacking elements | Use stable selectors and coordinate-safe assertions |
| Shadow DOM | DOM encapsulation | Elements inside shadow roots | Use proper shadow-root traversal |
| Alerts | Browser dialogs | Alert and confirmation flows | Stub or accept/deny through Cypress |
| File upload | Form attachments | Uploading files | Use fixture files and assert upload state |
| Animated button | Transition states | Buttons changing while animating | Wait for stable state before click |
| Disabled input | State validation | Field disabled behavior | Assert disabled property and blocked action |
| Auto-wait | Reliability | Built-in retries and polling | Let Cypress wait instead of fixed sleeps |
| Frames | Embedded content | Iframe interaction | Use .its('0.contentDocument') or frame support |
| Geo-location | Browser permission | Localization handling | Stub geolocation data in test setup |
| Clear input | Form reset | Clearing field values | Assert field is empty after clear |
| Scroll to click | Off-screen actions | Clicking out-of-view elements | Scroll into view before click |
| CSS selectors | Query strategy | DOM structure identification | Keep selectors precise and resilient |
| Select | Dropdown interaction | Option selection | Assert selected option and resulting UI |

## Test Execution Order
1. Smoke test / sample app readiness
2. Basic interactions
   - Click
   - Text input
   - Clear input
   - Select
   - Verify text
3. Selector and visibility checks
   - Dynamic ID
   - Class Attribute
   - CSS selectors
   - Visibility
   - Hidden layers
   - Over-lapped elements
4. Timing and async validation
   - Load Delay
   - Client side delay
   - Progress bar
   - Auto-wait
   - Animated button
5. Mouse and scrolling coverage
   - Mouse-over
   - Scrollbars
   - Scroll to click
6. Advanced browser and DOM coverage
   - Frames
   - Shadow DOM
   - Dynamic table
   - Sample app
7. Edge-case and special scenario coverage
   - Non-breaking space
   - Alerts
   - File upload
   - Geo-location
   - Disabled input

## Recommended Test Structure
- Keep each task in a clearly named spec file or grouped spec section.
- Use reusable helper commands for common interactions such as typing, clearing, selecting, and waiting for visible state.
- Keep tests independent to avoid cross-test failures from shared state.
- Save fixture files for upload scenarios and dynamic data checks.

## Acceptance Criteria
The plan is complete when all of the following are true:

- Every task listed above is represented in the Cypress test suite or in the planned coverage matrix.
- The suite uses stable selectors and avoids flaky implementation-specific queries.
- Timing-sensitive cases are handled with Cypress waiting mechanisms rather than arbitrary sleeps.
- Assertions validate actual user-visible outcomes.
- The repository structure is easy to maintain and extend as new scenarios are added.
- The suite can be run locally or in CI without unstable retries or brittle logic.

## Notes and Considerations
- Use viewport control to test scroll and overlap behavior consistently.
- For special-character scenarios, validate the exact rendered output while keeping tests readable.
- For geolocation and alerts, use controlled stubs to avoid environment-dependent failures.
- Maintain clear naming conventions so the suite is understandable to future contributors.
- Prioritize reliability over clever selectors or overly fragile DOM assumptions.
