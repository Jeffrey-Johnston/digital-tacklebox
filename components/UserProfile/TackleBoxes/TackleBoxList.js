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

export default TackleBoxList;
