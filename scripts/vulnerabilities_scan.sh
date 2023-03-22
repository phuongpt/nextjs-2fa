#!/bin/bash
#Type: null, "info", "low", "moderate", "high", "critical", or "none"

BASE_COMMAND="npm audit"

ARGUMENTS=$@
FAIL_ON_VIOLATION="false"

for ARGUMENT in $ARGUMENTS; do
  if [[ "$ARGUMENT" == *"--audit-level"* ]]; then
    BASE_COMMAND="${BASE_COMMAND} $ARGUMENT"
  elif [[ $ARGUMENT == *"--deny-pr="* ]]; then
    FAIL_ON_VIOLATION=${ARGUMENT//"--deny-pr="/}
  fi
done

echo "Running vulnerabilities check command: [$BASE_COMMAND]"
echo "Deny pull request option: [$FAIL_ON_VIOLATION]"

AUDIT_RESULT=eval $BASE_COMMAND

if [ "$?" = 0 ]; then
  echo "No vulnerabilities found"
  exit 0
else
  if $FAIL_ON_VIOLATION; then
    echo "Vulnerabilities found and pull request will be rejected"
    exit 1
  else
    echo "Vulnerabilities found but the pull request will not be rejected"
    exit 0
  fi
fi
