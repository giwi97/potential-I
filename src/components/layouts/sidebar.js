import React from "react";
import {
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
  FaChevronDown,
} from "react-icons/fa";

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li>
        <span>
          <FaInbox />
        </span>
        <span>Alerts</span>
      </li>
      <li>
        <span>
          <FaRegCalendar />
        </span>
        <span>Today</span>
      </li>
      <li>
        <span>
          <FaRegCalendarAlt />
        </span>
        <span>Upcoming</span>
      </li>
    </ul>

    <div className="sidebar__middle">
        <span>
            <FaChevronDown />
        </span>
        <h2>Tasks</h2>
    </div>
    <ul className="sidebar__tasks">All tasks</ul>
  </div>
);
