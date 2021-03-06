import React, { Component } from 'react';
import { JournalEntry } from './journal_entry'

const rawJournalData = [
    {title: 'Post One', content: 'Post Content', status: 'draft'},
    {title: 'Post Two', content: 'Post Content', status: 'published'},
    {title: 'Post Three', content: 'Post Content', status: 'published'},
    {title: 'Post Four', content: 'Post Content', status: 'published'}
]

//class component
export default class JournalList extends Component {
    constructor(props){
        super();

        this.state = {
            journalData: rawJournalData,
            greeting: 'Hi there',
            isOpen: true
        }
    }

    clearEntries = () => {
        this.setState({ journalData: [] , isOpen: false});
    };

    showAllEntries = () => {
        this.setState({ journalData: rawJournalData, isOpen: true});
      };

      toggleStatus = () => {
        if (this.state.isOpen) {
          this.setState({ journalData: [], isOpen: false });
        } else {
          this.setState({ journalData: rawJournalData, isOpen: true });
        }
      };

    render() {
        const journalEntries = this.state.journalData.map(journalEntry => {
          return (
            <div key={journalEntry.title}>
              <JournalEntry
                title={journalEntry.title}
                content={journalEntry.content}
              />
            </div>
          );
        });

        return (
            <div>
                <h1>{this.props.heading}</h1>
                {journalEntries}
                <button onClick={this.clearEntries}>Clear Journal Entries</button>
                <button onClick={this.showAllEntries}>Show All Journal Entries</button>
                <button onClick={this.toggleStatus}>Toggle Journal Entries</button>
            </div>
        )
    }
}