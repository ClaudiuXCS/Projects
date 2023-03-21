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
    public partial class Studenti2 : Form
    {
        private static string CONNECTION_STRING = "Data Source=(DESCRIPTION =" +
                                                 "(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))" +
                                                 "(CONNECT_DATA =" +
                                                  "(SERVER = DEDICATED)" +
                                                 "(SERVICE_NAME = orcl)" +
                                                    ")" +
                                                 ");User id = scott;password = 123456";
        public Studenti2()
        {
            InitializeComponent();
            AfiseazaStudenti();
            this.Text = string.Empty;
            this.ControlBox = false;
            this.DoubleBuffered = true;

        }

        private void AfiseazaStudenti()
        {
            OracleConnection conn = new OracleConnection(CONNECTION_STRING);
            conn.Open();
            OracleDataAdapter oda = new OracleDataAdapter("select * from studenti_bibl", conn);
            DataTable dt = new DataTable();
            oda.Fill(dt);
            dataGridView1.DataSource = dt;
            conn.Close();
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


        private void Label1_Click(object sender, EventArgs e)
        {

        }

        private void Studenti_Load(object sender, EventArgs e)
        {
            BtnLeft.Height = btnStudenti.Height;
            BtnLeft.Top = btnStudenti.Top;
            int b = NumarStudenti();
            label6.Text = b.ToString();

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
            Carti2 f = new Carti2();
            f.Show();
            f.SetBounds(this.Location.X, this.Location.Y, this.Width, this.Height);
            this.Hide();
        }

        private void BtnStudenti_Click(object sender, EventArgs e)
        {
            BtnLeft.Height = btnStudenti.Height;
            BtnLeft.Top = btnStudenti.Top;
        }

        private void BtnImprumuta_Click(object sender, EventArgs e)
        {
            BtnLeft.Height = btnImprumuta.Height;
            BtnLeft.Top = btnImprumuta.Top;
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
    }
}
