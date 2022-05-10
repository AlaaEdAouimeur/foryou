import { useRouter } from "next/router";
import { useEffect } from 'react';

export default function Redirect404s() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return null;
}
