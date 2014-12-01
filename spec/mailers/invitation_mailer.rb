before :each { MandrillMailer.deliveries.clear }

email = MandrillMailer::deliveries.detect { |mail|
  mail.template_name == 'my-template' &&
  mail.message['to'].any? { |to| to[:email] == 'my@email.com' }
}
expect(email).to_not be_nil