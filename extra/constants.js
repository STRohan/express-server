const getUsers = "getUsers",
headTrainer = "head-trainer",
trainee = "trainee",
trainer = "trainer";
export const permissions = {
[getUsers]: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
}
};
