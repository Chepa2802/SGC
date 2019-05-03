<?php

/*
 * This file is part of SwiftMailer.
 * (c) 2009 Fabien Potencier
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Redirects all email to a single recipient.
 *
 * @author     Fabien Potencier
 */
class Swift_Plugins_RedirectingPlugin implements Swift_Events_SendListener
{
    /**
     * The recipient who will receive all messages.
     *
     * @var mixed
     */
    private $_recipient;

    /**
     * List of regular expression for recipient Whitelisting
     *
     * @var array
     */
    private $_Whitelist = array();

    /**
     * Create a new RedirectingPlugin.
     *
     * @param mixed $recipient
     * @param array  $Whitelist
     */
    public function __construct($recipient, array $Whitelist = array())
    {
        $this->_recipient = $recipient;
        $this->_Whitelist = $Whitelist;
    }

    /**
     * Set the recipient of all messages.
     *
     * @param mixed $recipient
     */
    public function setRecipient($recipient)
    {
        $this->_recipient = $recipient;
    }

    /**
     * Get the recipient of all messages.
     *
     * @return mixed
     */
    public function getRecipient()
    {
        return $this->_recipient;
    }

    /**
     * Set a list of regular expressions to Whitelist certain recipients
     *
     * @param array $Whitelist
     */
    public function setWhitelist(array $Whitelist)
    {
        $this->_Whitelist = $Whitelist;
    }

    /**
     * Get the Whitelist
     *
     * @return array
     */
    public function getWhitelist()
    {
        return $this->_Whitelist;
    }

    /**
     * Invoked immediately before the Message is sent.
     *
     * @param Swift_Events_SendEvent $evt
     */
    public function beforeSendPerformed(Swift_Events_SendEvent $evt)
    {
        $message = $evt->getMessage();
        $headers = $message->getHeaders();

        // conditionally save current recipients

        if ($headers->has('to')) {
            $headers->addMailboxHeader('X-Swift-To', $message->getTo());
        }

        if ($headers->has('cc')) {
            $headers->addMailboxHeader('X-Swift-Cc', $message->getCc());
        }

        if ($headers->has('bcc')) {
            $headers->addMailboxHeader('X-Swift-Bcc', $message->getBcc());
        }

        // Filter remaining headers against Whitelist
        $this->_filterHeaderSet($headers, 'To');
        $this->_filterHeaderSet($headers, 'Cc');
        $this->_filterHeaderSet($headers, 'Bcc');

        // Add each hard coded recipient
        foreach ( (array) $this->_recipient as $recipient) {
            if (!array_key_exists($recipient, $message->getTo())) {
                $message->addTo($recipient);
            }
        }

    }

    /**
     * Filter header set against a Whitelist of regular expressions
     *
     * @param Swift_Mime_HeaderSet $headerSet
     * @param string $type
     */
    private function _filterHeaderSet(Swift_Mime_HeaderSet $headerSet, $type)
    {
        foreach ($headerSet->getAll($type) as $headers) {
            $headers->setNameAddresses($this->_filterNameAddresses($headers->getNameAddresses()));
        }
    }

    /**
     * Filtered list of addresses => name pairs
     *
     * @param array $recipients
     * @return array
     */
    private function _filterNameAddresses(array $recipients)
    {
        $filtered = array();

        foreach ($recipients as $address => $name) {
            if ($this->_isWhitelisted($address)) {
                $filtered[$address] = $name;
            }
        }

        return $filtered;
    }

    /**
     * Matches address against Whitelist of regular expressions
     *
     * @param $recipient
     * @return bool
     */
    protected function _isWhitelisted($recipient)
    {
        if (in_array($recipient, (array) $this->_recipient)) {
            return true;
        }

        foreach ($this->_Whitelist as $pattern) {
            if (preg_match($pattern, $recipient)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Invoked immediately after the Message is sent.
     *
     * @param Swift_Events_SendEvent $evt
     */
    public function sendPerformed(Swift_Events_SendEvent $evt)
    {
        $this->_restoreMessage($evt->getMessage());
    }

    private function _restoreMessage(Swift_Mime_Message $message)
    {
        // restore original headers
        $headers = $message->getHeaders();

        if ($headers->has('X-Swift-To')) {
            $message->setTo($headers->get('X-Swift-To')->getNameAddresses());
            $headers->removeAll('X-Swift-To');
        }

        if ($headers->has('X-Swift-Cc')) {
            $message->setCc($headers->get('X-Swift-Cc')->getNameAddresses());
            $headers->removeAll('X-Swift-Cc');
        }

        if ($headers->has('X-Swift-Bcc')) {
            $message->setBcc($headers->get('X-Swift-Bcc')->getNameAddresses());
            $headers->removeAll('X-Swift-Bcc');
        }
    }
}