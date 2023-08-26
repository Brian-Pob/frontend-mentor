import { A } from '@solidjs/router';
import { onMount } from 'solid-js';

const redirectPaths: { [key: string]: string } = {
  '/ArticlePreviewComponent': 'https://cheerful-pastelito-dd1736.netlify.app/',
};

const Redirector = () => {
  onMount(() => {
    window.open(redirectPaths[window.location.pathname], '_blank');
  });
  return (
    <div>
      Redirecting...
      <A href="/Challenges">Click here to go back</A>
    </div>
  );
};

export default Redirector;
