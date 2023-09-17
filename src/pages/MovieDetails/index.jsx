import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Container, Content, Tags } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag';

export function MovieDetails() {
  const navigate = useNavigate();

  const tags = ['suspense', 'drama'];
  const description =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis vero ratione recusandae illum architecto harum accusamus dolor, quidem consequuntur facere fugiat cum, cumque quasi quisquam a tempore tenetur ab et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis officia dolores itaque optio! Sapiente, nostrum perferendis? Dicta sunt ipsum commodi fuga placeat voluptate totam, quas a veniam. Aut, cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore temporibus deserunt cumque pariatur ex officiis mollitia tempora architecto. Possimus facere minima dolorum sed officiis commodi aspernatur autem inventore fuga culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corporis tempore cupiditate quis facilis officia quia, cum laboriosam voluptas quas eos iusto laudantium sequi voluptatem numquam quod vero illum hic! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis vero ratione recusandae illum architecto harum accusamus dolor, quidem consequuntur facere fugiat cum, cumque quasi quisquam a tempore tenetur ab et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis officia dolores itaque optio! Sapiente, nostrum perferendis? Dicta sunt ipsum commodi fuga placeat voluptate totam, quas a veniam. Aut, cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore temporibus deserunt cumque pariatur ex officiis mollitia tempora architecto. Possimus facere minima dolorum sed officiis commodi aspernatur autem inventore fuga culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corporis tempore cupiditate quis facilis officia quia, cum laboriosam voluptas quas eos iusto laudantium sequi voluptatem numquam quod vero illum hic! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis vero ratione recusandae illum architecto harum accusamus dolor, quidem consequuntur facere fugiat cum, cumque quasi quisquam a tempore tenetur ab et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis officia dolores itaque optio! Sapiente, nostrum perferendis? Dicta sunt ipsum commodi fuga placeat voluptate totam, quas a veniam. Aut, cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore temporibus deserunt cumque pariatur ex officiis mollitia tempora architecto. Possimus facere minima dolorum sed officiis commodi aspernatur autem inventore fuga culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corporis tempore cupiditate quis facilis officia quia, cum laboriosam voluptas quas eos iusto laudantium sequi voluptatem numquam quod vero illum hic! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis vero ratione recusandae illum architecto harum accusamus dolor, quidem consequuntur facere fugiat cum, cumque quasi quisquam a tempore tenetur ab et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis officia dolores itaque optio! Sapiente, nostrum perferendis? Dicta sunt ipsum commodi fuga placeat voluptate totam, quas a veniam. Aut, cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore temporibus deserunt cumque pariatur ex officiis mollitia tempora architecto. Possimus facere minima dolorum sed officiis commodi aspernatur autem inventore fuga culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corporis tempore cupiditate quis facilis officia quia, cum laboriosam voluptas quas eos iusto laudantium sequi voluptatem numquam quod vero illum hic!';

  return (
    <Container>
      <Header />
      <Content>
        <Button
          title="voltar"
          icon={FiArrowLeft}
          type="button"
          variant="text-button"
          className="backBtn"
          onClick={() => navigate(-1)}
        />

        <div className="row-div">
          <h3>O Menu</h3>
          <Rating rating={4} size={20} />
        </div>

        <div className="row-div">
          <img src="https://github.com/lucasdoloh0v.png" alt="" />
          <p>Por Lucas Alves</p>

          <FiClock />
          <p>23/08/2023 15:00</p>
        </div>

        <Tags>
          {tags.map((tag) => (
            <Tag name={tag} key={tag} />
          ))}
        </Tags>

        <p>{description}</p>
      </Content>
    </Container>
  );
}
