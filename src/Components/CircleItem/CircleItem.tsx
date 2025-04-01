
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
function CircleItem({top1,left1,rotate1}) {
  return (
    <div>
        <div className={`absolute bg-white py-4 text-center w-fit h-fit z-100 transform rotate-${rotate1} top-${top1} left-${left1}`}>
            <DrawOutlinedIcon style={{width:"40px",height:"40px",color:"#7551fb"}}/>
            <p className='text-[30px] text-[#7551fb]'>Web Designer</p>
        </div>
    </div>
  )
}

export default CircleItem