Smalltalk createPackage: 'Helios-Browser-Tests'!
TestCase subclass: #HLBrowserTest
	instanceVariableNames: 'browser'
	package: 'Helios-Browser-Tests'!
!HLBrowserTest commentStamp!
Test cases for the functionality of  `HLBrowserModel`!

!HLBrowserTest methodsFor: 'tests'!

setUp
	browser := HLBrowserModel new.
!

testAllProtocolsSelectedWhenSelectingAClass
	self assert: browser selectedProtocol isNil.
	browser selectedClass: Object.
	self assert: browser selectedProtocol equals: browser allProtocol.
!

testProtocolSelectedWhenChangingClass
	| protocolSelectedCalled |
	protocolSelectedCalled := 0.
	browser announcer on: HLProtocolSelected do: [protocolSelectedCalled := protocolSelectedCalled + 1] for: self.
	browser selectedClass: Object.
	self assert: protocolSelectedCalled equals: 1.
	browser selectedClass: ProtoObject.
	self assert: protocolSelectedCalled equals: 2.
! !

