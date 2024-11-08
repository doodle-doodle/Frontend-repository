package repository;

import hello.hello_spring.repository.MemberRepository;
import hello.hello_spring.repository.MemoryMemberRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import hello.hello_spring.domain.Member;

public class MemoryMemberRepositoryTest {

    MemberRepository repository = new MemoryMemberRepository();

    // 각 테스트가 끝난 후 저장소를 비워줍니다.
    @AfterEach
    public void afterEach() {
        ((MemoryMemberRepository) repository).clearStore();
    }

    @Test
    public void save() {
        // given
        Member member = new Member();
        member.setName("spring");

        // when
        repository.save(member);

        // then
        Member result = repository.findById(member.getId()).orElse(null);
        Assertions.assertNotNull(result);  // 저장된 결과가 null이 아닌지 확인
        Assertions.assertEquals(member, result);  // 저장된 객체와 동일한지 확인
    }
}
