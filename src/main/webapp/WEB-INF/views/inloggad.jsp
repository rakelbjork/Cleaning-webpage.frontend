<%--Vad kunden ser som inloggad--%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Avklarad st�dning</title>
<style>
	label {
		display: inline-block;
		width: 200px;
		margin: 5px;
		text-align: left;
	}

	input[type=radio] {
		display: inline-block;
		margin-left: 45px;
	}
	input[type=checkbox] {
		display: inline-block;
		margin-right: 190px;
	}	
	
	button {
		padding: 10px;
		margin: 10px;
	}
</style>
</head>
<body>
	<div align="center">
		<h2>Senast utf�rd st�dning</h2>
		<%--Skapar upp en knapp f�r godk�nd st�dning, g�r sedan till "godkand"--%>
		<form:form action="godkand_stadning" method="post" modelAttribute="user">


			<form:label path="betyg">Hur n�jd var du med st�dningen?</form:label>
			<form:radiobutton path="betyg" value="Inte n�jd"/>Inte n�jd
			<form:radiobutton path="betyg" value="N�jd"/>N�jd
			<form:radiobutton path="betyg" value="Mycket n�jd"/>Mycket n�jd<br/>

			<form:label path="typ">Typ av st�dning:</form:label>
			<form:select path="typ" items="${typAvStadning}" /><br/>


			<form:label path="kommentar">Kommentar:</form:label>
			<form:textarea path="kommentar" cols="25" rows="5"/><br/>

			<form:button>Godk�nn st�dning</form:button>

		</form:form>

		<%--Skapar upp en knapp f�r ej godk�nd st�dning, g�r sedan till "ej_godkand"--%>
		<form:form action="ej_godkand" method="post" modelAttribute="user">
			<form:button>Jag godk�nner inte st�dningen</form:button>
		</form:form>
	</div>
</body>
</html>