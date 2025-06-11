function Dashboard() {
    return (
        <div>
            <div className="flex w-full mt-4">
                <button className="flex-1 btn btn-primary rounded-none border-l-0 border-r-0 h-22 p-0 flex flex-col items-center justify-center">
                    <span
                        className="w-10 h-10 rounded-full flex items-center justify-center text-2xl text-primary shadow bg-secondary-content"
                        style={{
                            boxShadow:
                                "0 0 0 2px var(--color-primary), 0 0 0 3.5px #ffffff",
                        }}
                    >
                        <img
                            src="icons/infant.svg"
                            alt="Infant"
                            className="w-5 h-5"
                        />
                    </span>
                    <span className="text-sm text-base-100 font-light">
                        Infant
                    </span>
                </button>

                <button className="flex-1 btn btn-primary rounded-none border-l-0 border-r-0 h-22 p-0 flex flex-col items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-2xl text-primary shadow">
                        <img
                            src="icons/assets.svg"
                            alt="Assets"
                            className="w-6 h-6"
                        />
                    </span>
                    <span className="text-sm text-base-100 font-light">
                        Assets
                    </span>
                </button>

                <div className="flex-1 flex items-center justify-center bg-primary rounded-none border-l-0 border-r-0 h-22 relative">
                    <button
                        className="w-36 h-36 rounded-full bg-accent text-primary flex flex-col items-center justify-center text-6xl border-4 border-base-100 absolute"
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            boxShadow:
                                "0 0 12px 3px rgba(0,0,0,0.25), 0 2px 6px 0 rgba(0,0,0,0.22)",
                        }}
                    >
                        <img
                            src="icons/plus.svg"
                            alt="Plus"
                            className="w-18 h-18 mb-1"
                        />
                        <span
                            className="text-2xl text-base-100"
                            style={{
                                fontFamily: "game-font-bold",
                                marginTop: "-0.5rem",
                            }}
                        >
                            Age
                        </span>
                    </button>
                </div>

                <button className="flex-1 btn btn-primary rounded-none border-l-0 border-r-0 h-22 p-0 flex flex-col items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-2xl text-primary shadow">
                        <img
                            src="icons/relationships.svg"
                            alt="Relationships"
                            className="w-5 h-5"
                        />
                    </span>
                    <span className="text-sm text-base-100 font-light">
                        Relationships
                    </span>
                </button>

                <button className="flex-1 btn btn-primary rounded-none border-l-0 border-r-0 h-22 p-0 flex flex-col items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-2xl text-primary shadow">
                        <img
                            src="icons/activities.svg"
                            alt="Activities"
                            className="w-6 h-6"
                        />
                    </span>
                    <span className="text-sm text-base-100 font-light">
                        Activities
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Dashboard;
