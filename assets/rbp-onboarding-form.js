(function() {
  const forms = document.querySelectorAll('[data-rbp-onboarding-form]');
  if (!forms.length) return;

  const escapeSelectorValue = (value) => {
    if (window.CSS && typeof window.CSS.escape === 'function') {
      return window.CSS.escape(value);
    }

    return String(value).replace(/[^a-zA-Z0-9_-]/g, '\\$&');
  };

  forms.forEach(form => {
    const submitBtn = form.querySelector('button[type="submit"]');
    const messageContainer = form.querySelector('[data-rbp-onboarding-message]');

    const showMessage = (text, isError = false) => {
      if (!messageContainer) return;
      messageContainer.textContent = text;
      messageContainer.classList.remove('rbp-onboarding-hidden', 'success', 'error');
      messageContainer.classList.add(isError ? 'error' : 'success');
    };

    const clearErrors = () => {
      form.querySelectorAll('.rbp-onboarding-field-error').forEach(el => {
        el.textContent = '';
        el.classList.add('rbp-onboarding-hidden');
      });
      if (messageContainer) messageContainer.classList.add('rbp-onboarding-hidden');
    };

    const handleResponse = async (response) => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
      }

      if (response.ok) {
        let data;
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
          try {
            data = await response.json();
          } catch (e) {
            console.error('JSON parse error:', e);
          }
        }

        if (data && data.ok) {
          showMessage(data.message || 'Submission received.');
          if (data.redirect) {
            window.location.href = data.redirect;
          } else {
            form.reset();
          }
        } else if (data && !data.ok) {
          showMessage(data.message || 'Please check the form for errors.', true);
          if (data.errors) {
            Object.keys(data.errors).forEach(key => {
              const escapedKey = escapeSelectorValue(key);
              const field = form.querySelector(`[name="${escapedKey}"], [name="metadata[${escapedKey}]"]`);
              if (field) {
                const wrapper = field.closest('.rbp-onboarding-field');
                const errorEl = wrapper ? wrapper.querySelector('.rbp-onboarding-field-error') : null;
                if (errorEl) {
                  errorEl.textContent = data.errors[key];
                  errorEl.classList.remove('rbp-onboarding-hidden');
                }
              }
            });
          }
        } else if (response.redirected && response.url) {
          window.location.href = response.url;
        } else {
          showMessage('Thank you! Your submission has been received.');
          form.reset();
        }
      } else {
        let errorMsg = 'We could not process the request right now. Please try again.';
        try {
          const errData = await response.json();
          if (errData && errData.message) errorMsg = errData.message;
        } catch(e) {}
        showMessage(errorMsg, true);
      }
    };

    form.addEventListener('submit', async (e) => {
      const action = form.getAttribute('action');
      if (!action || !action.startsWith('/')) return;

      e.preventDefault();
      clearErrors();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
      }

      const formData = new FormData(form);
      const urlContext = form.querySelector('[name="urlContext"]');
      if (urlContext) urlContext.value = window.location.href;

      try {
        const response = await fetch(action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        await handleResponse(response);
      } catch (error) {
        console.error('Submission error:', error);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.classList.remove('loading');
        }
        showMessage('A connection error occurred. Please check your internet and try again.', true);
      }
    });
  });
})();
