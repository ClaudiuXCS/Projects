namespace Biblioteca
{
    partial class Studenti2
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Studenti2));
            this.panel1 = new System.Windows.Forms.Panel();
            this.btnStudenti = new System.Windows.Forms.Button();
            this.btnImprumuta = new System.Windows.Forms.Button();
            this.btnInfo = new System.Windows.Forms.Button();
            this.btnCarti = new System.Windows.Forms.Button();
            this.panel2 = new System.Windows.Forms.Panel();
            this.btnHome = new System.Windows.Forms.Button();
            this.Logo = new System.Windows.Forms.PictureBox();
            this.BtnLeft = new System.Windows.Forms.Panel();
            this.dataGridView1 = new System.Windows.Forms.DataGridView();
            this.label1 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.Logo)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
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
            // dataGridView1
            // 
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Location = new System.Drawing.Point(295, 106);
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.Size = new System.Drawing.Size(811, 166);
            this.dataGridView1.TabIndex = 2;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.BackColor = System.Drawing.Color.Transparent;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 32.25F);
            this.label1.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(244)))), ((int)(((byte)(244)))), ((int)(((byte)(244)))));
            this.label1.Location = new System.Drawing.Point(263, 26);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(318, 59);
            this.label1.TabIndex = 3;
            this.label1.Text = "Bine ati revenit!";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.BackColor = System.Drawing.Color.Transparent;
            this.label3.Font = new System.Drawing.Font("Segoe UI", 21.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(244)))), ((int)(((byte)(244)))), ((int)(((byte)(244)))));
            this.label3.Location = new System.Drawing.Point(266, 408);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(222, 40);
            this.label3.TabIndex = 5;
            this.label3.Text = "Numar studenti:";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.BackColor = System.Drawing.Color.Transparent;
            this.label6.Font = new System.Drawing.Font("Segoe UI", 21.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label6.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(244)))), ((int)(((byte)(244)))), ((int)(((byte)(244)))));
            this.label6.Location = new System.Drawing.Point(494, 408);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(34, 40);
            this.label6.TabIndex = 8;
            this.label6.Text = "X";
            // 
            // Studenti
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.AppWorkspace;
            this.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("$this.BackgroundImage")));
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.ClientSize = new System.Drawing.Size(1190, 623);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.dataGridView1);
            this.Controls.Add(this.BtnLeft);
            this.Controls.Add(this.panel1);
            this.Name = "Studenti";
            this.Text = "Form2";
            this.Load += new System.EventHandler(this.Studenti_Load);
            this.panel1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.Logo)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
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
        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Timer timer1;
    }
}

