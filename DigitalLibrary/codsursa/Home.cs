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
    public partial class Home : Form
    {
        public Home()
        {
            InitializeComponent();
            this.Text = string.Empty;
            this.ControlBox = false;
            this.DoubleBuffered = true;

        }

        private void Form1_Load(object sender, EventArgs e)
        {
            timer1.Start();
            Timp.Text = DateTime.Now.ToLongTimeString();
        }

        private void btnHome_Click(object sender, EventArgs e)
        {
            BtnLeft.Height = btnHome.Height;
            BtnLeft.Top = btnHome.Top;
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

        private void Timer1_Tick(object sender, EventArgs e)
        {
            Timp.Text = DateTime.Now.ToLongTimeString();
            timer1.Start();
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
