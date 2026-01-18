import Image from "next/image";
import fontCss from "../../../_font.module.css";
import Callout from "@/components/callout/callout";
import CodeBlock from "@/components/code/codeBlock";
import CodeBlockClient from "@/components/code/code-block-client";

export default function DomainDrivenDesign() {
      return (
            <>
                  <div className="flex gap-2">
                        <div className="flex flex-col justify-between">
                              <h1>
                                    DDD: Domain Driven Design
                              </h1>
                              <div className="tag-list">
                                    <ul className="flex gap-2">
                                          <li className="tag-item">
                                                <a href="">DDD</a>
                                          </li>
                                          <li className="tag-item">
                                                <a href="">ERP</a>
                                          </li>
                                          <li className="tag-item">
                                                <a href="">Software Architect</a>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                        <div className="relative w-[720px] h-[405px] rounded-lg overflow-hidden">
                              <Image src="/thumbnails/domain-driven-design-thumbnail.png" alt="thumbnail" fill />
                        </div>
                  </div>
                  
                  <div className="mt-[50px]">
                        <p className="paragraph">
                              Sau 1 khoảng thời gian khá dài phát triển dự án ERP theo cách tiếp cận DDD, bản thân mình đã đọc qua nhiều tải liệu về DDD cũng như cách áp dụng vào dự án thực tế là như thế.
                              <br></br>
                              Mình viết bài viết này để chia sẻ hiểu biết và trải nghiệm của mình sau khi học và áp dụng DDD vào project thực tế, bài viết sẽ tập trung trả lời câu hỏi: what, why, when và các ví dụ cho từng nội dung.
                              <br></br>
                              Kiến thức và kinh nghiệm của mình cũng chưa nhiều nên có thể sẽ có những sai sót trong bài viết. Mình sẽ rất vui nếu đọc giả có thể chỉ ra và giúp mình hoàn thiện nội dung bài viết hơn.
                        </p>
                  </div>


                  <div>
                        <h2>Hiểu về DDD: Domain Driven Design</h2>

                        <div>
                              <h3>WHAT</h3>
                              <p className="paragraph">
                                    DDD (Domain Driven Design) <strong>không phải là một pattern hay một framework cụ thể</strong>, mà là một <strong>triết lý xây dựng hệ thống phần mềm xoay quanh nghiệp vụ của doanh nghiệp</strong>. 
                                    Vì tập trung vào nghiệp vụ, nên hiệu quả của DDD phụ thuộc rất nhiều vào việc người xây dựng hệ thống <strong>hiểu nghiệp vụ đến đâu</strong>.
                              </p>
                              <p className="paragraph">
                                    Theo trải nghiệm cá nhân của mình, DDD phát huy giá trị rõ rệt nhất khi được áp dụng vào các hệ thống ERP của doanh nghiệp.
                                    Mỗi doanh nghiệp đều có quy trình nghiệp vụ riêng: có nơi đơn giản, có nơi rất phức tạp. Và trong thực tế làm việc khoảng gần 1.5 năm, mình nhận ra một điều: nghiệp vụ doanh nghiệp gần như không bao giờ đứng yên.
                              </p>

                              <div>
                                    Nghiệp vụ có thể thay đổi do:
                                    <ul className="bullet-list">
                                          <li>điều chỉnh chiến lược kinh doanh</li>
                                          <li>tối ưu lại quy trình vận hành,</li>
                                          <li>hoặc thay đổi theo chính sách, quy định của nhà nước.</li>
                                    </ul>
                                    Vì vậy, việc hệ thống phải liên tục thay đổi để đáp ứng nghiệp vụ mới là điều tất yếu.
                              </div>

                              <h4>Khi CRUD không còn đủ</h4>
                              <p>
                                    Trong nhiều hệ thống ERP, đặc biệt ở giai đoạn đầu, hệ thống thường được xây dựng theo hướng <strong>CRUD thuần:</strong> 
                                    người dùng nhập dữ liệu → hệ thống lưu xuống database → hiển thị dữ liệu ra client → chỉnh sửa, xoá, cập nhật.
                                    Cách làm này ban đầu có thể đơn giản, nhanh và chạy rất mượt. 
                                    Tuy nhiên, khi quy trình nghiệp vụ mở rộng, đặc biệt trong các lĩnh vực như tài chính, sản xuất, quản trị, hệ thống sẽ dần trở nên phức tạp và khó kiểm soát nếu chỉ dựa vào CRUD và các đoạn if–else rải rác.
                              </p>

                              <h4>Ví dụ từ 1 hệ thống ERP thực tế</h4>
                              <p>
                                    Một hệ thống ERP mình từng tham gia triển khai là hệ thống quản lý <strong>các chứng từ thanh toán và tạm ứng cho quy mô tập đoàn</strong>.
                                    <br></br>
                                    Quy trình nghiệp vụ không chỉ đơn giản là: <span className="highlight-blue-fg">tạo form → gửi duyệt → user bấm duyệt là xong</span> .
                              </p>
                              <div>
                                    Thực tế phức tạp hơn rất nhiều:
                                    <ul className="bullet-list">
                                          <li>Mỗi đề nghị thanh toán phải dựa trên kế hoạch ngân sách đã được duyệt từ đầu tháng.</li>
                                          <li>Mỗi kế hoạch ngân sách có mã ngân sách và tên ngân sách riêng, và không được trùng mã trong cùng phòng ban.</li>
                                          <li>Mỗi mã ngân sách lại tham chiếu đến mã dòng tiền đi.</li>
                                          <li>Đề nghị thanh toán được phép vượt tối đa 5% ngân sách.</li>
                                          <li>Sau khi đề nghị được duyệt hoàn toàn, kế toán mới tạo lệnh chi, và việc này có thể diễn ra trễ.</li>
                                          <li>Một đề nghị thanh toán có thể phát sinh nhiều khoản tiền chi.</li>
                                    </ul>
                                    Tất cả những ràng buộc trên có thể coi là các quy tắc nghiệp vụ (business rules) của hệ thống.
                              </div>

                              <h4>Vấn dề</h4>
                              Những quy tắc này không chỉ xuất hiện ở một chỗ, mà lặp lại ở nhiều quy trình khác nhau.
                              <br />
                              Ví dụ
                              <ul className="bullet-list">
                                    <li>Khi tạo đề nghị thanh toán → không được vượt ngân sách.</li>
                                    <li>Khi tạo đề nghị tạm ứng → cũng không được vượt ngân sách.</li>
                              </ul>
                              <p>
                                    Nếu mỗi lần xử lý nghiệp vụ, hệ thống lại: truy vấn kế hoạch ngân sách từ database, rồi viết các đoạn kiểm tra kiểu như:    
                              </p> 

<CodeBlockClient language="csharp"
code={`if (expenseRequest.Amount > budgetPlan.Amount)
{
      // Logic kiểm tra vượt ngân sách
}`.trim()}
/>

                              <p>thì logic nghiệp vụ sẽ nhanh chóng bị trùng lặp, phân tán và khó bảo trì.</p>
                              

                              <h4>Cách tiếp cận theo DDD</h4>
                              Trong cách tiếp cận DDD, những đoạn kiểm tra như vậy <strong>không chỉ đơn thuần là điều kiện kỹ thuật</strong>, mà là một phần của nghiệp vụ. 
                              Vì thế, thay vì đặt chúng rải rác ở nhiều nơi, ta đưa chúng vào chính đối tượng nghiệp vụ liên quan.
                              <br />
                              Ví dụ, quy tắc “kiểm tra số tiền có vượt ngân sách hay không” được đặt vào entity *BudgetPlan*:
                              <code>bool IsValid(Money amount)</code>
                              <br />
                              Từ đó, mọi nghiệp vụ liên quan đến ngân sách chỉ cần gọi hành vi này của BudgetPlan, thay vì tự kiểm tra theo cách riêng.

                              <br />
                              Lúc này, BudgetPlan không còn chỉ là một object chứa dữ liệu, mà trở thành một mô hình nghiệp vụ (domain model) với các ràng buộc rõ ràng. Các đối tượng khác như:
                              <ul className="bullet-list">
                                    <li>ExpensePayment (đề nghị thanh toán),</li>
                                    <li>AdvancePayment (đề nghị tạm ứng),</li>
                                    <li>BudgetTransaction (ghi nhận giao dịch),</li>
                              </ul>
                              khi cần tương tác với ngân sách đều phải thông qua các <strong>hành vi nghiệp vụ đã được định nghĩa sẵn</strong> trong domain.

                              <Callout>
                                    Thông qua ví dụ trên, có thể thấy DDD không tập trung vào database hay CRUD, mà tập trung vào việc hiện thực hoá nghiệp vụ của doanh nghiệp một cách rõ ràng và nhất quán trong mã nguồn.
                              </Callout>
                              

                              <br /><br /><br /><br />
                              <div>
                                    Với mình, DDD sẽ phát huy mạnh nhất khi áp dụng vào các ứng dụng vào các hệ thống ERP của doanh nghiệp.
                                    Mỗi doanh nghiệp sẽ có quy trình nghiệp vụ khác nhau, phức tạp cũng có mà đơn giản cũng có. 
                                    Trong khoảng gần 1.5 năm làm việc của mình, minh nhận ra rằng nghiệp vụ của doanh nghiệp sẽ luôn thay đổi, có thể là do sự thay đổi chiến lược kinh doanh, tối ưu hóa quy trình, hoặc thay đổi phù hợp theo chính sách của nhà nước.
                                    Vì thế việc phải thay đổi code để đáp ứng sự thay đổi nghiệp vụ doanh nghiệp là điều tất yếu.
                                    Thế nhưng nếu 1 hệ thống ERP chỉ được phát triển chỉ để phục vụ CRUD (nhập dữ liệu đầu vào, hệ thống lưu xuồng DB, hiển thị dữ liệu ra client và thực hiện các thao tác CRUD) thì
                                    ban đầu hệ thống có thể chạy mượt mà, trơn chu, tuy nhiên hệ thống sẽ trở nên phức tạp khi quy trình mở rộng, đặc biệt khi phục vụ trong các nghiệp vụ đặc thù như sản xuất, quản trị.
                                    <br /><br/>
                                    <strong>Ví dụ: </strong>
                                    <br />
                                    1 hệ thống ERP mình đã từng phụ trách triển khai chính là hệ thống quản lý các chứng từ như đề nghị thanh toán, tạm ứng cho quy mô tập đoàn. 
                                    Các đơn vị khi muốn làm đề xuất thanh toán thì phải làm tờ trình, qua các cấp duyệt thì mới được Phòng Kế toán chi tiến.
                                    Nếu trước đây các đề xuất này làm trên giấy và ký sống thì nay phải được số hóa trên 1 hệ thống ERP, và câu chuyện sẽ không đơn giản chỉ là làm form trình ký, gửi form trình ký dến user duyệt và user submit duyệt là xong.
                                    
                                    <ul className="bullet-list">
                                          <li>Mỗi đề xuất thanh toán phải dựa trên kế hoạch ngân sách đã được duyệt từ đầu tháng</li>
                                          <li>Mỗi kế hoạch ngân sách phải có mã ngân sách và tên ngân sách.</li>
                                          <li>Mỗi phòng ban phải tạo kế hoạch ngân sách và không được phép có trùng 2 mã ngân sách.</li>
                                          <li>Mỗi mã ngân sách lại phải tham chiếu đến mã dòng tiền đi.</li>
                                          <li>Đề nghị thanh toán được phép vượt 5% kế hoạch ngân sách.</li>
                                          <li>Khi đề nghị thanh toán được duyệt hoàn toàn thì phải đợi Kế toán tạo lệnh cho khoản tiền chi, được phép tạo trễ.</li>
                                          <li>Mỗi đề nghị thanh toán lại có thể tạo nhiều hơn 1 khoản tiền đi.</li>
                                    </ul>
                                    Những quy định trên mình sẽ gọi là 1 rule và trong hệ thống thanh toán mình xây dựng thì có rất nhiều rule ràng buộc giữa các chứng từ thanh toán, ngân sách, user tạo chứng từ, user xem xét, user phê duyệt, kế toán, ....
                                    Vậy hệ thống bắt buộc phải hiện thực hóa toàn bộ rule này, mỗi rule có thể xuất hiện ở nhiều quy trình như khi tạo đề xuất thanh toán thì không được phép vượt ngân sách, khi tạo đề xuất tạm ứng thì cũng không được phép vượt ngân sách.
                                    Vậy bạn sẽ gọi rule này mỗi khi có 1 request cần đến nó, và sẽ tệ nếu mỗi lần tạo thanh toán bạn lại phải tìm record budgetPlan tương ứng trong database rồi thực hiện so sánh <span>{`if (expenseRequest.Amount > budgetPlan.Amount)`}</span> đúng không ?
                                    Lúc này ta coi <span>{`if (expenseRequest.Amount > budgetPlan.Amount)`}</span> sẽ là 1 hàm nghiệp vụ và đưa vào class entity BudgetPlan
                                    <span>{`internal bool isValid(Money amount)`}</span>
                                    và mỗi lần cần xác thực tiền thanh toán có vượt ngân sách không thì ta chỉ gọi hàm <span>{`isValid()`}</span> của entity BudgetPlan để xác thực.

                              </div>

                              <p>
                                    Vậy lúc này ta sẽ coi 1 entity BudgetPlan là 1 domain nghiệp vụ có các hàm nghiệp vụ ràng buộc rõ ràng. Các nghiệp vụ cần tương tác với BudgetPlan đều phải gọi các hàm nghiệp vụ của class.
                                    class BudgetPlan này sẽ tương tác nhiều với class khác như ExpensePayment (đề nghị thanh toán), AdvancePayment (đề nghị tạm ứng), BudgetTransaction (ghi nhận giao dịch), ... nhiều class khác trong tương lai nếu hệ thống cần phải mở rộng hoặc thay đổi nghiệp vụ.
                                    Vậy là bạn đọc đã có thể hiểu sơ sơ về khái niệm domain trong DDD rồi. Mình sẽ đi sâu hơn về khái niệm này trong phần sau.
                              </p>
                        </div>

                        <div>
                              <h3>WHERE</h3>
                              <p>
                                    Vậy có phải hệ thống ERP nào cũng nên áp dụng DDD ?
                                    Không phải lúc nào cũng áp dụng DDD cho các hệ thống ERP. Để quyết định xem có nên áp dụng DDD hay không thì cần phải biết được ưu và nhược của DDD
                              </p>
                              <br />
                              <div>
                                    <h4 className="section-title">Điểm mạnh</h4>
                                    <ul className="bullet-list">
                                          <li>
                                                <strong>Code dễ bảo trì: </strong>DDD tập trung trừu tượng hóa nghiệp vụ vào 1 class domain entity như ExpensePayment, BugdetPlan
                                                nên toàn bộ logic nghiệp vụ sẽ tập trung vào 1 class duy nhất thay vì nằm rải rác ở nhiều nơi (Đây là lý thuyết OOP). 
                                                Qua đó không chỉ giúp tổ chức code gọn gàng mà còn giúp số hóa nghiệp vụ dễ dàng
                                          </li>
                                          <li>
                                               <strong>Ngôn ngữ chung: </strong>Toàn bộ chi tiết, thao tác nghiệp vụ sẽ được diễn giải bên trong class domain nên có thể dễ dàng hình dung nghiệp vụ qua class domain này, nhờ đó mà các lập trình viên join dự án có thể hiểu nghiệp vụ 
                                                và giao tiếp với các domain expert hay yêu cầu của khách hàng {`giảm rủi ro hiểu sai nghiệp vụ giữa các bên`} dẫn đến kết quả không như ý
                                          </li>
                                          <li>
                                                <strong>Khả năng mở rộng linh hoạt: </strong>Trong các hệ thống áp dụng DDD, 1 nghiệp vụ lớn có thể chia thành nhiều nghiệp vụ nhỏ: bounded context để giảm độ phức tạp (giống với ý tưởng chia để trị: divide & conquere)
                                                Mỗi context đảm nhận một phần nghiệp vụ riêng biệt, giúp quản lý và phát triển độc lập từng phần mà không ảnh hưởng toàn cụ. Vì vậy mà nếu khi nghiệp vụ có sự thay đổi hoặc cần mở rộng thì , chỉ cần cập nhật phần liên quan mà hệ thống tổng thể ít bị ảnh hưởng. 
                                                Khả năng này làm cho hệ thống dễ thích ứng với yêu cầu mới và mở rộng quy mô (scalability) hiệu quả hơn
                                          </li>
                                          <li>
                                                <strong>Đáp ứng tốt nghiệp vụ phức tạp: </strong> trong các ứng dụng doanh nghiệp lớn (ERP, tài chính, sản xuất…) có nhiều quy tắc nghiệp vụ phức tạp, DDD cho phép biểu diễn rõ ràng các luật này trên mã nguồn. 
                                                Mô hình nghiệp vụ được thiết kế tỉ mỉ giúp phần mềm gắn sát mục tiêu kinh doanh nên khi cần thay đổi nghiệp vụ (ví dụ thay đổi quy tắc vượt ngân sách), DDD giúp việc cập nhật mã nguồn trở nên dễ dàng hơn nhờ tất cả liên quan đều hiểu cùng ngôn ngữ chung
                                                Điều này nâng cao chất lượng phần mềm và giảm thiểu việc ứng dụng sai yêu cầu nghiệp vụ.
                                          </li>
                                    </ul>
                              </div>
                              <br />
                              <div>
                                    <h4 className="section-title">Bất cập</h4>
                                    <ul className="bullet-list">
                                          <li>
                                                <strong>Hiểu rõ nghiệp vụ</strong>DDD đòi hỏi phải có ít nhất một người hiểu rõ nghiệp vụ trong nhóm phát triển để đảm bảo mô hình hoá đúng yêu cầu khách hàng.
                                                Thường thì đây là công việc chính của 1 BA giao tiếp với khách hàng nhưng đôi khi nếu không có BA thì các developers cũng phải chủ động giao tiếp để nắm rõ được nghiệp vụ
                                          </li>
                                          <li>
                                                <strong>Learning curve cao: </strong>DDD có khá nhiều thuật ngữ chuyên dụng như ubiquitous language, entities, value objects, domain behaviors, ....
                                                Thế nên giai đoạn đầu của dự án sẽ mất nhiều thời gian để tiếp cận dẫn đến chi phí dự án sẽ cao hơn
                                          </li>
                                          <li>
                                                <strong>Không phù hợp với domain đơn giản hoặc ứng dụng CRUD: </strong>Nếu những dự án CRUD đơn giản không có nhiều nghiệp vụ phức tạp thì DDD sẽ là overhead không cần thiết.
                                                Ví dụ, một form đăng ký xin việc đơn thuần chỉ cần lưu thông tin mà không có quy tắc phức tạp, thì DDD có thể làm tăng công sức thiết kế mà không đem lại lợi ích rõ rệt.
                                                Trong trường hợp này, những phương pháp thiết kế truyền thống (MVC, CRUD pattern) có thể hiệu quả và nhanh chóng hơn.
                                          </li>
                                          <li>
                                                <strong>Kém hiệu quả trong các dự án kỹ thuật chuyên sâu: </strong>Đối với những dự án tập trung nhiều về kỹ thuật (hệ thống nhúng, tối ưu thuật toán, hoặc domain quá mới/vắng chuyên gia), khó xây dựng được ngôn ngữ chung mà tất cả cùng hiểu. 
                                                Do đó, DDD trong trường hợp này sẽ không mang lại nhiều lợi ích so với chi phí bỏ ra
                                          </li>
                                    </ul>
                              </div>
                              <p>
                                    Tóm lại, DDD phát huy tốt ở các hệ thống doanh nghiệp có nghiệp vụ phức tạp và thay đổi thường xuyên, giúp phần mềm gắn sát với yêu cầu kinh doanh và dễ bảo trì. 
                                    Ngược lại, với các ứng dụng nhỏ, đơn giản hoặc thuần kỹ thuật, DDD có thể gây tốn kém và phức tạp hơn so với lợi ích nhận được. 
                                    Việc có nên áp dụng DDD hay không phụ thuộc vào tính chất và quy mô của từng dự án cụ thể
                              </p>
                        </div>
                  
                        <div>
                              <h3>WHEN</h3>
                              <p>
                                    Với mình, DDD sẽ phát huy tốt nhất khi áp dụng vào các ứng dụng vào các hệ thống ERP của doanh nghiệp
                                    Mỗi doanh nghiệp sẽ có quy trình nghiệp vụ khác nhau, phức tạp cũng có mà đơn giản cũng có. 
                                    Trong khoảng gần 1.5 năm làm việc của mình, minh nhận ra rằng nghiệp vụ của doanh nghiệp sẽ luôn thay đổi, có thể là do sự thay đổi chiến lược kinh doanh, tối ưu hóa quy trình, hoặc là do sự thay đổi bị động từ chính sách của nhà nước
                                    Vì thế việc phải thay đổi code để đáp ứng sự thay đổi nghiệp vụ doanh nghiệp là điều tất yếu
                                    Và sẽ là con ác mộng nếu nghiệp vụ chỉ được thể hiện qua document và không thể hiện rõ ràng qua code.
                                    Vậy nên có thể nói DDD là cách chúng ta thể hiện được các rule nghiệp vụ, mối quan hệ giữa các domain với nhau qua code. Các lập trình viên khác sau này join hệ thống bên cạnh việc đọc tài liệu thì cũng có thể hiểu được nghiệp vụ thông qua code
                                    Điều này còn giúp code của project thống nhất
                              </p>
                        </div>

                        <div>
                              <p>Mình đã giới thiệu tổng quan về DDD - Domain Driven Design. Đây là 1 nội dung dài, phức tạp nên mình sẽ chia thành nhiều bài viết.
                                    Cám ơn đã đọc bài viết của mình, mình sẽ cập nhật thêm các bài viết mới về DDD trong thời gian tới
                              </p>
                        </div>
                  </div>
            </>
      )
}