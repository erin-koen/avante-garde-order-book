# agfin-order-book


> A react app that accesses the public order book of a crypto exchange and builds a visualization based on the data retrieved.

TODO: Fill out this long description.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Thought Process](#thought_process)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

```
```

## Usage

```
```

## Thought Process
```
Redux - managing a 100 item orderbook (50 orders on each side of the mid seems like it's reasonably useful) isn't hugely complicated for a single component, but for extensibility's sake, Redux makes sense. In the example photo, the order book is displayed graphically and in chart form. Redux simplifies access to the state generated by a single API call, rather than having to manage state flowing through to those disparate components. 

Data comes back from Kraken (SLOWLY) in an array of bids and an array of asks, each of which is ['price', 'amount', timestamp]. Timestamp for my purposes is useless, and amount needs to be cumulative in order to show the total amount that can be bought or sold at that level. Need to do transform the data to reflect that. Best place to do that seems to be in the action creator method, so flow looks like ->
- retrieve data from kraken
- transform as necessary
    - first cut at this was to put data into object shaped like:
    ```
    let prices = {
        bids: {}, 
        asks: {}
      }
    ```
    but I'm not sure that'll be sorted correctly when i access it. TBD.
    - update: changed format of sorted data to reflect what i'll need for React-Vis, an array of objects with color properties according to bid vs ask

- send to reducer to set new state
- update - I'm switching to coinbase pro as their data retrieval is MUCH fast

App component architecture - 
- App = will call the action on component did mount and map state to props
    - separate components for bids and asks. THey come back from the API separately and sorted as they need to be.
    


```

## Maintainers

[@erin-koen](https://github.com/erin-koen)

## Contributing



Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2019 Erin Koen
