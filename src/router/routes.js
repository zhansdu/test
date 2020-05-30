import home from '@/views/home/home'
import description from '@/views/home/description'
export default [
{
	name:'home',
	path:'',
	component:home,
	redirect:{name:'description'},
	children:[
	{
		name:'description',
		path:'description',
		component: description
	}
	]
}
]