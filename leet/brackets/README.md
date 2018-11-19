Given a string of only left and right braces: "(" and ")",

Find the splitting location where the number of Left braces on the left split is equal to the number of Right braces in the right split.

For example:

(())

Split point is after character 2, so the answer is 2.  A split there would leave: (( and ))

Example:

(())))

Split point is after character 4, so the answer is 4.  A split would leave (()) and )), leaving two left braces on the left, and two right braces on the right.

Example:

)(

Split point is at 1, as a split there leaves 0 left braces on the left, and 0 right braces on the right.

Example:

))))))()

Split is at 7, leaving one left brace on the left, and one on the right.

Example:


Returns 0, as there is no data to split.

Examples:
)))
(((

Return 3 and 0 respectively.


I believe that I have most test cases covered, and that my code should solve the given problem.
