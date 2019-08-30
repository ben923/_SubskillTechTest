<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Contact extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($credentials)
    {
        //
        $this->credentials = $credentials;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(['adress' => $this->credentials['mail'], 'name' => $this->credentials['fullName']])
        ->subject($this->credentials['subject'])
        ->text("mail.contact")
        ->with(['content' => $this->credentials['content']]);
    }
}
