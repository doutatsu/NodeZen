class InvitationMailer < MandrillMailer::TemplateMailer
  default from: 'support@nodezen.me'

  def invite(invitation)
    mandrill_mail template: 'Subscribe',
                  subject: 'Welcome to NodeZen',
                  to: {email: user['email'], name: user['full_name']},
                  important: true,
                  inline_css: true,
                  vars: {
                    'NAME'              => " #{user['full_name']}",
                    'COMPANY'           => "Node Ventures",
                    'DESCRIPTION'       => "You are receiving this email because you have registered with NodeZen"
                  }
  end
end