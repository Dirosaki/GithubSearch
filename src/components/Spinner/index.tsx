import { BounceLoader } from "react-spinners";
import { SerializedStyles } from "@emotion/react";

interface SpinnerProps {
  loading: boolean;
  css?: SerializedStyles | string | undefined;
}

export function Spinner({ loading = false, css }: SpinnerProps) {
  return <BounceLoader color="#04bffa" size={64} loading={loading} css={css} />;
}
