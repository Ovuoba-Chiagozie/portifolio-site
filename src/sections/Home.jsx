import NavBar from "../components/navBar";
function Home() {
  return (
    <div className="flex h-[100vh] flex-col py-12">
      <NavBar />
      <div className="mt-5 flex-grow bg-white rounded-xl">
        <div>
          <div>Hey, I'm Chiagozie</div>
          <div>
            A full-stack software engineer with a history of helping startups
            build fully featured products that are reliable, scales, and easy to
            maintain
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
