function Rest(){
    this.save =(formData)=>{
        $.ajax({
            type: 'POST',
            url: '/upload',
            data: formData,
            success: function (data) {
                console.log(data);
            },
            contentType: false,
            processData:false
          });
    }
}

export default Rest;