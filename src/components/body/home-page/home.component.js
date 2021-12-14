import "./home.component.css";
export default function Home() {
  return (
    <>
      <section>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/myAvatar.png"}
            className="myAvatar"
            alt="asdas"
          ></img>
        </div>
      </section>
    </>
  );
}
