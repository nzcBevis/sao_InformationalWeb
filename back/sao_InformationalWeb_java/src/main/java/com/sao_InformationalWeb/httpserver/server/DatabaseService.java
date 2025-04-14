package com.sao_InformationalWeb.httpserver.server;

public class DatabaseService {
}

/*
* @Service
public class DatabaseService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public DatabaseService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void insertData(String data) {
        jdbcTemplate.execute("INSERT INTO your_table_name (data_column) VALUES ('" + data + "')");
    }
}
* */