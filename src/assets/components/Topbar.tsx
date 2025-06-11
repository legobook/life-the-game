function Topbar() {
    // Placeholder dollar amount
    const bank_balance = 123456789;

    return (
        <div className="w-full bg-base-200 py-2 shadow-md border-b-1 border-base-300">
            <div className="flex justify-between items-center">
                <div className="ml-6 flex items-center">
                    <img
                        src="https://api.dicebear.com/7.x/personas/svg?seed=player"
                        alt="Avatar"
                        className="w-10 h-10 rounded-full border-2 border-primary"
                    />
                    <div className="ml-3 flex flex-col items-start">
                        <div
                            className="text-2xl text-primary"
                            style={{ fontFamily: "game-font-bold" }}
                        >
                            Monica Butterfield
                        </div>
                        <div className="text-sm text-primary">🍼 Infant</div>
                    </div>
                </div>

                <div className="mr-6 text-right">
                    <div
                        className="text-2xl text-primary"
                        style={{ fontFamily: "game-font-bold" }}
                    >
                        ${bank_balance.toLocaleString()}
                    </div>
                    <div className="text-sm text-primary">Bank Balance</div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
