const App = () => {
    return (
        <div>

            <Tweet
                username="doggyman550"
                _name="John Johnerson"
                date={new Date(Date.now()).toString()}
                tweet="Hello World"
            />

            <Tweet
                username="coolBro1999"
                _name="Randy Radderton"
                date={new Date(Date.now()).toString()}
                tweet="React is cool bruh"
            />

            <Tweet
                username="testUser"
                _name="PLS DELETE"
                date={new Date(Date.now()).toString()}
                tweet="TEST MSG PLS DELETE SORRY"
            />
        </div>
    );
};