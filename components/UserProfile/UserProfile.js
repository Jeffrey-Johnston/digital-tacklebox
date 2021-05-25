import Link from "next/link";

const UserProfile = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/user-profile/catch-log">Catch Log</Link>
          </li>
          <li>
            <Link href="/user-profile/tackle-boxes">Tackle Boxes</Link>
          </li>
          <li>
            <Link href="/user-profile/combos">Combos</Link>
          </li>
          <li>
            <Link href="/user-profile/rods">Rods</Link>
          </li>
          <li>
            <Link href="/user-profile/reels">Reels</Link>
          </li>
          <li>
            <Link href="/user-profile/equiptment">Equiptment</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserProfile;
