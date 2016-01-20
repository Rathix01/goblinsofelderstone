module.exports = [ 
	{
		step: 1, 
		time: 0.4, 
		type:"entry", 
		fn: "fromTo", 
		label: "PanelArrive", 
		target: "GamePanelAnimation", 
		from: { opacity: 0, y: -100 }, 
		to: { opacity: 1, y: 0, ease: Power2.easeOut },
	},
	{
		step: 1, 
		time: 0.4, 
		type:"exit", 
		fn: "fromTo", 
		label: "PanelLeave", 
		target: "GamePanelAnimation", 
		from: { y: 0, opacity: 1 }, 
		to: { y: -100, opacity: 0, ease: Power2.easeOut },
	},
	
]