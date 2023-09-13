(function() {
  /**
   * Author: Md Hasanuzzaman
   * Eamil: webhasan24@gmail.com
   * Linkedin: https://linkedin.com/md-h
   */

    var iframeSelector = 'iframe'; // change this  as your iframe selector

    var iframe = document.querySelector(iframeSelector);
    var iframeHeightAfterSubmission = .5;
    var isFormSubmitted = false;
    var isInsideIframe = false;
    var isCodeExecuted = false;
    var iframeHeight;

    var observer = new MutationObserver(function(mutationsList, observer) {

       var currentHeight = iframe.offsetHeight;

       if(currentHeight <  iframeHeight * iframeHeightAfterSubmission && !isFormSubmitted) {
        observer.disconnect();

        isFormSubmitted = true;
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            event: 'iframe_form_submit',
            form_location: window.location.href,
            iframe_id: iframe.getAttribute('id'),
            iframe_class: iframe.getAttribute('class')
        });
       }
    });

    function handleMouseOver(event) {
        if (event.target.closest(iframeSelector)) {
            isInsideIframe = true;
        } else {
            isInsideIframe = false;
        }
    }

    document.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('blur', function() {

        if(isInsideIframe && !isCodeExecuted) {
             document.removeEventListener('mouseover', handleMouseOver);

            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                event: 'iframe_form_start',
                form_location: window.location.href,
                iframe_id: iframe.getAttribute('id'),
                iframe_class: iframe.getAttribute('class')
            });

             isCodeExecuted = true;
             iframeHeight  = iframe.offsetHeight;
             observer.observe(iframe, { attributes: true, childList: true, subtree: true });
        }
    });
})()
