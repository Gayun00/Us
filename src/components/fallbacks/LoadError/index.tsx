import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  resetErrorBoundary: () => void;
}

const LoadError = ({ resetErrorBoundary }: Props) => {
  return (
    <div className="py-20 flex flex-col items-center justify-center space-y-9 border-us-gray-border border-[1px] rounded-md">
      <p>요청에 실패했어요</p>
      <p>잠시 후 다시 시도해주세요</p>
      <Button type="button" onClick={resetErrorBoundary}>
        다시 시도
      </Button>
    </div>
  );
};

export default LoadError;
