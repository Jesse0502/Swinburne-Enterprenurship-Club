import { Box, Button } from "@chakra-ui/react";
import { memo, ReactNode, useState } from "react";

interface Props {
  noOfLines?: number;
  children: ReactNode;
}

export const ExpandableText = memo(({ noOfLines = 4, children }: Props) => {
  const [expandedCount, setExpandedCount] = useState(noOfLines);

  const handleToggle = () =>
    setExpandedCount(expandedCount ? undefined : noOfLines);

  return (
    <Box display="inline-block" as="span">
      <Box noOfLines={expandedCount}>{children}</Box>
      <Button
        size="sm"
        variant="link"
        fontWeight="bold"
        colorScheme="slate"
        textDecoration="underline"
        onClick={handleToggle}
      >
        {!expandedCount ? "Show less" : "Read more"}
      </Button>
    </Box>
  );
});
