const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in </h1>
  ) : (
    <h1>You are Not signed In</h1>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  return {};
};

export default LandingPage;
