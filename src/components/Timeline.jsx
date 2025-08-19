import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCode,
  faBriefcase,
  faStar,
  faChevronDown,
  faChevronRight,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faGraduationCap,
  faCode,
  faBriefcase,
  faStar,
  faCertificate,
};

const SkeletonAccordion = () => (
  <div className="accordion-container">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="skeleton-accordion-item">
        <div className="skeleton-header">
          <div className="skeleton-text"></div>
        </div>
      </div>
    ))}
  </div>
);

const EventItem = ({ event }) => (
  <div className="event-item">
    <div className="event-icon">
      {iconMap[event.icon] && <FontAwesomeIcon icon={iconMap[event.icon]} />}
    </div>
    <div className="event-content">
      <p className="event-date">{event.date}</p>
      <h4 className="event-title">{event.title}</h4>
      <p className="event-description">{event.description}</p>
    </div>
  </div>
);

const MonthGroup = ({ month, events, isExpanded, onToggle }) => {
  const panelHeight = isExpanded ? `${events.length * 150}px` : "0";
  return (
    <div className={`month-group ${isExpanded ? "expanded" : ""}`}>
      <div className="month-header" onClick={onToggle}>
        <h4>{month}</h4>
        <FontAwesomeIcon icon={faChevronRight} className="month-icon" />
      </div>
      <div className="events-panel" style={{ maxHeight: panelHeight }}>
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

const YearGroup = ({ year, months, expandedState, onToggle }) => {
  const isYearExpanded = expandedState.year === year;
  const panelHeight = isYearExpanded ? `${months.length * 65}px` : "0";

  return (
    <div className={`year-group ${isYearExpanded ? "expanded" : ""}`}>
      <div className="year-header" onClick={() => onToggle.year(year)}>
        <h3>{year}</h3>
        <FontAwesomeIcon icon={faChevronDown} className="accordion-icon" />
      </div>
      <div className="months-panel" style={{ maxHeight: panelHeight }}>
        {months.map(({ month, events }) => (
          <MonthGroup
            key={month}
            month={month}
            events={events}
            isExpanded={isYearExpanded && expandedState.month === month}
            onToggle={() => onToggle.month(month)}
          />
        ))}
      </div>
    </div>
  );
};

export default function Timeline({ sectionRef }) {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({ year: null, month: null });

  const apiUrl =
    "https://script.google.com/macros/s/AKfycbxPCbv7lMZw-tTq-RqPR5Z2iOJzIEnykQVrR-uhxiIXizTJorZo7a6Q3BniMZVGLnU/exec";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTimelineData(data);
        if (data.length > 0) {
          setExpanded({ year: data[0].year, month: null });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da timeline:", error);
        setLoading(false);
      });
  }, []);

  const handleYearToggle = (year) => {
    setExpanded((prev) => ({
      year: prev.year === year ? null : year,
      month: null,
    }));
  };

  const handleMonthToggle = (month) => {
    setExpanded((prev) => ({
      ...prev,
      month: prev.month === month ? null : month,
    }));
  };

  if (loading) {
    return (
      <section id="jornada" ref={sectionRef} className="timeline-section">
        <div className="interligacao-timeline">
          <h2 className="titulo-timeline">Minha Jornada</h2>
          <p className="texto-timeline">
            Carregando minha trajetória profissional e acadêmica...
          </p>
        </div>
        <SkeletonAccordion />
      </section>
    );
  }

  return (
    <section id="jornada" ref={sectionRef} className="timeline-section">
      <div className="interligacao-timeline">
        <h2 className="titulo-timeline">Minha Jornada</h2>
        <p className="texto-timeline">
          Clique em um ano para ver os meses, e em um mês para ver os detalhes.
        </p>
      </div>
      <div className="accordion-container">
        {timelineData.map(({ year, months }) => (
          <YearGroup
            key={year}
            year={year}
            months={months}
            expandedState={expanded}
            onToggle={{ year: handleYearToggle, month: handleMonthToggle }}
          />
        ))}
      </div>
    </section>
  );
}
