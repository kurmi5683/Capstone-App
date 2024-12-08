CREATE OR ALTER PROCEDURE getBookings
AS
BEGIN
    SELECT
        b.booking_id,
        b.tour_id,
        b.user_id,
        b.count,
        b.total_price,
        b.status, -- Include the status column

        u.fullName AS userFullName,
        t.tour_name,
        t.tour_description,
        t.tour_img,
        t.price,
        t.start_date AS tour_start_date,
        t.end_date AS tour_end_date
    FROM
        bookings b
    INNER JOIN
        users u ON b.user_id = u._id
    INNER JOIN
        tours t ON b.tour_id = t.tour_id
    WHERE
        b.isDeleted = 0; -- Exclude deleted bookings if any
END;
