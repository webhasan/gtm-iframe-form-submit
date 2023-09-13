# Tracking Iframe Form Interactions and Form Submissions with Google Tag Manager

If you lack access to the iframe source site, it is quite impossible to track iframe form submit event with Google Tag Manager. However, a solution to this problem is available through the following code snippet.

## How to Implement

1. In Google Tag Manager, create a new tag as a custom HTML tag.
2. Inside the tag, paste the entire code from the `script.js` file provided in this repository. Don't forget to wrap the code with ```<script>``` tag.
3. Set the trigger to fire on *All Pages* page views.

Once you've configured this setup, you'll begin receiving Google Tag Manager dataLayer events:

- **iframe_from_start**: This event will be triggered when a visitor first interacts with the form within the iframe.
- **iframe_from_submit**: You'll receive this event when the form is successfully submitted.

**Recommendations:** Keep in mind that your web page may contain multiple iframes. Therefore, it is highly recommended to adjust the iframe selector to target the correct iframe in ***line no: 12*** of the code. You can utilize CSS class selectors or ID selectors for this purpose.

## Contact Me
Md Hasanuzzaman

Email: webhasan24@gmail.com

Linkedin: https://linkedin.com/md-h

Youtube: https://www.youtube.com/@LeoMeasure-nr3pf

