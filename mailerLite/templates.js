const createCampaignResponse = {
    data: {
        id: "204331377280156920",
        account_id: "2799084",
        name: "Weekly Events Newsletter - 2026-11-16 13:46 GMT−08:00",
        created_source: null,
        type: "regular",
        status: "draft",
        missing_data: [],
        settings: {
            track_opens: true,
            usegoogleanalytics: false,
            ecommerce_tracking: false,
        },
        filter: [
            [
                {
                    operator: "in_any",
                    args: ["groups", ["204256230875596347"]],
                },
            ],
        ],
        filterforhumans: [["In any group: Weekly Events"]],
        delivery_schedule: null,
        language_id: "4",
        language: {
            id: "4",
            shortcode: "en",
            iso639: "en-US",
            name: "English",
            direction: "ltr",
        },
        created_at: "2026-11-16 21:46:26",
        updated_at: "2026-11-16 21:46:26",
        scheduled_for: null,
        queued_at: null,
        started_at: null,
        finished_at: null,
        stopped_at: null,
        defaultemailid: "204331377293788411",
        emails: [
            {
                id: "204331377293788411",
                account_id: "2799084",
                emailable_id: "204331377280156920",
                emailable_type: "campaigns",
                type: "builderinlineemail",
                from: "justin@freesalsalibrary.com",
                from_name: "Free Salsa Library",
                reply_to: "justin@freesalsalibrary.com",
                name: null,
                subject: "Free Salsa Library: Weekly Events Newsletter",
                plain_text:
                    "Hello,\n\nYou have received a newsletter from {$account}.\n\nHowever, your email software can't display HTML emails. You can view the newsletter by clicking here:\n\n{$url}\n\n\n\nYou're receiving this newsletter because you have shown interest in {$account}.\nNot interested anymore? Click here to unsubscribe:\n{$unsubscribe}\n",
                screenshot_url: null,
                usesnewbuilder: true,
                useslandscapescreenshot: false,
                generatescreenshottimestamp: null,
                isbuildingcontent: false,
                preview_url:
                    "https://connect.mailerlite.com/emails/204331377293788411/preview",
                reportpreviewurl:
                    "https://connect.mailerlite.com/emails/204331377293788411/preview",
                created_at: "2026-11-16 21:46:26",
                updated_at: "2026-11-16 21:46:26",
                is_designed: false,
                language_id: 4,
                language: {
                    id: "4",
                    shortcode: "en",
                    iso639: "en-US",
                    name: "English",
                    direction: "ltr",
                },
                is_winner: false,
                stats: {
                    sent: 0,
                    opens_count: 0,
                    open_rate: {
                        float: 0,
                        string: "0%",
                    },
                    clicks_count: 0,
                    click_rate: {
                        float: 0,
                        string: "0%",
                    },
                    unsubscribes_count: 0,
                    unsubscribe_rate: {
                        float: 0,
                        string: "0%",
                    },
                    spam_count: 0,
                    spam_rate: {
                        float: 0,
                        string: "0%",
                    },
                    hardbouncescount: 0,
                    hardbouncerate: {
                        float: 0,
                        string: "0%",
                    },
                    softbouncescount: 0,
                    softbouncerate: {
                        float: 0,
                        string: "0%",
                    },
                    deliveries_count: 0,
                    delivery_rate: {
                        float: 0,
                        string: "0%",
                    },
                    forwards_count: 0,
                    forward_rate: {
                        float: 0,
                        string: "0%",
                    },
                    socialinteractionscount: 0,
                    socialinteractionrate: {
                        float: 0,
                        string: "0%",
                    },
                    clicktoopen_rate: {
                        float: 0,
                        string: "0%",
                    },
                },
                send_after: null,
                track_opens: true,
                uses_survey: false,
                uses_quiz: false,
                preheader: null,
            },
        ],
        usedinautomations: false,
        typeforhumans: "Regular",
        is_stopped: false,
        has_winner: null,
        winnerversionfor_human: null,
        winnersendingtimeforhumans: null,
        winnerselectedmanually_at: null,
        can: {
            update: true,
            delete: true,
            send: true,
            copy: true,
            resend: false,
        },
        uses_ecommerce: false,
        ecommerce_stats: null,
        uses_survey: false,
        issmartsendingindexoption_finished: false,
        isappliedforsmartsendingindexoption: false,
        warnings: [],
        recipients_count: 3,
        next_step: null,
        iscurrentlysending_out: false,
        canbecopied: true,
        hasbasicfilter: true,
        basicfilterfor_humans: {
            included_groups: [
                {
                    id: 204256230875596350,
                    account_id: 2799084,
                    created_at: "2026-11-16T01:52:01.000000Z",
                    updated_at: "2026-11-16T16:04:10.000000Z",
                    deleted_at: null,
                    name: "Weekly Events",
                    active_count: 3,
                    open_rate: 0,
                    click_rate: 0,
                    serial_no: 6437709,
                    sent_count: 0,
                    opens_count: 0,
                    clicks_count: 0,
                    unsubscribed_count: 0,
                    unconfirmed_count: 0,
                    bounced_count: 0,
                    junk_count: 0,
                    created_source: null,
                },
            ],
            excluded_groups: [],
            included_segments: [],
            excluded_segments: [],
            allactivesubscribers: false,
        },
        iseligiblefor_sending: true,
        subscriberimportlimit_exceeded: false,
        needs_repair: false,
    },
};

const getEmailResponse = {
  "data": {
    "id": "204331377293788411",
    "type": "builderinlineemail",
    "emailable_type": "campaigns",
    "emailable_id": "204331377280156920",
    "settings": {
      "brand": {
        "mode": "account",
        "font_family": "Arial, Helvetica, sans-serif",
        "background_color": "#FFFFFF",
        "text_color": "#000000",
        "border_color": "#000000"
      },
      "layout": {
        "width_mode": "default",
        "alignment": "center"
      },
      "typography": {
        "link": {
          "color": "#000000"
        },
        "heading": {
          "font_family": "Arial, Helvetica, sans-serif",
          "font_weight": "600",
          "line_height": "150%",
          "letter_spacing": "0",
          "h1": {
            "color": "#000000",
            "size": "32"
          },
          "h2": {
            "color": "#000000",
            "size": "24"
          },
          "h3": {
            "color": "#000000",
            "size": "20"
          }
        },
        "paragraph": {
          "font_family": "Arial, Helvetica, sans-serif",
          "font_weight": "400",
          "line_height": "150%",
          "letter_spacing": "0",
          "p1": {
            "color": "#000000",
            "size": "16"
          }
        }
      },
      "button": {
        "font_family": "Arial, Helvetica, sans-serif",
        "font_weight": "500",
        "letter_spacing": "0",
        "background_color": "#BE72C7",
        "text_color": "#ffffff",
        "border_radius": "8"
      },
      "footer": {
        "show_preferences": false,
        "company_name": {
          "editor_content": {
            "content": [
              {
                "text": "Free Salsa Library",
                "type": "text"
              }
            ]
          }
        },
        "address": {
          "editor_content": {
            "content": [
              {
                "text": "685 Southeast Belmont Street, Portland",
                "type": "text"
              },
              {
                "type": "hardBreak"
              },
              {
                "text": "Portland, OR 97214",
                "type": "text"
              }
            ]
          }
        },
        "info_text": {
          "editor_content": {
            "content": [
              {
                "text": "You received this email because you signed up on our website or made a purchase from us.",
                "type": "text"
              }
            ]
          }
        },
        "unsubscribe_text": "Unsubscribe",
        "preferences_text": "Update your preferences",
        "social_links": []
      }
    },
    "blocks": [
      {
        "id": "246286782",
        "type": "paragraph",
        "editor_content": {
          "attrs": {},
          "content": []
        }
      },
      {
        "id": "246286783",
        "type": "divider",
        "editor_content": {
          "attrs": {}
        }
      },
      {
        "id": "246286784",
        "type": "image",
        "editor_content": {
          "attrs": {
            "alt": "",
            "src": "",
            "url": "",
            "width": 130,
            "height": null,
            "linkId": null,
            "caption": "",
            "linkType": "link",
            "alignment": "left",
            "fullWidth": false,
            "footerRole": "logo",
            "openNewTab": false
          }
        }
      },
      {
        "id": "246286785",
        "type": "paragraph",
        "editor_content": {
          "attrs": {
            "footerRole": null
          },
          "content": [
            {
              "text": "Free Salsa Library",
              "type": "text",
              "marks": [
                {
                  "type": "bold"
                }
              ]
            },
            {
              "type": "hardBreak"
            },
            {
              "text": "685 Southeast Belmont Street, Portland",
              "type": "text"
            },
            {
              "type": "hardBreak"
            },
            {
              "text": "United States of America",
              "type": "text"
            }
          ]
        }
      },
      {
        "id": "246286786",
        "type": "social_icon",
        "editor_content": {
          "attrs": {
            "size": 16,
            "color": "grey",
            "items": [],
            "shape": "default",
            "alignment": "left",
            "footerRole": "social",
            "targetBlank": true
          }
        }
      }
    ]
  },
  "etag": "2"
}
