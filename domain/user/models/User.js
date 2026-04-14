const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "User", // Will be converted to 'user' table name by default
    tableName: "user",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        email: {
            type: "varchar",
            unique: true,
            nullable: false,
        },
        password: {
            type: "varchar",
            nullable: false,
        },
        createdAt: {
            name: "createdAt",
            type: "timestamp",
            createDate: true,
        },
        updatedAt: {
            name: "updatedAt",
            type: "timestamp",
            updateDate: true,
        },
    },
});
