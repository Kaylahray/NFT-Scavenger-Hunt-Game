import { Answers } from "src/answers/answers.entity";
import { Hints } from 'src/hints/hints.entity';
import { Level } from 'src/level/entities/level.entity';
import { NFTs } from 'src/nfts/nfts.entity';
import { UserProgress } from 'src/user-progress/User-Progress.entity';;
import { User } from "src/users/users.entity";
import { Scores } from 'src/scores/scores.entity';
import { Answer } from 'src/answers/answers.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany, JoinTable,
  OneToOne,
} from 'typeorm';

@Entity()
export class Puzzles {
    @PrimaryGeneratedColumn()
    id: number;

  @OneToMany(() => Hints, (hints) => hints.puzzles)
  @OneToMany(() => Hints, (hints) => hints.puzzles)
  hints: Hints[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ type: 'int' })
  @Column({ type: 'int' })
  pointValue: number;

  // @OneToMany(() => UserProgress, (userProgress) => userProgress.puzzles)
  // userProgress: UserProgress[];

  @OneToOne(() => NFTs, (nfts) => nfts.puzzles, { nullable: true })
  nfts: NFTs;

  @ManyToOne(() => Level, (level) => level.puzzles)
  level: Level;

  // Add Scores relationship
  @OneToMany(() => Scores, (score) => score.puzzleId)
  scores: Scores[];
  @OneToMany(() => Answer, (answer) => answer.puzzle)
  answers: Answer[];
}
