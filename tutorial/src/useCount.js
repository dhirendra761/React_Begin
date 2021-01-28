import { useEffect } from "react";
export default function useCount(props) {
  useEffect(() => {
    document.title = props;
  });
}
