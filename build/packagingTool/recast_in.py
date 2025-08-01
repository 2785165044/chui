import os
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path

# 获取当前脚本的绝对路径
script_path = os.path.abspath(__file__)
# 获取当前脚本所在目录的路径
script_directory = os.path.dirname(script_path)

def copy(path1,path2):
    file1 = open(path1, 'r',encoding='utf-8')
    os.makedirs(os.path.dirname(path2), exist_ok=True)
    file_new = open(path2, 'w',encoding='utf-8')
    #读取文件
    indexContent = file1.read()
    #写入文件
    file_new.write(indexContent)
    #关闭文件
    file1.close()
    file_new.close()

def copy_file(src, dst):
    # 确保目标路径中的目录存在
    dst_dir = os.path.dirname(dst)
    if not os.path.exists(dst_dir):
        os.makedirs(dst_dir)

    # 复制文件
    shutil.copyfile(src, dst)
    print(src + "文件复制成功")

#查找替换 从前往后
def replaceFile(writePath,readPath,newPath,count = -1):
    with open(readPath, 'r',encoding='utf-8') as file:
        readFile = file.read()
    if readFile != "":
        os.makedirs(os.path.dirname(writePath), exist_ok=True)
        with open(writePath, 'r',encoding='utf-8') as file:
            filedata = file.read()
        with open(newPath, 'r',encoding='utf-8') as file:
            newPathdata = file.read()
        filedata = filedata.replace(readFile, newPathdata,count)
        with open(writePath, 'w',encoding='utf-8') as file:
            file.write(filedata)

#查找替换 从前往后
def replaceFile1(writePath,readPath,newPath,count = -1,isNewData = False):
    with open(readPath, 'r',encoding='utf-8') as file:
        readFile = file.read()
    if readFile != "":
        os.makedirs(os.path.dirname(writePath), exist_ok=True)
        with open(writePath, 'r',encoding='utf-8') as file:
            filedata = file.read()
        if isNewData == True:
            newPathdata = newPath
        else:
            with open(newPath, 'r',encoding='utf-8') as file:
                newPathdata = file.read()

        index = filedata.rfind(readFile)
        if index != -1:
            # 利用切片操作替换字符串
            new_s = filedata[:index] + newPathdata + filedata[index + len(readFile):]
            with open(writePath, 'w',encoding='utf-8') as file:
                file.write(new_s)
        else:
            print('未找到要替换的子字符串')
       

#从str1一直删除直到str2
def remove_between_strings(input_str, start_str, end_str):
    start_index = input_str.find(start_str)
    end_index = input_str.find(end_str, start_index + len(start_str))

    if start_index != -1 and end_index != -1:
        result_str = input_str[:start_index] + input_str[end_index + len(end_str):]
        return result_str
    else:
        # 如果未找到指定的子字符串，则返回原始字符串
        return input_str

#压缩
def create_zip_with_files(zip_filename, files_to_add):
    with zipfile.ZipFile(zip_filename, 'w',compression=zipfile.ZIP_DEFLATED) as myzip:
        for file_path in files_to_add:
            # 指定文件在 zip 文件中的路径
            arcname = os.path.basename(file_path)
            myzip.write(file_path, arcname=arcname)

#解压
def decompression(zip_filename, files_to_add):
    with zipfile.ZipFile(zip_filename, 'r') as zip_ref:
        # 解压缩 zip 文件到指定目录
        zip_ref.extractall(files_to_add)


#读取文件夹所有的文件
def list_files_in_folder(folder_path):
    # 使用 os.listdir() 获取文件夹中的所有文件和子文件夹
    files = os.listdir(folder_path)
    # 筛选出文件（而非文件夹）
    files = [file for file in files if os.path.isfile(os.path.join(folder_path, file))]
    files_path = [os.path.join(folder_path, subfolder) for subfolder in files]
    return files_path

#读取文件夹所有的文件，返回完整路径
def list_subfolders(folder_path):
    # 使用 os.listdir() 获取文件夹中的所有文件和子文件夹
    contents = os.listdir(folder_path)

    # 筛选出子文件夹
    subfolders = [content for content in contents if os.path.isdir(os.path.join(folder_path, content))]

    # 获取子文件夹的完整路径
    subfolder_paths = [os.path.join(folder_path, subfolder) for subfolder in subfolders]

    return subfolder_paths

#判断文件路径是否以 extension参数 结尾
def check_file_extension(file_path, extension):
    file_extension = os.path.splitext(file_path)[1]
    return file_extension.lower() == extension

# 文件 {file_path} 中包含字符串 {target_string}
def check_string_in_file(file_path, target_string):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            for line in file:
                if target_string in line:
                    return True
        return False
    except FileNotFoundError:
        print('文件不存在')

#去掉文件名的后缀
def remove_file_extension(file_name):
    name, extension = os.path.splitext(file_name)
    return name

#添加渠道信息
def setFile2(path,data):
    # replaceFile(newFile,script_directory + "\\a.txt",script_directory+"\\a_new.txt")
    if check_string_in_file(path,'window["SW_qudao"]') == False:
        replaceFile1(path,os.path.join(script_directory,'a.txt') ,data,1,True)
    else:
        print(path+'文件已经注入过了')
    return

def setFileZIP2(file_path,data):
    di = os.path.dirname(file_path)
    base_name = os.path.basename(file_path)
    newFile =os.path.join(di,remove_file_extension(base_name))
    decompression(file_path,newFile)
    files = list_files_in_folder(newFile)
    for file_path in files:
        # 判断文件路径是否以 .html 结尾
        if check_file_extension(file_path, '.html'):
            setFile2(file_path,data)
            create_zip_with_files(os.path.join(di,base_name), list_files_in_folder(newFile))
    return

# 获取当前路径对应的渠道
def getQudao(file_path):
    base_name = os.path.basename(file_path)
    qudao = 'null'
    if '_applovin' in base_name:
        qudao = 'applovin'
    elif '_facebook' in base_name:
        qudao = 'facebook'
    elif '_google' in base_name:
        qudao = 'google'
    elif '_ironsource' in base_name:
        qudao = 'ironsource'
    elif '_liftoff' in base_name:
        qudao = 'liftoff'
    elif '_moloco' in base_name:
        qudao = 'moloco'
    elif '_tiktok' in base_name:
        qudao = 'tiktok'
    elif '_unity' in base_name:
        qudao = 'unity'
    elif '_vungle' in base_name:
        qudao = 'vungle'
    return qudao


# 获取当前脚本所在的目录
script_dir = Path(__file__).resolve().parent
print("当前脚本所在的目录:", script_dir)
# 使用 .parent 属性获取上一级目录
bulld_dir = str(script_dir.parent)
print("回退一层后的路径:", bulld_dir)
html_dir = os.path.join(bulld_dir,'super-html')
files = list_files_in_folder(os.path.join(html_dir,'applovin'))
AUABuild_dir = os.path.join(bulld_dir , 'AUABuild')

for item_name in files:
    item_name = os.path.basename(item_name)

    item_name = item_name.rsplit('_', 1)[0]
    print(item_name)
    # # 创建文件夹AUABuild
    # os.makedirs(path, exist_ok=True)
    # applovin,facebook,google,ironsource,liftoff,moloco,tiktok,unity,vungle
    buildArr = [os.path.join('applovin',item_name+'_applovin.html')
                ,os.path.join('facebook',item_name+'_facebook.zip')
                ,os.path.join('google',item_name+'_google.zip')
                ,os.path.join('ironsource2025',item_name+'_ironsource2025.html')
                ,os.path.join('liftoff',item_name+'_liftoff.zip')
                ,os.path.join('moloco',item_name+'_moloco.html')
                ,os.path.join('tiktok',item_name+'_tiktok.zip')
                ,os.path.join('unity',item_name+'_unity.html')
                ,os.path.join('vungle',item_name+'_vungle.zip')
                ]

    for build in buildArr:
        # copy(os.path.join(args[1],build),os.path.join(path,build))
        copy_file(os.path.join(html_dir,build),os.path.join(AUABuild_dir,os.path.basename(build)))


# 注入所有版本对应渠道的标识
files = list_files_in_folder(AUABuild_dir)
print("注入渠道信息")
for file_path in files:
    print(file_path)
    qudao = getQudao(file_path)
    qudao_data = '</script><script>window["SW_qudao"] = "'+qudao+'";</script>'
    # 判断文件路径是否以 .html 结尾
    if check_file_extension(file_path, '.html'):
        setFile2(file_path,qudao_data)
    elif check_file_extension(file_path, '.zip'):
        setFileZIP2(file_path ,qudao_data)
    else:
        print('不是 HTML 文件也不是 ZIP 文件')

print("完成")


# 使用 `explorer` 命令打开路径
subprocess.run(['explorer', os.path.normpath(AUABuild_dir)])
# 关闭当前脚本
sys.exit()

