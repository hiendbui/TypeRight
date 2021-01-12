<h1 align="center">TypeRight</h1> 
<!-- ![alt text](app/assets/images/Twitch-logo-reverse.png?raw=true "Switch") -->
<p align="center"><img ="center" src="frontend/src/assets/images/typeright-logo.svg?raw=true"  width="200" height="200" /></p>
<a href="https://typerighter.herokuapp.com/">TypeRight</a> is a platform for users to practice their typing and upload their own texts/articles, which allows users to cultivate a library of texts as they watch their typing speed and accuracy improve. TypeRight has a data dashboard where users can see their improvement over time. 

## Features
* Landing page with newest typing challenges
<img src="frontend/src/assets/images/landing-page.png?raw=true" width="700">

* Take tests and see immediate results and leaderboard/stats
<img src="frontend/src/assets/images/typing-gif.gif?raw=true" width="700">

* Profile page with user stats and personal library
<img src="frontend/src/assets/images/profile.png?raw=true" width="700">

* Upload your own typing challenges
<img src="frontend/src/assets/images/create-test.png?raw=true" width="700">

* Delete and Edit challenges that you uploaded
<img src="frontend/src/assets/images/edit-delete-test.png?raw=true" width="700">

## Code
* For the typing test component, we wanted to style specific letters and words with css by dynamically assigning classes. To accomplish this, using the string from the test content, we create arrays of word objects containing arrays of their letter objects when we load the test.

```javascript
// typing.jsx
loadTest(){
    this.setState({ 
        letterIdx: 0,
        wordIdx: 0,
        startedAt: null,
        completedTestData: false,
        wordObjs: this.props.test.content.split(/\s+/).map(word => ({
            complete: false,
            letterObjs: word.split('').map(letter => ({
                letter
            }))
        }))}, () => {this.typeContainer.focus()}
    );
}
```

* When we map through these arrays, we assign classes to the letters and words based on other keys in the objects.

```javascript
// typing.jsx
letterClass (letterObj) {
    if (letterObj.complete) {
        if (letterObj.extra) {
            return 'letter incorrect extra';
        } else if (letterObj.correct) {
            return 'letter correct';
        } else {
            return 'letter incorrect';
        }
    } else {
        return 'letter';
    }
}
```

* For displaying stats via the leaderboard and graphs, test attempts needed to be fetched according to the user and/or test they belong to. In order to filter
tests attempts in such a way, multiple GET requests were written with express router.
<img src="frontend/src/assets/images/backend_snippet.png?raw=true" width="700">

* Recharts was used to construct graphs displaying a user's words per minute over time, as well as other information, such as accuracy and errors, through a customized tooltip.
```javascript
return(
   <div className="user-stats-wrapper">
        <h1>{this.props.header}</h1>
        <div className="user-stats">
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} >
                    <Area 
                        fillOpacity={1} 
                        type="monotone" 
                        dataKey="wpm" 
                        stroke="#563097c5" 
                        fill="#7a44d8" 
                    />
                    <CartesianGrid stroke="#888" />
                    <XAxis tick={{fill: 'white'}} dataKey="x" height={40} >
                        <Label 
                            value="Test Attempts" 
                            fill="white" 
                            offset={0} 
                            position="insideBottom" 
                            dy={0}
                        />
                    </XAxis>
                    <YAxis tick={{fill: 'white'}} dataKey="wpm" >
                        <Label 
                            value="Words Per Minute" 
                            angle={-90}  
                            fill="white" 
                            position="insideLeft" 
                            dy={70}
                        />
                    </YAxis>
                    <Tooltip content={<CustomTooltip/>} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
)
```

```javascript
const CustomTooltip = ({ active, payload }) => {
    if (active) {
        const date = new Date(payload[0].payload.createdAt).toDateString().split(" ");
        date.shift();
        let title ="";
        if (this.props.header === "Your Overall Stats"){
            title = `Test: "${this.props.tests[payload[0].payload.test]?.title}"`
        }
        return (
            <div className="custom-tooltip">
                <p className="label">{`WPM: ${payload[0].payload.wpm}`}</p>
                <p className="label">{`Accuracy: ${Math.ceil(payload[0].payload.accuracy*100)}`}</p>
                <p className="label">{`Errors: ${payload[0].payload.typos}`}</p>
                <p className="label">{`Date Taken: ${date.join(" ")}`}</p>
                <p className="label">{title}</p>
            </div>
        );
    }
    return null;
};
```

## Technologies
* MongoDB
* Express
* React, Redux
* Node
* Webpack
## Todo
* Add social features, allowing users to friend one another
