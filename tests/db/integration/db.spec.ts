import connect from "db";

test("connect to the database", async () => {
    const db = await connect();
    expect(db.getDatabaseName()).toEqual("app");
});
