import { readFileSync } from "fs";
import { join } from "path";
import { Sequelize } from "sequelize";
import { SequelizeStorage, Umzug } from "umzug";

export default (sequelize: Sequelize): Umzug<Sequelize> => new Umzug({
    migrations: {
        glob: ["[0-9][0-9][0-9]-*.up.sql", { cwd: join(__dirname, "migrations") }],
        resolve: ({ name, path, context: sequelize }) => ({
            name,
            up: async function() {
                if (path === undefined) return;
                const sql = readFileSync(path);
                return sequelize.query(sql.toString());
            },
            down: async function() {
                if (path === undefined) return;
                const sql = await readFileSync(path.replace(".up.sql", ".down.sql"));
                return sequelize.query(sql.toString());
            }
        })
    },
    context: sequelize,
    storage: new SequelizeStorage({ sequelize }),
    logger: undefined
});
