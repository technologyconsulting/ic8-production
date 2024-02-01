import react from "react";
import {
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  MicrophoneIcon,
  ChartPieIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import ApplicationDevelopment from "@/public/icons/application-development.svg";
import Audio from "@/public/icons/audio-lines.svg";
import BigData from "@/public/icons/big-data.svg";
import BusinessAnalysis from "@/public/icons/business-analysis.svg";
import BusinessManager from "@/public/icons/business-manager.svg";
import CableNetworks from "@/public/icons/cable-network.svg";
import Compass from "@/public/icons/compass.svg";
import Configuration from "@/public/icons/configuration.svg";
import CustomerCare from "@/public/icons/customer-care.svg";
import Data from "@/public/icons/data.svg";
import EmployeeData from "@/public/icons/employee-data-analysis.svg";
import Lightbulb from "@/public/icons/light-bulb.svg";
import Mockup from "@/public/icons/mockup.svg";
import Process from "@/public/icons/process.svg";
import Quality from "@/public/icons/quality-badge.svg";
import Security from "@/public/icons/security.svg";
import Server from "@/public/icons/server.svg";
import Service from "@/public/icons/service.svg";
import Solutions from "@/public/icons/solution.svg";
import UserNetwork from "@/public/icons/user-network.svg";
import WebChat from "@/public/icons/web-chat.svg";
import WebConfig from "@/public/icons/web-configuration.svg";

import { MdArchitecture } from "react-icons/md";

const features = [
  {
    name: "Business Analysis",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: BusinessAnalysis,
  },
  {
    name: "Business Architecture",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: Compass,
  },
  {
    name: "Business Change and Transformation",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: UserNetwork,
  },
  {
    name: "Contact Centre",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CustomerCare,
  },
  {
    name: "Cyber Security",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: Security,
  },
  {
    name: "Applications Development and Support",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: ApplicationDevelopment,
  },
  {
    name: "Mechanical Engineer",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: Configuration,
  },
  {
    name: "Electrical Engineer",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: Lightbulb,
  },

  {
    name: "IT Infrastructure",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: Server,
  },
  {
    name: "Operational Management",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: Process,
  },
  {
    name: "Project and Programme Management",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: BusinessManager,
  },
  {
    name: "Information and Technical Assurance",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: Quality,
  },
  {
    name: "Infrastructure Cabling",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: CableNetworks,
  },
  {
    name: "Unified Communications and Collaboration",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: WebChat,
  },
  {
    name: "Service Management",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: Service,
  },
  {
    name: "Software Development and Testing",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: Mockup,
  },
  {
    name: "Technical and Solution Architecture",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: Solutions,
  },
  {
    name: "AV Solutions",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: Audio,
  },
  {
    name: "Data Analysis and Architecture",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: BigData,
  },
  {
    name: "Data-Networking",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: Data,
  },
  {
    name: "Electronic Patient Records (ePR)",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: EmployeeData,
  },
  {
    name: "Enterprise Resource Planning (ERP)",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: WebConfig,
  },
];

export default function Services() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2
            id="services"
            className="mx-auto mb-12 w-fit scroll-mt-24 text-2xl font-bold md:mb-16 md:scroll-mt-40 md:text-3xl xl:mb-24 xl:text-4xl"
          >
            SERVICES
          </h2>
          <p className="mt-2 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why are we different and what are our characteristics?
          </p>
          <p className="mt-6 text-center text-lg leading-7 tracking-widest text-white text-opacity-60">
            <span className="text-ic8">IC8</span> is driven by passion for
            excellence, innovation, and transparency. We are constantly looking
            for opportunities to innovate and improve our services.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-y-16 xl:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white text-opacity-60">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-ic8teal">
                    <feature.icon
                      className="h-8 w-8 fill-white text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                {/* <dd className="mt-2 text-base leading-7 text-white">
                  {feature.description}
                </dd> */}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
