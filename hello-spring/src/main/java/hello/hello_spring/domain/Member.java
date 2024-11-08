package hello.hello_spring.domain;

public class Member {

    private Long id; // 시스템이 정해주는 것
    private String name; // 회원가입 시 사용자가 등록하는 이름

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
}
