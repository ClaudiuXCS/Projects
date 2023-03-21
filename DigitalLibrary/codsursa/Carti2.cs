// Sandar Claudiu, Grupa 3132B

using Oracle.DataAccess.Client;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Biblioteca
{
    public partial class Carti2 : Form
    {
        private static string CONNECTION_STRING = "Data Source=(DESCRIPTION ="+
                                                 "(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))" +
                                                 "(CONNECT_DATA =" +
                                                  "(SERVER = DEDICATED)" +
                                                 "(SERVICE_NAME = orcl)" +
                                                    ")" +
                                                 ");User id = scott;password = 123456";
        public Carti2()
        {
            InitializeComponent();
            AfiseazaCarti();
            this.Text = string.Empty;
            this.ControlBox = false;
            this.DoubleBuffered = true;

        }

        private void AfiseazaCarti()
        {
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);
            conn.Open();
            OracleDataAdapter oda = new OracleDataAdapter("select * from carti_bibl", conn);
            DataTable dt = new DataTable();
            oda.Fill(dt);
            dataGridView1.DataSource = dt;
            conn.Close();
        }
        private int NumarCarti()
        {
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);
            conn.Open();
            OracleCommand comm = new OracleCommand("select count(carte_id) from carti_bibl", conn);
            Int32 count = Convert.ToInt32(comm.ExecuteScalar());
            conn.Close();

            return count;
        }

        private void Limbi()
        {
            string Sql = "select nume_limba from limbi_bibl";
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);
            conn.Open();
            OracleCommand cmd = new OracleCommand(Sql, conn);
            OracleDataReader DR = cmd.ExecuteReader();

            while (DR.Read())
            {
                listBox1.Items.Add(DR[0]);

            }
            conn.Close();
        }
        private int LimbaAleasa()
        {
            String lista = listBox1.SelectedItem.ToString();
            string Sql = "select limba_id from limbi_bibl where nume_limba = '" + lista + "'";
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);
            conn.Open();
            OracleCommand comm = new OracleCommand(Sql, conn);
            Int32 count = Convert.ToInt32(comm.ExecuteScalar());
            conn.Close();

            return count;
        }

        private void AfiseazaCarteLimba()
        {
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);

            try
            {
                //deschiderea conexiunii
                conn.Open();

                //comanda sql care poate fi interogare sql, procedura stocata etc...
                OracleCommand cmd = new OracleCommand();
                cmd.Connection = conn;
                cmd.CommandText = "select c.nume_carte,l.nume_limba from carti_bibl c,limbi_bibl l where l.limba_id = c.limba_id";
                cmd.CommandType = CommandType.Text;

                //executia comenzii
                OracleDataReader dr = cmd.ExecuteReader();
                //preluarea datelor și plasarea lor într-un combobox
                while (dr.Read())
                {
                    comboBox1.Items.Add(dr.GetString(0) + " " + dr.GetString(1));
                }

                //inchiderea conexiunii
                conn.Dispose();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString());
            }
            finally
            {
                conn.Dispose();
            }

        }

        private void Label1_Click(object sender, EventArgs e)
        {

        }

        private void Carti_Load(object sender, EventArgs e)
        {
            BtnLeft.Height = btnCarti.Height;
            BtnLeft.Top = btnCarti.Top;

            //Numar de carti
            int b = NumarCarti();
            label6.Text = b.ToString();
            Limbi();
            AfiseazaCarteLimba();
            Refresh1();

        }

        private void btnHome_Click(object sender, EventArgs e)
        {
            BtnLeft.Height = btnHome.Height;
            BtnLeft.Top = btnHome.Top;
            Home f = new Home();
            f.Show();
            f.SetBounds(this.Location.X, this.Location.Y, this.Width, this.Height);
            this.Hide();
        }

        private void BtnCarti_Click(object sender, EventArgs e)
        {
            BtnLeft.Height = btnCarti.Height;
            BtnLeft.Top = btnCarti.Top;
        }

        private void BtnStudenti_Click(object sender, EventArgs e)
        {
            BtnLeft.Height = btnStudenti.Height;
            BtnLeft.Top = btnStudenti.Top;
            Studenti f = new Studenti();
            f.Show();
            f.SetBounds(this.Location.X, this.Location.Y, this.Width, this.Height);
            this.Hide();
        }

        private void BtnImprumuta_Click(object sender, EventArgs e)
        {
            BtnLeft.Height = btnImprumuta.Height;
            BtnLeft.Top = btnImprumuta.Top;
            Imprumuta f = new Imprumuta();
            f.Show();
            f.SetBounds(this.Location.X, this.Location.Y, this.Width, this.Height);
            this.Hide();
        }

        private void BtnInfo_Click(object sender, EventArgs e)
        {
            BtnLeft.Height = btnInfo.Height;
            BtnLeft.Top = btnInfo.Top;
            Info f = new Info();
            f.Show();
            f.SetBounds(this.Location.X, this.Location.Y, this.Width, this.Height);
            this.Hide();
        }

        private void button1_MouseEnter(object sender, EventArgs e)
        {
            button1.ForeColor = Color.FromArgb(245, 115, 21);
        }
        private void button1_MouseLeave(object sender, EventArgs e)
        {
            button1.ForeColor = Color.FromArgb(244,244,244);
        }
        private void button2_MouseEnter(object sender, EventArgs e)
        {
            button2.ForeColor = Color.FromArgb(245, 115, 21);
        }
        private void button2_MouseLeave(object sender, EventArgs e)
        {
            button2.ForeColor = Color.FromArgb(244, 244, 244);
        }
        private void button3_MouseEnter(object sender, EventArgs e)
        {
            button3.ForeColor = Color.FromArgb(245, 115, 21);
        }
        private void button3_MouseLeave(object sender, EventArgs e)
        {
            button3.ForeColor = Color.FromArgb(244, 244, 244);
        }
        private void button4_MouseEnter(object sender, EventArgs e)
        {
            button4.ForeColor = Color.FromArgb(245, 115, 21);
        }
        private void button4_MouseLeave(object sender, EventArgs e)
        {
            button4.ForeColor = Color.FromArgb(244, 244, 244);
        }
        private void button1_Click(object sender, EventArgs e)
        {
            try
            {
                OracleConnection conn = new OracleConnection(CONNECTION_STRING);

                //deschiderea conexiunii
                conn.Open();

                //comanda sql care poate fi interogare sql, procedura stocata etc...
                OracleCommand cmd = new OracleCommand();
                cmd.Connection = conn;
                cmd.CommandType = CommandType.Text;
                int limba = LimbaAleasa();
                String sqlCommand = "INSERT INTO carti_bibl(carte_id,nume_carte,autori,an_carte,volum_carte,limba_id) VALUES";
                sqlCommand += "(secventa.nextval,'" + textBox1.Text + "','" + textBox2.Text + "'," + int.Parse(textBox3.Text) + "," + int.Parse(textBox4.Text) + "," + limba + ")";
                cmd.CommandText = sqlCommand;

                int rezult = cmd.ExecuteNonQuery();
                if (rezult > 0)
                {
                    MessageBox.Show("Adaugat");
                    Refresh1();
                }
                else
                {
                    MessageBox.Show("Eroare");
                }

                conn.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Exceptie: " + ex.Message);
            }
        }
        private void Refresh1()
        {
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);
            conn.Open();
            OracleDataAdapter oda = new OracleDataAdapter("select * from carti_bibl order by carte_id", conn);
            DataTable dt = new DataTable();
            oda.Fill(dt);
            dataGridView1.DataSource = dt;
            conn.Close();
            //Numar de carti
            int b = NumarCarti();
            label6.Text = b.ToString();
        }

        private void Button4_Click(object sender, EventArgs e)
        {
            Refresh1();
        }

        private void Button2_Click(object sender, EventArgs e)
        {
            try
            {
                OracleConnection conn = new OracleConnection(CONNECTION_STRING);

                //deschiderea conexiunii
                conn.Open();

                //comanda sql care poate fi interogare sql, procedura stocata etc...
                OracleCommand cmd = new OracleCommand();
                cmd.Connection = conn;
                cmd.CommandType = CommandType.Text;

                String sqlCommand = "UPDATE carti_bibl set carte_id = '";
                sqlCommand += int.Parse(textBox5.Text) + "'";
                sqlCommand += ", nume_carte = '" + textBox1.Text + "'";
                sqlCommand += ", autori = '" + textBox2.Text + "'";
                sqlCommand += ", an_carte = '" + int.Parse(textBox3.Text) + "'";
                sqlCommand += ", volum_carte = '" + textBox4.Text + "'";
                sqlCommand += ", limba_id = '" + int.Parse(textBox6.Text) + "'";
                sqlCommand += " where carte_id=" + textBox5.Text;



                cmd.CommandText = sqlCommand;

                int rezult = cmd.ExecuteNonQuery();
                if (rezult > 0)
                {
                    MessageBox.Show("Modificat cu succes");
                    Refresh1();
                    //Numar de carti
                    int b = NumarCarti();
                    label6.Text = b.ToString();
                }
                else
                {
                    MessageBox.Show("Eroare");
                }

                conn.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Exceptie: " + ex.Message);
            }
        }


        //Cand apasam pe dataview

        private void DataGridView1_CellContentClick_1(object sender, DataGridViewCellEventArgs e)
        {
            int currentRowIndex = dataGridView1.CurrentCell.RowIndex;
            var CARTE_ID = dataGridView1[0, currentRowIndex].Value.ToString();
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);


                conn.Open();
                OracleCommand cmd = new OracleCommand();
                cmd.Connection = conn;
                cmd.CommandText = "select * from carti_bibl where carte_id=" + CARTE_ID;
                cmd.CommandType = CommandType.Text;
                DataTable dt = new DataTable();
                OracleDataReader dr = cmd.ExecuteReader();

                if (dr.Read())
                {
                   textBox5.Text = dr.GetInt64(0).ToString();
                    textBox1.Text = dr.GetString(1);
                    textBox2.Text = dr.GetString(2);
                    textBox3.Text = dr.GetInt64(3).ToString();
                    textBox4.Text = dr.GetString(4);
                    textBox6.Text = dr.GetInt64(5).ToString();
            }
                conn.Dispose();

        }

        private void Button3_Click(object sender, EventArgs e)
        {
            try
            {
                OracleConnection conn = new OracleConnection(CONNECTION_STRING);

                //deschiderea conexiunii
                conn.Open();

                //comanda sql care poate fi interogare sql, procedura stocata etc...
                OracleCommand cmd = new OracleCommand();
                cmd.Connection = conn;
                cmd.CommandType = CommandType.Text;

                String sqlCommand = "DELETE FROM carti_bibl WHERE carte_id = '";
                sqlCommand += int.Parse(textBox5.Text) + "'";

                cmd.CommandText = sqlCommand;

                int rezult = cmd.ExecuteNonQuery();
                if (rezult > 0)
                {
                    MessageBox.Show("Sters cu Succes");
                    Refresh1();
                    //Numar de carti
                    int b = NumarCarti();
                    label6.Text = b.ToString();
                }
                else
                {
                    MessageBox.Show("Error");
                }

                conn.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Exception" + ex.Message);
            }
        }
    }
}
