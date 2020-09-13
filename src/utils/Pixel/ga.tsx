const GoogleAnalyticsPixel = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-96015676-1"
    ></script>

    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-96015676-1');
          `
      }}
    />
  </>
);

export default GoogleAnalyticsPixel;
