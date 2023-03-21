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
    public partial class Carti : Form
    {
        private static string CONNECTION_STRING = "Data Source=(DESCRIPTION ="+
                                                 "(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))" +
                                                 "(CONNECT_DATA =" +
                                                  "(SERVER = DEDICATED)" +
                                                 "(SERVICE_NAME = orcl)" +
                                                    ")" +
                                                 ");User id = scott;password = 123456";

        // Variabile folosite pentru a retine date din Baza de Date
        public int[] indexlistbox = new int[150];
        string nume_carte, autori, ancarte, idcarte, volum;
        public int idlimba,salvare;



        public Carti()
        {
            InitializeComponent();
            
            // Eliminare bara de sus
            this.Text = string.Empty;
            this.ControlBox = false;
            this.DoubleBuffered = true;

        }

        // Functii care se executa la LOAD
        private void Carti_Load(object sender, EventArgs e)
        {
            BtnLeft.Height = btnCarti.Height;
            BtnLeft.Top = btnCarti.Top;

            //Numar de carti
            int b = NumarCarti();
            label6.Text = b.ToString();
            Limbi();
            IncarcaCarti();
            AfiseazaCarte_si_ID();
        }

        private void Refresh()
        {
            // refresh nume label
            int b = NumarCarti();
            label6.Text = b.ToString();

            // refresh listbox cu date
            listBox2.Items.Clear();
            IncarcaCarti();

            // refresh combo cu nume si id
            comboBox1.Items.Clear();
            AfiseazaCarte_si_ID();

            comboBox1.Text = "Lista Carti si ID";
        }


        // Functie folosita pentru a numara cartile totale din Baza de Date
        private int NumarCarti()
        {
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);
            conn.Open();
            OracleCommand comm = new OracleCommand("select count(carte_id) from carti_bibl", conn);
            Int32 count = Convert.ToInt32(comm.ExecuteScalar());
            conn.Close();

            return count;
        }

        // Functie folosita pentru a numara limbile din Baza de Date
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

        // Functie folosita pentru a Salva tara selectata din Lista
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

        // Comboboxul pentru stergere rapida
        private void AfiseazaCarte_si_ID()
        {
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);

            try
            {
                //deschiderea conexiunii
                conn.Open();

                //comanda sql care poate fi interogare sql, procedura stocata etc...
                OracleCommand cmd = new OracleCommand();
                cmd.Connection = conn;
                cmd.CommandText = "select nume_carte,autori,carte_id from carti_bibl order by carte_id";
                cmd.CommandType = CommandType.Text;

                //executia comenzii
                OracleDataReader dr = cmd.ExecuteReader();
                //preluarea datelor și plasarea lor într-un combobox
                while (dr.Read())
                {
                    comboBox1.Items.Add((Int32)dr.GetDecimal(2) + ": " + dr.GetString(0) + ", Autor: " + dr.GetString(1));
                    salvare = (Int32)dr.GetDecimal(2);
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

        // Salvarea datelor cand apasam pe lista
        private void ListBox2_SelectedIndexChanged(object sender, EventArgs e)
        {
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);

            //deschiderea conexiunii
            conn.Open();

            //comanda sql care poate fi interogare sql, procedura stocata etc...
            OracleCommand cmd = new OracleCommand();
            cmd.Connection = conn;
            cmd.CommandText = "select c.carte_id,c.nume_carte,c.autori,c.an_carte,c.volum_carte,b.nume_limba,c.limba_id from carti_bibl c, limbi_bibl b where c.limba_id=b.limba_id and c.carte_id = '" + indexlistbox[listBox2.SelectedIndex] + "' order by carte_id";
            cmd.CommandType = CommandType.Text;

            //executia comenzii
            OracleDataReader dr = cmd.ExecuteReader();
            //preluarea datelor și plasarea lor într-un combobox
            while (dr.Read())
            {
                //salvare date
                idcarte= dr.GetInt64(0).ToString();
                nume_carte = dr.GetString(1);
                autori = dr.GetString(2);
                ancarte = dr.GetInt64(3).ToString();
                volum = dr.GetString(4);
                //textBox6.Text = dr.GetInt64(6).ToString();
                idlimba = int.Parse(dr.GetInt64(6).ToString());

                textBox1.Text = dr.GetString(1);
                textBox2.Text = dr.GetString(2);
                textBox3.Text = dr.GetInt64(3).ToString();
                textBox4.Text = dr.GetString(4);
                listBox1.SelectedIndex = idlimba - 1;
            }

            //inchiderea conexiunii
            conn.Dispose();
        }


        private void IncarcaCarti()
        {
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);

            try
            {
                //deschiderea conexiunii
                conn.Open();

                //comanda sql care poate fi interogare sql, procedura stocata etc...
                OracleCommand cmd = new OracleCommand();
                cmd.Connection = conn;
                cmd.CommandText = "select c.carte_id,c.nume_carte,c.autori,c.an_carte,c.volum_carte,b.nume_limba,c.limba_id from carti_bibl c, limbi_bibl b where c.limba_id=b.limba_id order by carte_id";
                cmd.CommandType = CommandType.Text;

                //executia comenzii
                OracleDataReader dr = cmd.ExecuteReader();
                int i = 0;
                //preluarea datelor și plasarea lor într-un combobox
                while (dr.Read())
                {
                    listBox2.Items.Add(dr.GetString(1) + ",     Autor: " + dr.GetString(2) + " (" + (Int32)dr.GetDecimal(3) + ")      Volumul: " + dr.GetString(4) + ",     Limba " + dr.GetString(5));
                    indexlistbox[i] = (Int32)dr.GetDecimal(0);
                    i++;
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




        // Buton Insereaza
        private void button1_Click(object sender, EventArgs e)
        {
                if (textBox1.Text.Length < 2 || textBox1.Text.Length > 40 || textBox2.Text.Length < 2 || textBox2.Text.Length > 50|| int.Parse(textBox3.Text) < 1 || int.Parse(textBox3.Text) > 2021 || textBox4.Text.Length < 1 || textBox4.Text.Length > 5)
                {
                    MessageBox.Show("Nu ati introdus date valide");
                }
                else
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
                sqlCommand += "(secventa.nextval,'" + textBox1.Text + "','" + textBox2.Text + "'," + int.Parse(textBox3.Text) + ",'" + textBox4.Text + "'," + limba + ")";
                cmd.CommandText = sqlCommand;

                int rezult = cmd.ExecuteNonQuery();
                if (rezult > 0)
                {
                    MessageBox.Show("Adaugat cu succes!");
                    Refresh();
                }

                    conn.Close();
                }
            }

        // Butonul de Modificare / Actualizare date
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
                int idtara2 = listBox1.SelectedIndex + 1;
                String sqlCommand = "UPDATE carti_bibl set carte_id = '";
                sqlCommand += int.Parse(idcarte) + "'";
                sqlCommand += ", nume_carte = '" + textBox1.Text + "'";
                sqlCommand += ", autori = '" + textBox2.Text + "'";
                sqlCommand += ", an_carte = '" + int.Parse(textBox3.Text) + "'";
                sqlCommand += ", volum_carte = '" + textBox4.Text + "'";
                sqlCommand += ", limba_id = '" + idtara2 + "'";
                sqlCommand += " where carte_id=" + idcarte;



                cmd.CommandText = sqlCommand;

                int rezult = cmd.ExecuteNonQuery();
                if (rezult > 0)
                {
                    MessageBox.Show("Modificat cu succes");
                    Refresh();
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

        // Butonul de stergere a unei persoane selectate din lista
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
                sqlCommand += int.Parse(idcarte) + "'";

                cmd.CommandText = sqlCommand;

                int rezult = cmd.ExecuteNonQuery();
                if (rezult > 0)
                {
                    MessageBox.Show(nume_carte + " a fost sters cu succes!");
                    Refresh();
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

        // Butonul de Refresh
        private void Button4_Click(object sender, EventArgs e)
        {
            Refresh();
        }

        // Butonul folosit pentru stergere rapida a unei persoane
        private void Button5_Click(object sender, EventArgs e)
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
                sqlCommand += salvare + "'";

                cmd.CommandText = sqlCommand;

                int rezult = cmd.ExecuteNonQuery();
                if (rezult > 0)
                {
                    MessageBox.Show("Sters cu Succes");
                    Refresh();
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




            // Efecte Butoane STANGA si trecerea prin Forme
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
                Carti f = new Carti();
                f.Show();
                f.SetBounds(this.Location.X, this.Location.Y, this.Width, this.Height);
                this.Hide();
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


        // Efecte Butoane
        private void button1_MouseEnter(object sender, EventArgs e)
        {
            button1.ForeColor = Color.FromArgb(245, 115, 21);
        }
        private void button1_MouseLeave(object sender, EventArgs e)
        {
            button1.ForeColor = Color.FromArgb(244, 244, 244);
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

        private void button5_MouseEnter(object sender, EventArgs e)
        {
            button5.ForeColor = Color.FromArgb(245, 115, 21);
        }
        private void button5_MouseLeave(object sender, EventArgs e)
        {
            button5.ForeColor = Color.FromArgb(244, 244, 244);
        }
        private void Label10_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
        private void Label10_MouseEnter(object sender, EventArgs e)
        {
            label10.ForeColor = Color.FromArgb(245, 115, 21);
        }
        private void Label10_MouseLeave(object sender, EventArgs e)
        {
            label10.ForeColor = Color.FromArgb(244, 244, 244);
        }
    }
}
