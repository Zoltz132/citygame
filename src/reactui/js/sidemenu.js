/// <reference path="../../lib/react.d.ts" />
/// <reference path="js/sidemenubuildings.d.ts" />
///
/// <reference path="../js/eventlistener.d.ts" />
var UIComponents;
(function (UIComponents) {
    UIComponents.SideMenu = React.createClass({
        componentDidMount: function () {
            var money = this.refs.money.getDOMNode();

            eventManager.addEventListener("updatePlayerMoney", function (event) {
                money.innerHTML = event.content;
            });
        },
        render: function () {
            return (React.DOM.div({ id: "react-side-menu" }, React.DOM.div({ id: "side-menu-main-buttons", className: "grid-column" }, React.DOM.div({ className: "grid-row" }, React.DOM.div({ className: "grid-cell" }, "click"), React.DOM.div({ className: "grid-cell" }, "recruit")), React.DOM.div({ className: "grid-row" }, React.DOM.div({ className: "grid-cell" }, "buy plot"), React.DOM.div({ className: "grid-cell" }, "sell"))), UIComponents.SideMenuBuildings({
                player: this.props.player,
                frameImages: this.props.frameImages
            }), React.DOM.div({ id: "side-menu-other-buttons", className: "grid-column" }, React.DOM.div({ id: "save-buttons", className: "grid-row" }, React.DOM.div({ className: "grid-cell" }, "save"), React.DOM.div({ className: "grid-cell" }, "load")), React.DOM.form({
                id: "size-menu-zoom",
                className: "grid-row",
                onSubmit: function (e) {
                    e.preventDefault();
                    eventManager.dispatchEvent({ type: "changeZoom", content: this.state.zoom });
                    return false;
                }
            }, React.DOM.input({
                type: "number",
                className: "grid-row",
                id: "zoom-amount",
                defaultValue: "1",
                step: 0.1,
                onChange: function (event) {
                    var target = event.target;
                    this.setState({ zoom: parseInt(target.value) });
                    console.log(this);
                }
            }), React.DOM.button({ id: "zoomBtn", className: "grid-row" }, "zoom"))), React.DOM.div({ id: "side-menu-stats" }, React.DOM.div({ id: "player-level-wrapper" }, React.DOM.progress({ id: "player-level", value: 69, max: 100 }), React.DOM.span(null, "Level 69     4,200,000 / 6,900,000 [ 69% ]")), React.DOM.div({ ref: "money" }, 0))));
        }
    });
})(UIComponents || (UIComponents = {}));
//# sourceMappingURL=sidemenu.js.map
