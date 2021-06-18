using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private static readonly string server = "192.168.50.2";
        private static readonly string database = "aspnet_core_react_redux_example";
        private static readonly string uid = "root";
        private static readonly string password = "root_password";

        private static readonly string connStr = "SERVER=" + server + ";" + "DATABASE=" +
                                                 database + ";" + "UID=" + uid + ";" + "PASSWORD=" + password + ";";

        private static MySqlConnection cnn;

        [HttpGet]
        public IEnumerable<Employee> ListEmployees()
        {
            try
            {
                using (cnn = new MySqlConnection(connStr))
                {
                    cnn.Open();
                    MySqlCommand command;
                    MySqlDataReader dataReader;
                    var sql = "select * from employees;";
                    command = new MySqlCommand(sql, cnn);
                    dataReader = command.ExecuteReader();
                    var employees = new List<Employee>();
                    if (dataReader.HasRows)
                        while (dataReader.Read())
                            try
                            {
                                var employee = new Employee();
                                employee.id = dataReader.GetInt32(0);
                                employee.name = dataReader.GetString(1);
                                employee.address = dataReader.GetString(2);
                                employees.Add(employee);
                            }
                            catch (Exception e)
                            {
                                Console.WriteLine(e);
                                throw;
                            }

                    cnn.Clone();
                    return employees;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        [HttpGet("id")]
        public Employee ListEmployeeById(int id)
        {
            try
            {
                using (cnn = new MySqlConnection(connStr))
                {
                    cnn.Open();
                    MySqlCommand command;
                    MySqlDataReader dataReader;
                    var sql = string.Format("select * from employees where id={0};", id);
                    command = new MySqlCommand(sql, cnn);
                    dataReader = command.ExecuteReader();
                    var employee = new Employee();
                    if (dataReader.HasRows)
                        while (dataReader.Read())
                            try
                            {
                                employee.id = dataReader.GetInt32(0);
                                employee.name = dataReader.GetString(1);
                                employee.address = dataReader.GetString(2);
                            }
                            catch (Exception e)
                            {
                                Console.WriteLine(e);
                                throw;
                            }

                    cnn.Clone();
                    return employee;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        [HttpDelete]
        public int DeleteEmployeeById(Employee employee)
        {
            try
            {
                using (cnn = new MySqlConnection(connStr))
                {
                    cnn.Open();
                    MySqlCommand command;
                    MySqlDataReader dataReader;
                    var sql = string.Format("delete from employees where id={0};", employee.id);
                    command = new MySqlCommand(sql, cnn);
                    dataReader = command.ExecuteReader();
                    cnn.Close();
                    return 200;
                }
            }
            catch (Exception e)
            {
                return 500;
            }
        }

        [HttpPost]
        public int AddEmployee(Employee employee)
        {
            try
            {
                using (cnn = new MySqlConnection(connStr))
                {
                    cnn.Open();
                    MySqlCommand command;
                    MySqlDataReader dataReader;
                    var sql = string.Format(
                        "insert into aspnet_core_react_redux_example.employees(id, name, address) VALUE  ({0}, '{1}', '{2}');"
                        , employee.id, employee.name, employee.address);
                    command = new MySqlCommand(sql, cnn);
                    dataReader = command.ExecuteReader();
                    cnn.Close();
                    return 200;
                }
            }
            catch (Exception e)
            {
                return 500;
            }
        }

        [HttpPut]
        public int UpdateEmployee(Employee employee)
        {
            try
            {
                using (cnn = new MySqlConnection(connStr))
                {
                    cnn.Open();
                    MySqlCommand command;
                    MySqlDataReader dataReader;
                    var sql = string.Format("update employees set name='{0}',address='{1}' where id={2};"
                        , employee.name, employee.address, employee.id);
                    command = new MySqlCommand(sql, cnn);
                    dataReader = command.ExecuteReader();
                    cnn.Close();
                    return 200;
                }
            }
            catch (Exception e)
            {
                return 500;
            }
        }
    }
}