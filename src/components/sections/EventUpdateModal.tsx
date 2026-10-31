
"use client";

import { useEffect, useState } from "react";

export function EventUpdateModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [showAnnouncement, setShowAnnouncement] = useState(false);

    useEffect(() => {
        const dismissed = sessionStorage.getItem("nesi-event-update-dismissed");

        if (!dismissed) {
            setIsOpen(true);
        }
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        setShowAnnouncement(false);
        sessionStorage.setItem("nesi-event-update-dismissed", "true");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">

                {/* Close Button */}
                <button
                    onClick={closeModal}
                    aria-label="Close announcement"
                    className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-gray-600 shadow-md transition hover:bg-gray-100 hover:text-black"
                >
                    &times;
                </button>

                {!showAnnouncement ? (
                    /* Announcement Banner */
                    <div className="relative overflow-hidden bg-[#071C35] px-6 py-12 text-center text-white sm:px-12">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#F5B942]">
                            Official Event Update
                        </p>

                        <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                            THE COUNTDOWN
                            <br />
                            CONTINUES.
                        </h2>

                        <p className="mt-3 text-xl font-bold text-[#F5B942] sm:text-2xl">
                            NESI WEEK 2026 IS RESCHEDULED.
                        </p>

                        <div className="mx-auto my-7 h-1 w-16 rounded-full bg-[#F5B942]" />

                        <p className="text-lg font-extrabold sm:text-xl">
                            13–20 DECEMBER 2026
                        </p>

                        <p className="mt-2 text-sm font-medium text-gray-200 sm:text-base">
                            VELODROME, NATIONAL STADIUM, ABUJA, NIGERIA
                        </p>

                        <h3 className="mt-8 text-2xl font-bold">
                            POWERING THE FUTURE
                        </h3>

                        <p className="mt-2 text-sm text-gray-300">
                            A bigger vision. Stronger partnerships. Greater impact.
                        </p>

                        {/* <p className="mt-5 text-xs leading-relaxed text-gray-300">
                            Co-organised by NESI Platform Limited and the Federal Ministry of Power.
                        </p> */}

                        <button
                            onClick={() => setShowAnnouncement(true)}
                            className="mt-8 rounded-full bg-[#F5B942] px-8 py-3 font-bold text-[#071C35] transition hover:bg-white"
                        >
                            Read Full Announcement
                        </button>

                        {/* <p className="mt-6 text-xs text-gray-300">
                            info@nigeriaelectricityweek.com
                            <br />
                            www.nigeriaelectricityweek.com
                        </p> */}
                    </div>
                ) : (
                    /* Full Announcement */
                    <div className="px-6 py-10 sm:px-10">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#C58A16]">
                            Important Announcement
                        </p>

                        <h2 className="mt-3 text-2xl font-extrabold text-[#071C35]">
                            NESI WEEK 2026 RESCHEDULED
                        </h2>

                        <p className="mt-3 font-bold text-[#C58A16]">
                            A Bigger Vision. Stronger Partnerships. Greater Impact.
                        </p>

                        <p className="mt-3 font-bold text-gray-800">
                            New Dates: 13–20 December 2026 | Abuja, Nigeria
                        </p>

                        <div className="mt-6 space-y-4 text-sm leading-7 text-gray-700">
                            <p>
                                Dear Esteemed Stakeholders, Partners, Exhibitors, Speakers,
                                Innovators and Participants,
                            </p>

                            <p>
                                The journey to Powering the Future continues!
                            </p>

                            <p>
                                We wish to inform you that NESI WEEK (Nigeria Electricity Supply Industry) 2026, the National Energy, Sustainability & Innovation
                                Week, has been rescheduled from its previously announced
                                dates of 15–22 November 2026 to 13–20 December 2026 in Abuja,
                                Nigeria.
                            </p>

                            <p>
                                This adjustment follows the need for further stakeholder
                                coordination and additional preparations to strengthen
                                programme delivery and ensure a more impactful experience
                                for everyone involved.
                            </p>

                            <p>
                                Co-organised by NESI Platform Limited and the Federal
                                Ministry of Power, NESI WEEK is more than an event. It is a
                                national platform for shaping conversations, unlocking
                                opportunities, showcasing innovation and accelerating
                                collaboration across Nigeria’s electricity and energy
                                ecosystem.
                            </p>

                            <p>
                                Under the theme “Powering the Future,” we remain committed
                                to bringing together policymakers, regulators, industry
                                leaders, investors, manufacturers, technology providers,
                                entrepreneurs and innovators to explore practical solutions
                                and new opportunities for the future of energy in Nigeria.
                            </p>

                            <p>
                                From the NESI CEO & Policy Forum and NESI Expo to the NESI
                                Innovation Challenge, NESI Future Energy Experience™, NESI
                                Games and NESI Awards, the programme is designed to connect
                                ideas with action, innovation with investment, and
                                partnerships with tangible opportunities.
                            </p>

                            <p>
                                We sincerely apologise for any inconvenience the change of
                                dates may cause and appreciate the understanding, patience
                                and continued support of our partners, speakers, exhibitors
                                and participants.
                            </p>

                            <p className="font-bold text-[#071C35]">
                                Please update your calendars: 13–20 December 2026, Abuja,
                                Nigeria.
                            </p>

                            <p>
                                All existing stakeholders and participants are encouraged
                                to remain engaged as we continue preparations for this
                                landmark gathering.
                            </p>

                            <p>
                                The mission remains unchanged. The vision remains bold.
                                The commitment to Nigeria’s electricity and energy future
                                remains unwavering.
                            </p>

                            <p className="font-bold text-[#071C35]">
                                NESI WEEK 2026 — POWERING THE FUTURE.
                            </p>

                            <p>
                                We look forward to welcoming you to Abuja in December as
                                we bring the Nigerian electricity and energy ecosystem
                                together to connect, collaborate, innovate and power the
                                future.
                            </p>

                            <p>
                                For enquiries:{" "}
                                <a
                                    href="mailto:info@nigeriaelectricityweek.com"
                                    className="font-semibold text-blue-700"
                                >
                                    info@nigeriaelectricityweek.com
                                </a>
                            </p>

                            {/* <p>
                                Official website: www.nigeriaelectricityweek.com
                            </p> */}

                            <p className="font-bold text-[#071C35]">
                                NESI Platform Limited
                                <br />
                                Co-organisers of NESI WEEK 2026, alongside the Federal
                                Ministry of Power.
                            </p>
                        </div>

                        <button
                            onClick={closeModal}
                            className="mt-8 w-full rounded-full bg-[#071C35] px-6 py-3 font-bold text-white transition hover:bg-[#12385F]"
                        >
                            Close Announcement
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
