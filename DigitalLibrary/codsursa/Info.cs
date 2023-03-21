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
    public partial class Info : Form
    {
        private static string CONNECTION_STRING = "Data Source=(DESCRIPTION =" +
                                                 "(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))" +
                                                 "(CONNECT_DATA =" +
                                                  "(SERVER = DEDICATED)" +
                                                 "(SERVICE_NAME = orcl)" +
                                                    ")" +
                                                 ");User id = scott;password = 123456";
        public Info()
        {
            InitializeComponent();
            this.Text = string.Empty;
            this.ControlBox = false;
            this.DoubleBuffered = true;
        }

        private int NumarStudenti()
        {
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);
            conn.Open();
            OracleCommand comm = new OracleCommand("select count(student_id) from studenti_bibl", conn);
            Int32 count = Convert.ToInt32(comm.ExecuteScalar());
            conn.Close();

            return count;
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
        }
        private void Tari()
        {
            string Sql = "select nume_tara from tari_bibl";
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);
            conn.Open();
            OracleCommand cmd = new OracleCommand(Sql, conn);
            OracleDataReader DR = cmd.ExecuteReader();

            while (DR.Read())
            {
                listBox2.Items.Add(DR[0]);

            }
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


        private void Label1_Click(object sender, EventArgs e)
        {

        }

        private void Info_Load(object sender, EventArgs e)
        {
            BtnLeft.Height = btnInfo.Height;
            BtnLeft.Top = btnInfo.Top;
            timer1.Start();
            Timp.Text = DateTime.Now.ToLongTimeString();
            Data.Text = DateTime.Now.ToLongDateString();
            int a = NumarStudenti();
            label5.Text = a.ToString();
            int b = NumarCarti();
            label6.Text = b.ToString();
            int c = Imprumuturi();
            label7.Text = c.ToString();
            Limbi();
            Tari();
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
        }

        private void Timer1_Tick(object sender, EventArgs e)
        {
            Timp.Text = DateTime.Now.ToLongTimeString();
            timer1.Start();
        }

        private void Label11_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
        private void Label11_MouseEnter(object sender, EventArgs e)
        {
            label11.ForeColor = Color.FromArgb(245, 115, 21);
        }
        private void Label11_MouseLeave(object sender, EventArgs e)
        {
            label11.ForeColor = Color.FromArgb(244, 244, 244);
        }
    }
}
