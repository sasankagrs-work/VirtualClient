﻿# Stress-ng Workload Profiles
The following profiles run customer-representative or benchmarking scenarios using the StressNg workload.

* [Workload Details](./stress-ng.md)  

:::danger
* Use Stress-ng with caution as some of the tests can make a system run hot on poorly designed hardware and also can cause excessive system thrashing which may be difficult to stop.*
:::

## PERF-STRESSNG.json
Runs the Stress-ng workload in short but constant bursts to assess the performance of a system under stress.

* [Workload Profile](https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-STRESSNG.json) 

* **Supported Platform/Architectures**
  * linux-x64
  * linux-arm64

* **Supported Operating Systems**
  * Ubuntu 18
  * Ubuntu 20
  * Ubuntu 22

* **Supports Disconnected Scenarios**  
  * No. Internet connection required.

* **Dependencies**  
  The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively.
  * Internet connection.

  Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:
  * [Installing Dependencies](https://microsoft.github.io/VirtualClient/docs/category/dependencies/)

* **Profile Runtimes**  
  The following timings represent the length of time required to run a single round of profile actions. These timings can be used to determine
  minimum required runtimes for the Virtual Client in order to get results. These are estimates based on the number of system cores.

  * Expected Runtime (8-core/vCPU VM) = 1 minute

* **Usage Examples**  
  The following section provides a few basic examples of how to use the workload profile.

  ``` bash
  # Execute the workload profile
  VirtualClient.exe --profile=PERF-STRESSNG.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"
  ```