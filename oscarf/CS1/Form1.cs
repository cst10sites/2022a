using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Speech.Synthesis;

namespace CS1
{
    public partial class Form1 : Form
    {
        string lastMessage;
        string Message;
        string response;
        double endsessiontime;
        double time;
        SpeechSynthesizer goodbye = new SpeechSynthesizer();
        SpeechSynthesizer iguessnot = new SpeechSynthesizer();
        SpeechSynthesizer bye = new SpeechSynthesizer();
        public Form1()
        {
            InitializeComponent();
            this.ControlBox = false;
            lastMessage = "";
            Message = "";
            response = "";
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void ask_Click(object sender, EventArgs e)
        {
            string textRead;
            textRead = textBox1.Text;
            Message = PsychResponse.Text;
            lastMessage = textBox1.Text;
            textBox1.Text = "";
            textBox1.Focus();
            PsychResponse.Text = "";
            if (textRead == "repeat")
            {
                SpeechSynthesizer saidthis = new SpeechSynthesizer();
                PsychResponse.Text = "I said: " + Message;
                saidthis.Speak(PsychResponse.Text);
            }
            else if (textRead == "bye")
            {
                PsychResponse.Text = "Are you sure?";
                goodbye.Speak(PsychResponse.Text);
                DialogResult result;
                result = MessageBox.Show("Are you sure?", "Quit", MessageBoxButtons.YesNo);
                if (result == DialogResult.Yes)
                {
                    PsychResponse.Text = "Goodbye";
                    bye.Speak(PsychResponse.Text);
                    Application.Exit();
                }
                else if (result == DialogResult.No)
                {
                    PsychResponse.Text = "oh, welcome back.";
                    iguessnot.Speak(PsychResponse.Text);
                }
            }
            else if (textRead == "goodbye")
            {
                PsychResponse.Text = "Are you sure?";
                goodbye.Speak(PsychResponse.Text);
                DialogResult result;
                result = MessageBox.Show("Are you sure?", "Quit", MessageBoxButtons.YesNo);
                if (result == DialogResult.Yes)
                {
                    PsychResponse.Text = "Goodbye";
                    bye.Speak(PsychResponse.Text);
                    Application.Exit();
                }
                else if (result == DialogResult.No)
                {
                    PsychResponse.Text = "oh, welcome back.";
                    iguessnot.Speak(PsychResponse.Text);
                }
            }
            else if (textRead == "see you")
            {
                PsychResponse.Text = "Are you sure?";
                goodbye.Speak(PsychResponse.Text);
                DialogResult result;
                result = MessageBox.Show("Are you sure?", "Quit", MessageBoxButtons.YesNo);
                if (result == DialogResult.Yes)
                {
                    PsychResponse.Text = "Goodbye";
                    bye.Speak(PsychResponse.Text);
                    Application.Exit();
                }
                else if (result == DialogResult.No)
                {
                    PsychResponse.Text = "oh, welcome back.";
                    iguessnot.Speak(PsychResponse.Text);
                }
            }
            else if (textRead == "see you later")
            {
                PsychResponse.Text = "Are you sure?";
                goodbye.Speak(PsychResponse.Text);
                DialogResult result;
                result = MessageBox.Show("Are you sure?", "Quit", MessageBoxButtons.YesNo);
                if (result == DialogResult.Yes)
                {
                    PsychResponse.Text = "Goodbye";
                    bye.Speak(PsychResponse.Text);
                    Application.Exit();
                }
                else if (result == DialogResult.No)
                {
                    PsychResponse.Text = "oh, welcome back.";
                    iguessnot.Speak(PsychResponse.Text);
                }
            }
            else if (textRead == "see you next time")
            {
                PsychResponse.Text = "Are you sure?";
                goodbye.Speak(PsychResponse.Text);
                DialogResult result;
                result = MessageBox.Show("Are you sure?", "Quit", MessageBoxButtons.YesNo);
                if (result == DialogResult.Yes)
                {
                    PsychResponse.Text = "Goodbye";
                    bye.Speak(PsychResponse.Text);
                    Application.Exit();
                }
                else if (result == DialogResult.No)
                {
                    PsychResponse.Text = "oh, welcome back.";
                    iguessnot.Speak(PsychResponse.Text);
                }
            }
            else if (textRead == "exit")
            {
                PsychResponse.Text = "Are you sure?";
                goodbye.Speak(PsychResponse.Text);
                DialogResult result;
                result = MessageBox.Show("Are you sure?", "Quit", MessageBoxButtons.YesNo);
                if (result == DialogResult.Yes)
                {
                    PsychResponse.Text = "Goodbye";
                    bye.Speak(PsychResponse.Text);
                    Application.Exit();
                }
                else if (result == DialogResult.No)
                {
                    PsychResponse.Text = "oh, welcome back.";
                    iguessnot.Speak(PsychResponse.Text);
                }
            }
            else if (textRead == "quit")
            {
                PsychResponse.Text = "Are you sure?";
                goodbye.Speak(PsychResponse.Text);
                DialogResult result;
                result = MessageBox.Show("Are you sure?", "Quit", MessageBoxButtons.YesNo);
                if (result == DialogResult.Yes)
                {
                    PsychResponse.Text = "Goodbye";
                    bye.Speak(PsychResponse.Text);
                    Application.Exit();
                }
                else if (result == DialogResult.No)
                {
                    PsychResponse.Text = "oh, welcome back.";
                    iguessnot.Speak(PsychResponse.Text);
                }
            }
            else
            {
                PsychResponse.Text = "";
                Random random = new Random();
                int num = random.Next(0, 6);

                if (num == 0)
                {
                    response = " And how does that make you feel?";
                }
                else if (num == 1)
                {
                    response = " you said something odd what do you mean by: " + lastMessage;
                }
                else if (num == 2)
                {
                    response = " do you want to talk about it?";
                }
                else if (num == 3)
                {
                    response = " I dont think i understand...";
                }
                else if (num == 4)
                {
                    response = " I've been through that my fair share, i can help you.";
                }
                else if (num == 5)
                {
                    response = " I dont think i understand what you mean by: " + lastMessage;
                }
                else if (num == 6)
                {
                    response = " I suggest taking some deep breaths and lie down for a while.";
                }
                PsychResponse.Text = PsychResponse.Text + response;
                SpeechSynthesizer speak = new SpeechSynthesizer();
                speak.Speak(PsychResponse.Text);
            }
        }


        private void Response_Click(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            PsychResponse.Text = "Are you Sure?";
            goodbye.Speak(PsychResponse.Text);
            DialogResult result;
            result = MessageBox.Show("Are you sure?", "Quit", MessageBoxButtons.YesNo);
            if (result == DialogResult.Yes)
            {
                PsychResponse.Text = "Goodbye";
                bye.Speak(PsychResponse.Text);
                Application.Exit();
            }
            else if (result == DialogResult.No)
            {
                PsychResponse.Text = "oh, welcome back.";
                iguessnot.Speak(PsychResponse.Text);
            }
        }

        private void timer2_Tick(object sender, EventArgs e)
        {
            endsessiontime = endsessiontime + 0.1;
            if (endsessiontime == 300)
            {
                button1.Enabled = false;
                button2.Enabled = false;
                textBox1.Enabled = false;
                PsychResponse.Text = "";
            }
            if (endsessiontime == 301)
            {
                Random endtime = new Random();
                int seggslol = endtime.Next(0, 2);
                if (seggslol == 0)
                {
                    PsychResponse.Text = "Oh, look at the time, its time to end the session now, goodbye.";
                }
                else if (seggslol == 1)
                {
                    PsychResponse.Text = "Its time for you to go now, ill see you next session.";
                }
                else if (seggslol == 2)
                {
                    PsychResponse.Text = "Get out of my office.";
                }
            }
            if (endsessiontime == 306)
            {
                timer2.Stop();
                Application.Exit();
            }
        }
    }
}
