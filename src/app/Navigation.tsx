import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/orbit">Orbit</Link>
        </li>
        <li>
          <Link href="/excision">Excision</Link>
        </li>
      </ul>
    </nav>
  );
}
