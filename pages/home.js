import { Box } from "@mui/material";

export default function Home() {
  return (
      <Box>
        {[...new Array(20)]
          .map(
            () => `Esse culpa voluptate culpa ut qui. Ullamco reprehenderit reprehenderit non ex. Enim aliqua laborum cillum reprehenderit duis est qui est ut aliquip ex amet ut deserunt. Eu cupidatat nisi aute consectetur sit nostrud esse exercitation adipisicing tempor in. Quis aute ea elit duis tempor cupidatat. Ad proident qui elit ea duis qui eu in proident duis cillum consectetur do.

  Amet officia occaecat dolore dolor excepteur cillum cillum et proident esse eiusmod minim deserunt. Tempor sint commodo nulla tempor amet. Qui dolor laborum id consectetur. Amet occaecat deserunt tempor et nisi sunt ex amet. Anim quis sit officia amet ex adipisicing aliqua culpa. Officia est sit anim est est et laborum deserunt nostrud nulla ex quis. Ut ullamco exercitation ullamco adipisicing cupidatat nostrud excepteur proident.`,
          )
          .join('\n')}
      </Box>
  );
}