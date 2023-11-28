import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <ul className="flex m-10 gap-10">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/clientside">
            <li>clientside</li>
          </Link>
          <Link href="/clientsidehoc">
            <li>clientsidehoc</li>
          </Link>
          <Link href="/serverside">
            <li>serverside</li>
          </Link>
          <Link href="/middlewareside">
            <li>middlewareside</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
