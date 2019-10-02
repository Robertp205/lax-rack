import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "../Components/Auth/Auth";
import Dashboard from "../Components/Dashboard/Dashboard";
import Form from "../Components/Form/Form";
import Elbows from "../Components/Products/Elbows/Elbows";
import Shafts from "../Components/Products/Shafts/Shafts";
import ShoulderPads from "../Components/Products/ShoulderPads/ShoulderPads";
import Heads from "../Components/Products/Heads/Heads";
import Helmets from "../Components/Products/Helmets/Helmets";
import Gloves from "../Components/Products/Gloves/Gloves";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/new" component={Form} />
    <Route path="/elbows" component={Elbows} />
    <Route path="/shafts" component={Shafts} />
    <Route path="/shoulder-pads" component={ShoulderPads} />
    <Route path="/heads" component={Heads} />
    <Route path="/helmets" component={Helmets} />
    <Route path="/gloves" component={Gloves} />

  </Switch>
);
