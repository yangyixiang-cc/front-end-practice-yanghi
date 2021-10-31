// 按下回车把数据存储到本地
$(function () {
    load();
    $("#title").on("keydown", function (e) {
        if (e.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入你的代办事项");
            } else {
                // 先读取本地存储的数据
                var local = getDate();
                //按下回车保存最新数据到本地存储
                // 把最新的数据追加给local数组
                local.push({
                    title: $(this).val(),
                    done: false
                });
                // 把local数组给本地存储
                saveDate(local);
                load();
                $(this).val("");
            }


        }
    });
    //获取本地存储数据
    function getDate() {
        var date = localStorage.getItem("todolist");
        if (date !== null) {
            return JSON.parse(date);
        } else {
            return [];
        }
    }
    // 保存本地存储数据
    function saveDate(date) {
        // JSON.stringify()把数据转换成字符串格式才能进行存储
        localStorage.setItem("todolist", JSON.stringify(date));
    }
    // toDoList本地存储数据渲染加载到页面
    // 先要读取数据。记住转换为对象格式
    // 之后遍历这个数据，有几个数据，就生成几个li
    function load() {
        //读取数据
        var data = getDate();
        //遍历之前先要清空ol里面的元素 防止重复添加
        $("ol, ul").empty();
        var todoCount = 0;
        var doneCount = 0;
        //遍历数据
        $.each(data, function (i, n) {
            if (n.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + ">x</a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + ">x</a></li>");
                todoCount++;
            }

        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }

    //todolist删除操作
    // 点击里面的a连接，不是删除的li，而是删除本地存储对应的数据
    // 我们给每个小a自定义属性，获取序号
    // 根据这个索引号删除相关的数据---数组的splice()方法
    // 存储修改后的数据，然后存储给本地存储
    // 重新渲染加载数据列表
    // 因为a是动态创建的，我们使用on方法绑定事件
    $("ol, ul").on("click", "a", function () {
        // 先获取本地存储数据
        var data = getDate();
        // 修改当前数据
        var index = $(this).attr("id");
        data.splice(index, 1);
        saveDate(data);
        load();
    })
    // 点击复选框修改相应数据done属性
    /**
     * 1. 当我们点击了小的复选框，修改本地存储数据，再重新渲染数据列表
     * 2. 点击之后，获取本地存储数据
     * 3. 修改对应数据属性done为当前复选框的checked状态
     * 4. 判断done的值，渲染到不同的列表中
     *  */
    $("ol, ul").on("click", "input", function () {
        //先获取本地存储的数据
        var data = getDate();
        // 修改数据
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        saveDate(data);
        load();
    })

})