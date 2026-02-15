import Time "mo:core/Time";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Set "mo:core/Set";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  let subscribers = Map.empty<Text, Time.Time>();

  let subscribersSet = Set.empty<Text>();

  public shared ({ caller }) func joinNewsletter(email : Text) : async () {
    let normalizedEmail = email.toLower();
    if (subscribersSet.contains(normalizedEmail)) {
      Runtime.trap("You are already subscribed with this email address.");
    };
    let now = Time.now();
    subscribers.add(normalizedEmail, now);
    subscribersSet.add(normalizedEmail);
  };

  public query ({ caller }) func isSubscribed(email : Text) : async Bool {
    subscribers.containsKey(email.toLower());
  };

  public query ({ caller }) func getAllSubscribers() : async [(Text, Time.Time)] {
    subscribers.entries().toArray();
  };

  public query ({ caller }) func getSubscriber(email : Text) : async Time.Time {
    switch (subscribers.get(email.toLower())) {
      case (null) { Runtime.trap("Subscriber does not exist") };
      case (?subscriber) { subscriber };
    };
  };

  public shared ({ caller }) func unsubscribe(email : Text) : async () {
    let normalizedEmail = email.toLower();
    if (not subscribers.containsKey(normalizedEmail)) {
      Runtime.trap("E-Mail address does not exist. Please check your interactions and contact support if the error persists.");
    };
    subscribers.remove(normalizedEmail);
    subscribersSet.remove(normalizedEmail);
  };
};
