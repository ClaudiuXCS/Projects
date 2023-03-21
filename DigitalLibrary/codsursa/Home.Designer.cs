namespace Biblioteca
{
    partial class Home
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Home));
            this.panel1 = new System.Windows.Forms.Panel();
            this.btnStudenti = new System.Windows.Forms.Button();
            this.btnImprumuta = new System.Windows.Forms.Button();
            this.btnInfo = new System.Windows.Forms.Button();
            this.btnCarti = new System.Windows.Forms.Button();
            this.panel2 = new System.Windows.Forms.Panel();
            this.btnHome = new System.Windows.Forms.Button();
            this.Logo = new System.Windows.Forms.PictureBox();
            this.BtnLeft = new System.Windows.Forms.Panel();
            this.label1 = new System.Windows.Forms.Label();
            this.Timp = new System.Windows.Forms.Label();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.label10 = new System.Windows.Forms.Label();
            this.panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.Logo)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(35)))), ((int)(((byte)(32)))), ((int)(((byte)(32)))));
            this.panel1.Controls.Add(this.btnStudenti);
            this.panel1.Controls.Add(this.btnImprumuta);
            this.panel1.Controls.Add(this.btnInfo);
            this.panel1.Controls.Add(this.btnCarti);
            this.panel1.Controls.Add(this.panel2);
            this.panel1.Controls.Add(this.btnHome);
            this.panel1.Controls.Add(this.Logo);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Left;
            this.panel1.Font = new System.Drawing.Font("Segoe UI", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(221, 623);
            this.panel1.TabIndex = 0;
            // 
            // btnStudenti
            // 
            this.btnStudenti.FlatAppearance.BorderSize = 0;
            this.btnStudenti.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnStudenti.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(115)))), ((int)(((byte)(21)))));
            this.btnStudenti.Image = ((System.Drawing.Image)(resources.GetObject("btnStudenti.Image")));
            this.btnStudenti.Location = new System.Drawing.Point(1, 276);
            this.btnStudenti.Name = "btnStudenti";
            this.btnStudenti.Size = new System.Drawing.Size(218, 71);
            this.btnStudenti.TabIndex = 5;
            this.btnStudenti.Text = "Studenti";
            this.btnStudenti.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageAboveText;
            this.btnStudenti.UseVisualStyleBackColor = true;
            this.btnStudenti.Click += new System.EventHandler(this.BtnStudenti_Click);
            // 
            // btnImprumuta
            // 
            this.btnImprumuta.FlatAppearance.BorderSize = 0;
            this.btnImprumuta.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnImprumuta.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(115)))), ((int)(((byte)(21)))));
            this.btnImprumuta.Image = ((System.Drawing.Image)(resources.GetObject("btnImprumuta.Image")));
            this.btnImprumuta.Location = new System.Drawing.Point(0, 353);
            this.btnImprumuta.Name = "btnImprumuta";
            this.btnImprumuta.Size = new System.Drawing.Size(218, 71);
            this.btnImprumuta.TabIndex = 4;
            this.btnImprumuta.Text = "Imprumuta";
            this.btnImprumuta.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageAboveText;
            this.btnImprumuta.UseVisualStyleBackColor = true;
            this.btnImprumuta.Click += new System.EventHandler(this.BtnImprumuta_Click);
            // 
            // btnInfo
            // 
            this.btnInfo.FlatAppearance.BorderSize = 0;
            this.btnInfo.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnInfo.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(115)))), ((int)(((byte)(21)))));
            this.btnInfo.Image = ((System.Drawing.Image)(resources.GetObject("btnInfo.Image")));
            this.btnInfo.Location = new System.Drawing.Point(0, 430);
            this.btnInfo.Name = "btnInfo";
            this.btnInfo.Size = new System.Drawing.Size(218, 71);
            this.btnInfo.TabIndex = 3;
            this.btnInfo.Text = "Info";
            this.btnInfo.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageAboveText;
            this.btnInfo.UseVisualStyleBackColor = true;
            this.btnInfo.Click += new System.EventHandler(this.BtnInfo_Click);
            // 
            // btnCarti
            // 
            this.btnCarti.FlatAppearance.BorderSize = 0;
            this.btnCarti.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnCarti.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(115)))), ((int)(((byte)(21)))));
            this.btnCarti.Image = ((System.Drawing.Image)(resources.GetObject("btnCarti.Image")));
            this.btnCarti.Location = new System.Drawing.Point(0, 183);
            this.btnCarti.Name = "btnCarti";
            this.btnCarti.Size = new System.Drawing.Size(218, 71);
            this.btnCarti.TabIndex = 2;
            this.btnCarti.Text = "Carti";
            this.btnCarti.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageAboveText;
            this.btnCarti.UseVisualStyleBackColor = true;
            this.btnCarti.Click += new System.EventHandler(this.BtnCarti_Click);
            // 
            // panel2
            // 
            this.panel2.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(115)))), ((int)(((byte)(21)))));
            this.panel2.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(115)))), ((int)(((byte)(21)))));
            this.panel2.Location = new System.Drawing.Point(224, 106);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(11, 71);
            this.panel2.TabIndex = 1;
            // 
            // btnHome
            // 
            this.btnHome.FlatAppearance.BorderSize = 0;
            this.btnHome.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnHome.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(115)))), ((int)(((byte)(21)))));
            this.btnHome.Image = ((System.Drawing.Image)(resources.GetObject("btnHome.Image")));
            this.btnHome.Location = new System.Drawing.Point(0, 106);
            this.btnHome.Name = "btnHome";
            this.btnHome.Size = new System.Drawing.Size(218, 71);
            this.btnHome.TabIndex = 1;
            this.btnHome.Text = "Acasa";
            this.btnHome.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageAboveText;
            this.btnHome.UseVisualStyleBackColor = true;
            this.btnHome.Click += new System.EventHandler(this.btnHome_Click);
            // 
            // Logo
            // 
            this.Logo.Image = ((System.Drawing.Image)(resources.GetObject("Logo.Image")));
            this.Logo.Location = new System.Drawing.Point(0, 0);
            this.Logo.Name = "Logo";
            this.Logo.Size = new System.Drawing.Size(221, 109);
            this.Logo.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.Logo.TabIndex = 1;
            this.Logo.TabStop = false;
            // 
            // BtnLeft
            // 
            this.BtnLeft.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(115)))), ((int)(((byte)(21)))));
            this.BtnLeft.Location = new System.Drawing.Point(223, 106);
            this.BtnLeft.Name = "BtnLeft";
            this.BtnLeft.Size = new System.Drawing.Size(3, 71);
            this.BtnLeft.TabIndex = 1;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.BackColor = System.Drawing.Color.Transparent;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(244)))), ((int)(((byte)(244)))), ((int)(((byte)(244)))));
            this.label1.Location = new System.Drawing.Point(527, 121);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(373, 32);
            this.label1.TabIndex = 3;
            this.label1.Text = "Proiect realizat de Sandar Claudiu";
            // 
            // Timp
            // 
            this.Timp.AutoSize = true;
            this.Timp.BackColor = System.Drawing.Color.Transparent;
            this.Timp.Font = new System.Drawing.Font("Segoe UI", 27.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Timp.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(115)))), ((int)(((byte)(21)))));
            this.Timp.Location = new System.Drawing.Point(612, 390);
            this.Timp.Name = "Timp";
            this.Timp.Size = new System.Drawing.Size(104, 50);
            this.Timp.TabIndex = 10;
            this.Timp.Text = "Timp";
            // 
            // timer1
            // 
            this.timer1.Tick += new System.EventHandler(this.Timer1_Tick);
            // 
            // pictureBox1
            // 
            this.pictureBox1.BackColor = System.Drawing.Color.Transparent;
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(494, 173);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(441, 218);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox1.TabIndex = 6;
            this.pictureBox1.TabStop = false;
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.BackColor = System.Drawing.Color.Transparent;
            this.label10.Font = new System.Drawing.Font("Segoe UI", 32.25F);
            this.label10.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(244)))), ((int)(((byte)(244)))), ((int)(((byte)(244)))));
            this.label10.Location = new System.Drawing.Point(1138, 0);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(50, 59);
            this.label10.TabIndex = 34;
            this.label10.Text = "X";
            this.label10.Click += new System.EventHandler(this.Label10_Click);
            this.label10.MouseEnter += new System.EventHandler(this.Label10_MouseEnter);
            this.label10.MouseLeave += new System.EventHandler(this.Label10_MouseLeave);
            // 
            // Home
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.AppWorkspace;
            this.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("$this.BackgroundImage")));
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.ClientSize = new System.Drawing.Size(1190, 623);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.pictureBox1);
            this.Controls.Add(this.Timp);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.BtnLeft);
            this.Controls.Add(this.panel1);
            this.Name = "Home";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.panel1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.Logo)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.PictureBox Logo;
        private System.Windows.Forms.Button btnHome;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Button btnStudenti;
        private System.Windows.Forms.Button btnImprumuta;
        private System.Windows.Forms.Button btnInfo;
        private System.Windows.Forms.Button btnCarti;
        private System.Windows.Forms.Panel BtnLeft;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label Timp;
        private System.Windows.Forms.Timer timer1;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Label label10;
    }
}

