# 
# Abstract Scene
# 
# @author David Ronai / Makiopolis.com / @Makio64 
# 

class Scene

	constructor:()->
		return

	update:(dt)->
		return

	resize:()->
		return

	transitionIn:()->
		return

	transitionOut:()->
		@onTransitionOutComplete()
		return

	onTransitionInComplete:()->
		return

	onTransitionOutComplete:()->
		SceneTraveler.onTransitionOutComplete()
		return

	dispose:()->
		return