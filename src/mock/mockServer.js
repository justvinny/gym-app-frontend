import { createServer, RestSerializer, Model } from "miragejs";

const makeServer = () =>
  createServer({
    models: {
      user: Model,
    },
    serializers: {
      application: RestSerializer,
    },
    seeds(server) {
      server.create("user", {
        id: "baaqIEYFOkZAnZfXxorpg68itEU2",
        name: "Giga Chad",
        age: 25,
        height: 185,
        aboutMe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nibh eros. Suspendisse eu lectus id ex placerat posuere. Mauris non imperdiet sem, id convallis nisi. Vivamus porttitor eros in erat ornare, eget convallis lectus ullamcorper. Sed augue arcu, dignissim nec orci in, ullamcorper volutpat justo. Fusce ullamcorper ante nec metus ultricies, in imperdiet nisl tincidunt. Fusce sed dolor vel ligula fringilla ornare sit amet vel est. Curabitur rutrum arcu vitae dolor porta, eu venenatis lacus iaculis. Integer tortor augue, malesuada a ex non, varius suscipit leo. Pellentesque laoreet lacus a maximus viverra. Phasellus condimentum, leo sit amet suscipit semper, orci est volutpat lectus, nec suscipit turpis nisi ut purus.",
        startWeight: 100,
        currentWeight: 95,
        goalWeight: 90,
        featuredExercises: [
          {
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
        ],
        routines: [
          {
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
          },
        ],
      });
    },
    routes() {
      this.namespace = process.env.REACT_APP_BACKEND_URL ?? "";

      this.get("/api/users", (schema) => {
        return schema.users.all();
      });

      this.get("/api/users/:id", (schema, request) => {
        const id = request.params.id;
        return schema.users.find(id);
      });

      this.get("/api/users/:id/routines", (schema, request) => {
        const id = request.params.id;
        const user = schema.users.find(id);
        return user.routines;
      });

      let newId = 1;
      this.post("/api/users/:id/routines", (schema, request) => {
        const id = request.params.id;
        const user = schema.users.find(id).attrs;
        const newRoutine = JSON.parse(request.requestBody);
        newRoutine._id = `${newId++}`;
        const newRoutines = [...user.routines, newRoutine];
        user.routines = newRoutines;
        return schema.users.find(id).update(user);
      });

      this.put("/api/users/:userid/routines/:routineid", (schema, request) => {
        const userId = request.params.userid;
        const routineId = request.params.routineid;
        const user = schema.users.find(userId).attrs;
        const routines = user.routines.filter(
          (routine) => routine.id !== routineId
        );
        const updatedRoutine = JSON.parse(request.requestBody);
        const newRoutines = [routines, updatedRoutine];
        user.routines = newRoutines;
        return schema.users.find(userId).update(user);
      });

      this.passthrough("https://identitytoolkit.googleapis.com/**");
    },
  });

export default makeServer;
