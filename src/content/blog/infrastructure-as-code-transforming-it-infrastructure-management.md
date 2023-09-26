---
title: 'Infrastructure as Code: Transforming IT Infrastructure Management'
updateDate: 2023-09-24
publishDate: 2023-09-24
image: 'charts-1.jpg'
tags: ['devops']
author: marko-spasenovski
canonicalUrl: 'https://mspasenovski.hashnode.dev/infrastructure-as-code-transforming-it-infrastructure-management'
excerpt:
  'Introduction to the concept of Infrastructure as Code. What it is, why it exists and how it revolutionized IT infrastructure management.'
---
# Wait, what do you mean by “infrastructure”?

Before we begin explaining Infrastructure as Code, we first need to define what we mean by infrastructure.

When we talk about IT infrastructure, we’re talking about interdependent elements which are categorized into two core groups: hardware and software infrastructure elements.

Hardware components include computers, servers, data centers, routers, switches, etc.

Software components include operating systems, web servers, firewalls, resource management systems, databases, etc.

The two primary types of IT infrastructure are traditional and cloud infrastructure.

I won’t continue into details, as it would escape the scope of this article, however, I’ve linked some resources if you wish to further read up on these concepts at the end of this article.

# Okay, cool, now what do you mean by “infrastructure as code”?

As the name implies, Infrastructure as Code (IaC, a common abbreviation) is the practice of automating and managing IT infrastructure through code, leveraging DevOps and traditional software development principles (like code versioning). It involves using a descriptive coding language to define and provide infrastructure consistently, ensuring rapid development, cost control and reliability, relative to treating infrastructure like standard application code.

I mentioned it uses a **descriptive** coding language. This is not always the case, as **imperative** IaC exists and we’ll quickly discuss that at the end of this article.

# History

I want to take a very short detour to explain the history of deploying and maintaining software infrastructure and why the process of IaC was developed.

In the era before IaC, setting up and managing infrastructure typically involved several manual tasks and processes, including:

- Providing physical hardware: This means providing physical (often on-site) servers, switches, routers, storage devices, etc.

- Operating system installation and configuration: After the hardware was set up, system administrators had to manually install and configure operating systems on each server.

- Deploying the software application: Each application had to be installed and configured individually and manually.

- Network configuration: Manual setting up and managing network connections, firewalls, load balancers, and other networking components required manual configurations

- Storage management: Managing storage resources involved creating partitions, configuring RAID arrays, and allocating storage space to different applications and servers manually.

The main downside of manually setting up infrastructure was, well, obviously that we’re doing all of this **manually**, but also:

- Slow deployment

- Error-prone

- Lack of scalability

- Inconsistency

- Difficulty in versioning

Infrastructure as Code addresses these challenges by automating the provisioning and management of infrastructure using code, enabling rapid, consistent, and error-free deployments while facilitating versioning and scalability. It represents a significant advancement in the field of IT infrastructure management.

# Other benefits

Besides the things we highlighted in the previous section, IaC has other benefits:

- Allows a company to more easily enter the cloud computing scene

- Cost reductions

- Increased deployment speeds

- Eliminates configuration drift

You might be wondering what I mean by configuration drift so here’s a short definition:

Ad hoc configuration updates and changes can cause a discrepancy between the environments used for development, testing, and deployment, which is known as configuration drift. When designing apps and services that must adhere to stringent regulatory compliance standards, this might lead to problems during deployment, security vulnerabilities, and hazards. By consistently offering the same environment, IaC reduces drift.

IaC is also crucial for DevOps, as it streamlines the process and CI/CD by automating provisioning. It unifies teams and ensures consistent deployments. IaC's benefits span all environments, including production. It extends DevOps principles to infrastructure, enabling rigorous testing and version control.

# Declarative vs. Imperative approach

Declarative usually defines “what” we want to happen, while imperative defines “how” we want the thing to happen.

In most cases, the declarative approach, also known as the functional approach, is preferred. It involves specifying the desired final infrastructure state, with the IaC software handling tasks like VM setup, software installation, and version management. However, it may require skilled administrators to set up and manage.

On the other hand, the imperative approach, or procedural approach, involves creating automation scripts for each step of infrastructure provisioning. While this may be more manageable for existing staff, it can become complex and costly at scale.

I’m going to leave you with this fantastic analogy I read on IBM’s website:

> Choosing a declarative or imperative approach is analogous to using a GPS or following turn-by-turn instructions. With a GPS, you enter an address and the GPS does the rest, plotting the fastest route and avoiding traffic for you, but you probably need an expert to tell you why it made the choices it made. The turn-by-turn instructions are based on personal experience; the provider knows the route and why he/she chose it, but if you encounter obstacles or want to optimize the route, you have to call for help or do the work yourself.

# Conclusion

Hey, you made it to the end! Thanks for reading my article ❤️🙏.

Infrastructure as Code is a big part of not just DevOps, but the entire software development and maintenance process. It provides codification, versioning, ease of life, and most importantly consistency.

If you enjoyed this read, the next few articles I’m going to put out are going to be on the same topic so make sure to leave a follow!

I’m going to leave you with some extra studying materials if you want to dive even deeper into IaC.

# Extra resources

["Infrastructure as Code - Crash Course" by freecodecamp](https://www.youtube.com/watch?v=EtEb40LE5zQ)

[Red Hat’s definition of Infrastructure as Code](https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac#:~:text=Infrastructure)

[IBM’s definition of Infrastructure as Code](https://www.ibm.com/topics/infrastructure-as-code)

["What is IT Infrastructure?" by IBM](https://www.ibm.com/topics/infrastructure-as-code)
