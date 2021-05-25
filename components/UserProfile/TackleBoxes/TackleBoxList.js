import { Fragment } from "react";

import Link from "next/link";
import Card from "../../UI/Card";
import TackleBox from "./TackleBox";

const TackleBoxList = ({ list }) => {
  return (
    <Fragment>
      <nav>
        <ul>
          {list.map((item) => (
            <Card>
              <TackleBox>
                <Link href="/user-profile/tackle-boxes/tackle-boxId">{}</Link>
              </TackleBox>
            </Card>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://tackle-junkie-default-rtdb.firebaseio.com/tackle-boxes.json"
  );

  const list = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      list,
    },
  };
}

export default TackleBoxList;
