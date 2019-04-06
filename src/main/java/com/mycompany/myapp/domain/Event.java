package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "event")
public class Event implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @OneToOne
    private User creator;

    @Column(name = "adddate")
    private Date createDate;

    @Column(name = "startdate")
    private Date startDate;

    @Column(name = "enddate")
    private Date endDate;

    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "longitude")
    private Double longitude;

    @Size(max = 256)
    @Column(name = "title", length = 256)
    private String title;

    @Size(max = 256)
    @Column(name = "description", length = 256)
    private String description;

    @Column(name = "rating")
    private Double rating;

    public Set<User> getStudents() {
        return students;
    }

    public void setStudents(Set<User> students) {
        this.students = students;
    }

    @ManyToMany(
        targetEntity=User.class,
        cascade=CascadeType.ALL
    )
    @JoinTable(
        name="user_event",
        joinColumns=@JoinColumn(name = "event_id"),
        inverseJoinColumns=@JoinColumn(name = "user_id")
    )
    private Set<User> students=new HashSet<>();

}
