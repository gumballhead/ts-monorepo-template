import { Options, Sequelize } from "sequelize";
import migrate from "./migrations";

let db: Sequelize;

function connect(options: Options = {}): Sequelize {
    const { DB_URL } = process.env;

    if (DB_URL === undefined) {
        throw Error("Can't connect to database. DB_URL environment variable is unset");
    }

    return new Sequelize(DB_URL, options);
}

export default async function(): Promise<Sequelize> {
    if (db !== undefined) return Promise.resolve(db);
    db = connect({ logging: false });
    await migrate(db).up();

    return db;
}

if (require.main === module) {
    (async function() {
        await migrate(connect({ logging: true })).runAsCLI();
    })();
}
