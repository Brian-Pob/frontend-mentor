import { A } from '@solidjs/router';
import { onMount } from 'solid-js';

const ArticlePreviewComponent = () => {
  onMount(() => {
    // window.location.href = 'https://cheerful-pastelito-dd1736.netlify.app/';
    // open in new tab
    window.open('https://cheerful-pastelito-dd1736.netlify.app/', '_blank');
  });
  return (
    <div>
      Redirecting...
      <A href="/Challenges">Click here to go back</A>
    </div>
  );
};

export default ArticlePreviewComponent;
