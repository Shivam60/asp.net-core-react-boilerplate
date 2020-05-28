import * as React from "react";

export interface HomePageState {
  text: string;
}
export class HomePage extends React.Component<{}, HomePageState> {
  private dishes: string[] = [
    "mutton",
    "chicken",
    "seekh kabab",
    "fish",
    "burgers",
    "biryani",
    "tandoori Chicken",
  ];

  constructor(props: {}) {
    super(props);
    this.state = {
      text: "",
    };
  }

  public render(): JSX.Element {
    return (
      <div style={{ textAlign: "center" }}>
        {this.dishes.map((dish: string) => {
          return <p>{dish}</p>;
        })}
      </div>
    );
  }
}
