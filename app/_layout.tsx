/*import {Stack, useRouter} from "expo-router";
import {useEffect} from "react";

function RouteGuard({children}: {children: React.ReactNode}) {
  const isAuth = false;
const router =useRouter();
  useEffect(() => {
    if (!isAuth){
      router.replace("/auth");

    }
  }, []);


  return <>{children}</>;
}

export default function RootLayout() {
  return (
      <RouteGuard>
      <Stack>
    <Stack.Screen name='(tabs)' options={{headerShown: false}} />
  </Stack>
      </RouteGuard>
  );

}*/

import {Stack, useRouter} from "expo-router";
import {useEffect} from "react";

function RouteGuard({children}: { children: React.ReactNode }) {
  const isAuth = false;
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAuth) {
        router.replace("/auth");
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isAuth, router]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
      <RouteGuard>
        <Stack>
          <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
        </Stack>
      </RouteGuard>
  );

}

