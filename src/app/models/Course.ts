import {ICourse} from '../common/shared/models/ICourse';
import {IUser} from '../common/shared/models/IUser';
import {ILecture} from '../common/shared/models/ILecture';
import {IWhitelistUser} from '../common/shared/models/IWhitelistUser';
import {IDirectory} from '../common/shared/models/mediaManager/IDirectory';
import {IChatRoom} from '../common/shared/models/IChatRoom';
import {IFile} from '../common/shared/models/mediaManager/IFile';
import {IPicture} from '../common/shared/models/mediaManager/IPicture';

/**
 * Created by Alexander on 23.05.2017.
 */
export class Course implements ICourse {
  _id: any;
  name: string;
  active: boolean;
  description: string;
  courseAdmin: IUser;
  media: IDirectory;
  image: IPicture;
  teachers: IUser[];
  students: IUser[];
  lectures: ILecture[];
  whitelist: IWhitelistUser[];
  enrollType: string;
  accessKey: string;
  hasAccessKey: boolean;
  chatRooms: IChatRoom[];
  freeTextStyle: string;

  public Course(course: ICourse) {
    this._id = course._id;
    this.name = course.name;
    this.active = course.active;
    this.description = course.description;
    this.courseAdmin = course.courseAdmin;
    this.teachers = course.teachers;
    this.students = course.students;
    this.lectures = course.lectures;
    this.whitelist = course.whitelist;
    this.enrollType = course.enrollType;
    this.hasAccessKey = course.hasAccessKey;
    this.image = course.image;
    this.chatRooms = course.chatRooms;
    this.freeTextStyle = course.freeTextStyle;
  }
}
