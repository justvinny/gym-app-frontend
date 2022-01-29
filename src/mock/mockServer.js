import { createServer, RestSerializer, Model } from "miragejs";

const makeServer = () =>
  createServer({
    models: {
      routine: Model,
    },
    serializers: {
      application: RestSerializer,
    },
    seeds(server) {
      server.create("routine", {
        _id: "61dce4a20145b70f847f217b",
        id: "61dce4a20145b70f847f217b",
        name: "3 Day Split",
        workouts: [
          {
            _id: "61dce4a20145b70f847f200b",
            day: "Day 1",
            exercises: [
              {
                _id: "61dce4a20149b70f847f200a",
                name: "Bench Press",
                sets: [
                  {
                    _id: "51dce4a20145b70f847f200a",
                    weight: 100,
                    reps: 5,
                  },
                  {
                    _id: "51dce4a20145b70f847f201a",
                    weight: 100,
                    reps: 5,
                  },
                  {
                    _id: "51dce4a20145b70f847f202a",
                    weight: 100,
                    reps: 5,
                  },
                ],
              },
              {
                _id: "61dce4a20185b70f847f200a",
                name: "Shoulder Press",
                sets: [
                  {
                    _id: "52dce4a20145b70f847f200a",
                    weight: 80,
                    reps: 5,
                  },
                  {
                    _id: "52dce4a20145b70f847f201a",
                    weight: 80,
                    reps: 5,
                  },
                  {
                    _id: "52dce4a20145b70f847f202a",
                    weight: 80,
                    reps: 4,
                  },
                ],
              },
              {
                _id: "61dce4a20167b70f847f200a",
                name: "Tricep Pushdown",
                sets: [
                  {
                    _id: "53dce4a20145b70f847f200a",
                    weight: 20,
                    reps: 10,
                  },
                  {
                    _id: "53dce4a20145b70f847f201a",
                    weight: 25,
                    reps: 10,
                  },
                  {
                    _id: "53dce4a20145b70f847f202a",
                    weight: 30,
                    reps: 8,
                  },
                ],
              },
            ],
          },
          {
            _id: "74dce4a20145b70f847f201b",
            day: "Day 2",
            exercises: [
              {
                _id: "71dce4a20145b70f847f200a",
                name: "Deadlift",
                sets: [
                  {
                    _id: "71dce4a20145b70f847f200a",
                    weight: 200,
                    reps: 5,
                  },
                  {
                    _id: "71dce4a20145b70f847f201a",
                    weight: 200,
                    reps: 5,
                  },
                  {
                    _id: "71dce4a20145b70f847f202a",
                    weight: 220,
                    reps: 3,
                  },
                ],
              },
              {
                _id: "71dce8a20145b70f847f200a",
                name: "Pullups",
                sets: [
                  {
                    _id: "72dce4a20145b70f847f200a",
                    weight: 20,
                    reps: 12,
                  },
                  {
                    _id: "72dce4a20145b70f847f201a",
                    weight: 20,
                    reps: 12,
                  },
                  {
                    _id: "72dce4a20145b70f847f202a",
                    weight: 30,
                    reps: 10,
                  },
                ],
              },
              {
                _id: "71dce5a20145b70f847f200a",
                name: "Barbell Row",
                sets: [
                  {
                    _id: "73dce4a20145b70f847f200a",
                    weight: 100,
                    reps: 5,
                  },
                  {
                    _id: "73dce4a20145b70f847f201a",
                    weight: 100,
                    reps: 5,
                  },
                  {
                    _id: "73dce4a20145b70f847f202a",
                    weight: 100,
                    reps: 4,
                  },
                ],
              },
            ],
          },
          {
            _id: "81dce6a20145b70f847f202b",
            day: "Day 3",
            exercises: [
              {
                _id: "81dce4a50145b70f847f200a",
                name: "Squats",
                sets: [
                  {
                    _id: "81dce4a20145b70f847f200a",
                    weight: 180,
                    reps: 5,
                  },
                  {
                    _id: "81dce4a20145b70f847f201a",
                    weight: 180,
                    reps: 5,
                  },
                  {
                    _id: "81dce4a20145b70f847f202a",
                    weight: 190,
                    reps: 4,
                  },
                ],
              },
              {
                _id: "81dce5a20145b70f847f200a",
                name: "Leg Extension",
                sets: [
                  {
                    _id: "82dce4a20145b70f847f200a",
                    weight: 80,
                    reps: 12,
                  },
                  {
                    _id: "82dce4a20145b70f847f201a",
                    weight: 80,
                    reps: 12,
                  },
                  {
                    _id: "82dce4a20145b70f847f202a",
                    weight: 80,
                    reps: 10,
                  },
                ],
              },
              {
                _id: "81dce4a20145b70f847f200a",
                name: "Hamstring Curl",
                sets: [
                  {
                    _id: "83dce4a20145b70f847f200a",
                    weight: 80,
                    reps: 12,
                  },
                  {
                    _id: "83dce4a20145b70f847f201a",
                    weight: 80,
                    reps: 12,
                  },
                  {
                    _id: "83dce4a20145b70f847f202a",
                    weight: 80,
                    reps: 9,
                  },
                ],
              },
            ],
          },
        ],
      });
    },
    routes() {
      this.namespace = process.env.REACT_APP_BACKEND_URL ?? "";
      this.get("/api/routines", (schema) => {
        return schema.all("routine");
      });

      this.post("/api/routines", (schema, request) => {
        return schema.routines.create(JSON.parse(request.requestBody));
      });

      this.put("/api/routines/:id", (schema, request) => {
        let id = request.params.id;
        return schema.routines.find(id).update(request.requestBody);
      });

      this.passthrough("https://identitytoolkit.googleapis.com/**");
    },
  });

export default makeServer;
