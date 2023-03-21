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
    public partial class Imprumuta : Form
    {
        private static string CONNECTION_STRING = "Data Source=(DESCRIPTION =" +
                                                 "(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))" +
                                                 "(CONNECT_DATA =" +
                                                  "(SERVER = DEDICATED)" +
                                                 "(SERVICE_NAME = orcl)" +
                                                    ")" +
                                                 ");User id = scott;password = 123456";
        public int[] indexcarti = new int[150];
        public int[] indexstudenti = new int[150];
        public int[] indexcombo = new int[150];
        public int[] indexcombo2 = new int[150];
        int valoare = 0;
        public Imprumuta()
        {
            InitializeComponent();
            this.Text = string.Empty;
            this.ControlBox = false;
            this.DoubleBuffered = true;
        }

    private int Imprumuturi()
        {
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);
            conn.Open();
            OracleCommand comm = new OracleCommand("select count(imprumut_activ) from imprumuturi_bibl where imprumut_activ = '1'", conn);
            Int32 count = Convert.ToInt32(comm.ExecuteScalar());
            conn.Close();

            return count;
        }


        private void Imprumuta_Load(object sender, EventArgs e)
        {
            BtnLeft.Height = btnImprumuta.Height;
            BtnLeft.Top = btnImprumuta.Top;
            timer1.Start();

            int c = Imprumuturi();
            label7.Text = c.ToString();
            label3.Text = DateTime.Now.ToLongDateString();
            IncarcaCarti();
            IncarcaStudenti();
            AdaugaImprumuturi();
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
                cmd.CommandText = "select carte_id,nume_carte,autori from carti_bibl order by carte_id";
                cmd.CommandType = CommandType.Text;

                //executia comenzii
                OracleDataReader dr = cmd.ExecuteReader();
                int i = 0;
                //preluarea datelor și plasarea lor într-un combobox
                while (dr.Read())
                {
                    comboBox1.Items.Add(dr.GetString(1) + ", Autor: " +dr.GetString(2));
                    indexcombo[i] = (Int32)dr.GetDecimal(0);
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

        private void IncarcaStudenti()
        {
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);

            try
            {
                //deschiderea conexiunii
                conn.Open();

                //comanda sql care poate fi interogare sql, procedura stocata etc...
                OracleCommand cmd = new OracleCommand();
                cmd.Connection = conn;
                cmd.CommandText = "select student_id,nume,prenume,varsta from studenti_bibl order by student_id";
                cmd.CommandType = CommandType.Text;

                //executia comenzii
                OracleDataReader dr = cmd.ExecuteReader();
                int i = 0;
                //preluarea datelor și plasarea lor într-un combobox
                while (dr.Read())
                {
                    comboBox2.Items.Add(dr.GetString(1) + " " + dr.GetString(2) + ", " + (Int32)dr.GetDecimal(3));
                    indexcombo2[i] = (Int32)dr.GetDecimal(0);
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
        private void Button1_Click(object sender, EventArgs e)
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
                int comb1 = comboBox1.SelectedIndex;
                int comb2 = comboBox2.SelectedIndex;
                String sqlCommand = "INSERT INTO imprumuturi_bibl(imprumut_data,imprumut_activ,carte_id,student_id) VALUES";
                sqlCommand += "(sysdate,1,'" + indexcombo[comb1] + "','" + indexcombo2[comb2] + "')";
                cmd.CommandText = sqlCommand;
               ////// listBox1.Items.Add()
                int rezult = cmd.ExecuteNonQuery();
                if (rezult > 0)
                {
                    MessageBox.Show("Adaugat");
                    listBox1.Items.Clear();
                    AdaugaImprumuturi();
                    int b = Imprumuturi();
                    label7.Text = b.ToString();
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
                valoare = Convert.ToInt32(listBox1.SelectedIndex);
                String sqlCommand = "DELETE FROM imprumuturi_bibl WHERE carte_id = ";
                sqlCommand += indexcarti[valoare] + "";

                cmd.CommandText = sqlCommand;

                int rezult = cmd.ExecuteNonQuery();
                if (rezult > 0)
                {
                    MessageBox.Show("Sters cu Succes");
                    //Numar de carti
                    int b = Imprumuturi();
                    label7.Text = b.ToString();
                    listBox1.Items.Clear();
                    AdaugaImprumuturi();
                }
                else
                {
                    MessageBox.Show("Error" + indexcarti[valoare]);
                }

                conn.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Exception" + ex.Message);
            }
        }

private void AdaugaImprumuturi()
        {
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);

            try
            {
                //deschiderea conexiunii
                conn.Open();

                //comanda sql care poate fi interogare sql, procedura stocata etc...
                OracleCommand cmd = new OracleCommand();
                cmd.Connection = conn;
                cmd.CommandText = "select i.imprumut_data,s.nume,s.prenume,c.nume_carte,s.student_id,c.carte_id from studenti_bibl s, carti_bibl c,imprumuturi_bibl i" +
                    " where i.imprumut_activ = '1' AND c.carte_id = i.carte_id AND s.student_id = i.student_id";
                cmd.CommandType = CommandType.Text;
                Refresh();

                //executia comenzii
                OracleDataReader dr = cmd.ExecuteReader();

                //preluarea datelor și plasarea lor într-un combobox
                int i = 0;
                while (dr.Read())
                {
                    listBox1.Items.Add("Data: " + dr.GetOracleDate(0) + ", " + dr.GetString(1) + " " + dr.GetString(2) + ", " + dr.GetString(3));
                    indexcarti[i] = (Int32)dr.GetDecimal(5);
                    indexstudenti[i] = (Int32)dr.GetDecimal(4);
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

        private void Button3_Click(object sender, EventArgs e)
        {
            listBox1.Items.Clear();
            AdaugaImprumuturi();
            int b = Imprumuturi();
            label7.Text = b.ToString();
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