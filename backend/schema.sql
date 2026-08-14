CREATE TABLE IF NOT EXISTS feedback (
 id TEXT PRIMARY KEY,
 reviewer TEXT NOT NULL,
 type TEXT NOT NULL,
 module TEXT NOT NULL,
 priority TEXT NOT NULL,
 comment TEXT NOT NULL,
 case_id TEXT,
 url TEXT,
 app_version TEXT NOT NULL,
 environment TEXT,
 created_at TEXT NOT NULL,
 status TEXT NOT NULL DEFAULT 'New',
 reviewed_by TEXT,
 reviewed_at TEXT,
 decision TEXT,
 target_release TEXT,
 implementation_notes TEXT,
 completed_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_feedback_status ON feedback(status);
CREATE INDEX IF NOT EXISTS idx_feedback_created ON feedback(created_at);