export const mockDoc1 = [
    {
        "name": "Site.GetWithMetaKeyValue",
        "shortDescription": "Gets all Site for owner that have the specified meta key and value",
        "example": "local sites = Site.GetWithMetaKeyValue(1,false, 'isOnContract', 'true', null);",
        "returnType": ""
    },
    {
        "name": "Site.UpsertMetaData",
        "shortDescription": "Adds or overwrites item to Site's metadata",
        "example": "local item = MetaItem.__new();\nSite.UpsertMetaData(aSite, item);",
        "returnType": ""
    },
    {
        "name": "Site.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "Project.GetWithMetaKeyValue",
        "shortDescription": "Gets all Project for owner that have the specified meta key and value",
        "example": "local sites = Project.GetWithMetaKeyValue(1,false, 'isOnContract', 'true', null);",
        "returnType": ""
    },
    {
        "name": "Project.UpsertMetaData",
        "shortDescription": "Adds or overwrites item to Project's metadata",
        "example": "local item = MetaItem.__new();\nProject.UpsertMetaData(aSite, item);",
        "returnType": ""
    },
    {
        "name": "Project.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "SiteGroup.GetWithMetaKeyValue",
        "shortDescription": "Gets all SiteGroup for owner that have the specified meta key and value",
        "example": "local sites = SiteGroup.GetWithMetaKeyValue(1,false, 'isOnContract', 'true', null);",
        "returnType": ""
    },
    {
        "name": "SiteGroup.UpsertMetaData",
        "shortDescription": "Adds or overwrites item to SiteGroup's metadata",
        "example": "local item = MetaItem.__new();\nSiteGroup.UpsertMetaData(aSite, item);",
        "returnType": ""
    },
    {
        "name": "SiteGroup.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "UserGroup.GetWithMetaKeyValue",
        "shortDescription": "Gets all UserGroup for owner that have the specified meta key and value",
        "example": "local sites = UserGroup.GetWithMetaKeyValue(1,false, 'isOnContract', 'true', null);",
        "returnType": ""
    },
    {
        "name": "UserGroup.UpsertMetaData",
        "shortDescription": "Adds or overwrites item to UserGroup's metadata",
        "example": "local item = MetaItem.__new();\nUserGroup.UpsertMetaData(aSite, item);",
        "returnType": ""
    },
    {
        "name": "UserGroup.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "Roadsign.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "Facts.GetSnapshot",
        "shortDescription": "Gets latest values of requested facts for given path",
        "example": "local result = Facts.GetSnapshot(1,2,3, request)",
        "returnType": ""
    },
    {
        "name": "Facts.GetTimeSeries",
        "shortDescription": "Gets the requested facts, channel, sites and aggregations for the given time range",
        "example": "local result = Facts.GetTimeSeries(1,2,3, request)",
        "returnType": ""
    },
    {
        "name": "Facts.WriteAll",
        "shortDescription": "Persists facts that have been changed",
        "example": "Facts.Add(newFact); \n Facts.WriteAll();",
        "returnType": ""
    },
    {
        "name": "Facts.AreSameValue",
        "shortDescription": "Compares each new fact with the old status object. If all the same value returns true",
        "example": "local isSame = Facts.AreSameValue(newFacts, mysite.SiteStatus.Status);",
        "returnType": ""
    },
    {
        "name": "Facts.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "SFTP.Configure",
        "shortDescription": "Set host, port, username, password to use for file upload",
        "example": "SFTP.Configure('127.0.0.1', 22, 'aUser', 'somePassword');",
        "returnType": ""
    },
    {
        "name": "SFTP.UploadString",
        "shortDescription": "Uploads provided string to path",
        "example": "SFTP.UploadString('hello', 'hello.txt');",
        "returnType": ""
    },
    {
        "name": "SFTP.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "MotivIO.LoadExternalScript",
        "shortDescription": "Get an external script as a string, by GUID",
        "example": "MotivIO.LoadExternalScript('abcd-1234-5678');",
        "returnType": ""
    },
    {
        "name": "MotivIO.jsonParse",
        "shortDescription": "Parse a valid JSON string and return a table",
        "example": "MotivIO.jsonParse('abcd-1234-5678');",
        "returnType": ""
    },
    {
        "name": "MotivIO.Input",
        "shortDescription": "",
        "example": "public Void Input(String value)",
        "returnType": ""
    },
    {
        "name": "MotivIO.Output",
        "shortDescription": "",
        "example": "public String Output()",
        "returnType": ""
    },
    {
        "name": "MotivIO.GetScriptById",
        "shortDescription": "",
        "example": "public Task`1 GetScriptById(String id)",
        "returnType": ""
    },
    {
        "name": "MotivIO.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "Requests.SendRequest",
        "shortDescription": "Send some stuff",
        "example": "Requests.SendRequest('abcd-1234-5678');",
        "returnType": ""
    },
    {
        "name": "Requests.SendFileRequest",
        "shortDescription": "",
        "example": "public static HTTPResponse SendFileRequest(HTTPRequest requestData, String format)",
        "returnType": ""
    },
    {
        "name": "Requests.SendRequestAttachData",
        "shortDescription": "",
        "example": "public static HTTPResponse SendRequestAttachData(HTTPRequest requestData, String fileData, String fileName, String format)",
        "returnType": ""
    },
    {
        "name": "Requests.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "Database.RunQuery",
        "shortDescription": "Run a query on a database",
        "example": "QueryResult RunQuery(DatabaseConnection requestData, string queryString)",
        "returnType": ""
    },
    {
        "name": "Database.Run_Query_MSSQL",
        "shortDescription": "",
        "example": "public QueryResult Run_Query_MSSQL(DatabaseConnection requestData, String queryString)",
        "returnType": ""
    },
    {
        "name": "Database.Run_Query_MySQL",
        "shortDescription": "",
        "example": "public QueryResult Run_Query_MySQL(DatabaseConnection requestData, String queryString)",
        "returnType": ""
    },
    {
        "name": "Database.Run_Query_Clickhouse",
        "shortDescription": "",
        "example": "public QueryResult Run_Query_Clickhouse(DatabaseConnection requestData, String queryString)",
        "returnType": ""
    },
    {
        "name": "Database.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "MQTT.Publish",
        "shortDescription": "Send some stuff",
        "example": "MQTT.Publish('abcd-1234-5678');",
        "returnType": ""
    },
    {
        "name": "MQTT.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "Image.SetPngOpacity",
        "shortDescription": "",
        "example": "public static ImageResponse SetPngOpacity(Byte[] data, Single opacity)",
        "returnType": ""
    },
    {
        "name": "Image.ColorPixel",
        "shortDescription": "",
        "example": "public static ImageResponse ColorPixel(Byte[] data, List`1 pixel_color_list)",
        "returnType": ""
    },
    {
        "name": "Image.CreateImage",
        "shortDescription": "",
        "example": "public static ImageResponse CreateImage(Int32 x, Int32 y, Rgba32 background, ImageFormat img_format)",
        "returnType": ""
    },
    {
        "name": "Image.GaussianBlur",
        "shortDescription": "",
        "example": "public static ImageResponse GaussianBlur(Byte[] data, Single sigma, Single x, Single y, Single x2, Single y2)",
        "returnType": ""
    },
    {
        "name": "Image.CombineGifFrames",
        "shortDescription": "",
        "example": "public static ImageResponse CombineGifFrames(List`1 img_list, Int32 width, Int32 height)",
        "returnType": ""
    },
    {
        "name": "Image.Overlay",
        "shortDescription": "",
        "example": "public static ImageResponse Overlay(Byte[] base_img, Byte[] overlay, Single x, Single y, GraphicsOptions graphics_options)",
        "returnType": ""
    },
    {
        "name": "Image.Flip",
        "shortDescription": "",
        "example": "public static ImageResponse Flip(Byte[] data, RotateMode rotateMode, FlipMode flipMode)",
        "returnType": ""
    },
    {
        "name": "Image.Rotate",
        "shortDescription": "",
        "example": "public static ImageResponse Rotate(Byte[] data, Single degrees)",
        "returnType": ""
    },
    {
        "name": "Image.Crop",
        "shortDescription": "",
        "example": "public static ImageResponse Crop(Byte[] data, Single x, Single y, Single x2, Single y2)",
        "returnType": ""
    },
    {
        "name": "Image.Resize",
        "shortDescription": "",
        "example": "public static ImageResponse Resize(Byte[] data, Single new_width, Single new_height)",
        "returnType": ""
    },
    {
        "name": "Image.ConvertFormat",
        "shortDescription": "Convert Image Format",
        "example": "ConvertFormat(img_byte_array, JPG);",
        "returnType": ""
    },
    {
        "name": "Image.ToGrayscale",
        "shortDescription": "Convert Image to grayscale",
        "example": "ToGrayscale(img_byte_array);",
        "returnType": ""
    },
    {
        "name": "Image.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "Convert.obj_to_json_string",
        "shortDescription": "",
        "example": "public static String obj_to_json_string(Script script, Object input)",
        "returnType": ""
    },
    {
        "name": "Convert.json_parse",
        "shortDescription": "",
        "example": "public static Dictionary`2 json_parse(Script script, String input)",
        "returnType": ""
    },
    {
        "name": "Convert.base64_decode",
        "shortDescription": "",
        "example": "public static Byte[] base64_decode(String input)",
        "returnType": ""
    },
    {
        "name": "Convert.base64_encode",
        "shortDescription": "",
        "example": "public static String base64_encode(Byte[] input)",
        "returnType": ""
    },
    {
        "name": "Convert.string_from_UTF8_byte_array",
        "shortDescription": "",
        "example": "public static String string_from_UTF8_byte_array(Byte[] input)",
        "returnType": ""
    },
    {
        "name": "Convert.csv_to_table",
        "shortDescription": "",
        "example": "public static List`1 csv_to_table(String input, Boolean is_base64_encoded, String line_delim, String value_delim)",
        "returnType": ""
    },
    {
        "name": "Convert.table_to_csv",
        "shortDescription": "",
        "example": "public static String table_to_csv(List`1 input, Boolean to_base64_encoded, String line_delim, String value_delim)",
        "returnType": ""
    },
    {
        "name": "Convert.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "FTPS.Upload",
        "shortDescription": "Send some stuff",
        "example": "FTPS.Upload('abcd-1234-5678');",
        "returnType": ""
    },
    {
        "name": "FTPS.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "EmailService.SendEmail",
        "shortDescription": "Send an email",
        "example": "EmailService.SendEmail('abcd-1234-5678');",
        "returnType": ""
    },
    {
        "name": "EmailService.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "TOTP.GenerateTOTP",
        "shortDescription": "Generates The one time password using IMEI",
        "example": "GenerateTOTP(<imei>)",
        "returnType": ""
    },
    {
        "name": "TOTP.GenerateTOTPLong",
        "shortDescription": "Generates The one time password using IMEI, customerCode, and security level",
        "example": "GenerateTOTP(<imei>, <customerCode>, <securityLevel>)",
        "returnType": ""
    },
    {
        "name": "TOTP.GenerateTOTPAdvanced",
        "shortDescription": "Generates The one time password using a secret key",
        "example": "GenerateTOTP(<secretKey>)",
        "returnType": ""
    },
    {
        "name": "TOTP.GetTimeLeftForTOTP",
        "shortDescription": "Gets the time left for a TOTP password",
        "example": "GetTimeLeftForTOTP(<imei>)",
        "returnType": ""
    },
    {
        "name": "TOTP.GetTimeLeftForTOTP",
        "shortDescription": "",
        "example": "public static Int32 GetTimeLeftForTOTP(String imei, String customerCode, String securityLevel)",
        "returnType": ""
    },
    {
        "name": "TOTP.GetTimeLeftForTOTP",
        "shortDescription": "",
        "example": "public static Int32 GetTimeLeftForTOTP(Byte[] secretKey)",
        "returnType": ""
    },
    {
        "name": "TOTP.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "Global.SetResponse",
        "shortDescription": "",
        "example": "public Boolean SetResponse(String response, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.GetUnixTime",
        "shortDescription": "",
        "example": "public UInt32 GetUnixTime(LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.UintToFloat",
        "shortDescription": "",
        "example": "public Single UintToFloat(UInt32 input)",
        "returnType": ""
    },
    {
        "name": "Global.GenerateFactPoint",
        "shortDescription": "",
        "example": "public Boolean GenerateFactPoint(Int32 factTypeId, Single value, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.GenerateFactPointWithChannel",
        "shortDescription": "",
        "example": "public Boolean GenerateFactPointWithChannel(Int32 factTypeId, Int32 channel, Single value, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.GenerateFactPointWithChannelTimestamp",
        "shortDescription": "",
        "example": "public Boolean GenerateFactPointWithChannelTimestamp(Int32 factTypeId, Single value, UInt32 timestamp, Int32 channel, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.FACT",
        "shortDescription": "",
        "example": "public Boolean FACT(Int32 factTypeId, Single value, UInt32 timestamp, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.FACT_C",
        "shortDescription": "",
        "example": "public Boolean FACT_C(Int32 factTypeId, Single value, UInt32 timestamp, Int32 channel, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.FACT_PERMIT_OUT_OF_RANGE",
        "shortDescription": "",
        "example": "public Boolean FACT_PERMIT_OUT_OF_RANGE(Int32 factTypeId, Single value, UInt32 timestamp, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.FACT_PERMIT_OUT_OF_RANGE_C",
        "shortDescription": "",
        "example": "public Boolean FACT_PERMIT_OUT_OF_RANGE_C(Int32 factTypeId, Single value, UInt32 timestamp, Int32 channel, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.FACT_HARD_FAIL",
        "shortDescription": "",
        "example": "public Boolean FACT_HARD_FAIL(Int32 factTypeId, Single value, UInt32 timestamp, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.FACT_HARD_FAIL_C",
        "shortDescription": "",
        "example": "public Boolean FACT_HARD_FAIL_C(Int32 factTypeId, Single value, UInt32 timestamp, Int32 channel, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.GenerateFactPointWithOffset",
        "shortDescription": "",
        "example": "public Boolean GenerateFactPointWithOffset(Int32 factTypeId, Single value, Int32 offset, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.GenerateFactPointWithChannelOffset",
        "shortDescription": "",
        "example": "public Boolean GenerateFactPointWithChannelOffset(Int32 factTypeId, Int32 channel, Single value, Int32 offset, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.ParseGsm",
        "shortDescription": "",
        "example": "public GsmMessage ParseGsm(LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.FactIndex",
        "shortDescription": "",
        "example": "public Int32 FactIndex(String factName)",
        "returnType": ""
    },
    {
        "name": "Global.GetUInt32",
        "shortDescription": "",
        "example": "public UInt32 GetUInt32(Int32 index, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.GetUInt32",
        "shortDescription": "",
        "example": "public UInt32 GetUInt32(Byte[] array, Int32 index)",
        "returnType": ""
    },
    {
        "name": "Global.GetUInt32LE",
        "shortDescription": "",
        "example": "public UInt32 GetUInt32LE(Int32 index, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.GetUInt32LE",
        "shortDescription": "",
        "example": "public UInt32 GetUInt32LE(Byte[] array, Int32 index)",
        "returnType": ""
    },
    {
        "name": "Global.GetUInt16",
        "shortDescription": "",
        "example": "public UInt32 GetUInt16(Int32 index, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.GetUInt16",
        "shortDescription": "",
        "example": "public UInt32 GetUInt16(Byte[] array, Int32 index)",
        "returnType": ""
    },
    {
        "name": "Global.GetUInt16LE",
        "shortDescription": "",
        "example": "public UInt32 GetUInt16LE(Int32 index, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.GetUInt16LE",
        "shortDescription": "",
        "example": "public UInt32 GetUInt16LE(Byte[] array, Int32 index)",
        "returnType": ""
    },
    {
        "name": "Global.GetInt32LE",
        "shortDescription": "",
        "example": "public Int32 GetInt32LE(Int32 index, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.GetInt32LE",
        "shortDescription": "",
        "example": "public Int32 GetInt32LE(Byte[] array, Int32 index)",
        "returnType": ""
    },
    {
        "name": "Global.GetInt16LE",
        "shortDescription": "",
        "example": "public Int16 GetInt16LE(Int32 index, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.GetInt16LE",
        "shortDescription": "",
        "example": "public Int16 GetInt16LE(Byte[] array, Int32 index)",
        "returnType": ""
    },
    {
        "name": "Global.GetInt16",
        "shortDescription": "",
        "example": "public Int16 GetInt16(Int32 index, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.GetInt16",
        "shortDescription": "",
        "example": "public Int16 GetInt16(Byte[] array, Int32 index)",
        "returnType": ""
    },
    {
        "name": "Global.CRC16Modbus",
        "shortDescription": "",
        "example": "public UInt16 CRC16Modbus(Byte[] array)",
        "returnType": ""
    },
    {
        "name": "Global.GetScriptById",
        "shortDescription": "",
        "example": "public Task`1 GetScriptById(String id)",
        "returnType": ""
    },
    {
        "name": "Global.GetDevIdKeyFromNetworkId",
        "shortDescription": "",
        "example": "public List`1 GetDevIdKeyFromNetworkId(UInt64[] network_ids)",
        "returnType": ""
    },
    {
        "name": "Global.LoadExternalScript",
        "shortDescription": "",
        "example": "public String LoadExternalScript(String id)",
        "returnType": ""
    },
    {
        "name": "Global.SetNeedsReset",
        "shortDescription": "",
        "example": "public Boolean SetNeedsReset(LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.ClearNeedsReset",
        "shortDescription": "",
        "example": "public Boolean ClearNeedsReset(LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.AddWifiMAC",
        "shortDescription": "",
        "example": "public Boolean AddWifiMAC(Int32 index, Int32 wifiLatIndex, Int32 wifiLonIndex, Int32 wifiRadiusIndex, LuaRunContext context)",
        "returnType": ""
    },
    {
        "name": "Global.CheckVal",
        "shortDescription": "",
        "example": "public Boolean CheckVal(Single value, Single min, Single max)",
        "returnType": ""
    },
    {
        "name": "Global.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    },
    {
        "name": "Modbus.HexStringToByteArray",
        "shortDescription": "Convert a hexadecimal string to a table of numbers between 0-255.",
        "example": "public byte[] HexStringToByteArray(string hexInput)",
        "returnType": ""
    },
    {
        "name": "Modbus.AsciiEncodedHexToHexString",
        "shortDescription": "",
        "example": "public string AsciiEncodedHexToHexString(string asciiEncodedHexInput)",
        "returnType": ""
    },
    {
        "name": "Modbus.ParseBasicPDUResponseHexString",
        "shortDescription": "Return table of PDU response contents",
        "example": "public Dictionary<dynamic, dynamic> ParseBasicPDUResponseHexString(string pduHexString, string modbusType)",
        "returnType": ""
    },
    {
        "name": "Modbus.ParseBasicPDURequestHexString",
        "shortDescription": "Return table of PDU request contents.",
        "example": "public Dictionary<dynamic, dynamic> ParseBasicPDURequestHexString(string pduHexString, string modbusType)",
        "returnType": ""
    },
    {
        "name": "Modbus.ParseBasicADUResponseHexString",
        "shortDescription": "Return table of ADU response contents.",
        "example": "public Dictionary<dynamic, dynamic> ParseBasicADUResponseHexString(string aduHexString, string modbusType)",
        "returnType": ""
    },
    {
        "name": "Modbus.ParseBasicADURequestHexString",
        "shortDescription": "Return table of ADU request contents.",
        "example": "public Dictionary<dynamic, dynamic> ParseBasicADURequestHexString(string aduHexString, string modbusType)",
        "returnType": ""
    },
    {
        "name": "Modbus.AddSlaveToNetwork",
        "shortDescription": "Add slave device to network map with optional parseMap.",
        "example": "public Dictionary<dynamic, dynamic> AddSlaveToNetwork(Dictionary<dynamic, dynamic> networkMap, string bus, int address, string name, string description, dynamic registerMap, dynamic parseMap=null)",
        "returnType": ""
    },
    {
        "name": "Modbus.FindRegisterMapForSlave",
        "shortDescription": "",
        "example": "public string FindRegisterMapForSlave(string networkConfig, string bus, int slaveAddress)",
        "returnType": ""
    },
    {
        "name": "Modbus.FindRegistersInRange",
        "shortDescription": "",
        "example": "public string FindRegistersInRange(string addressMapJson, int startAddress, int endAddress, int bytes, int functionCode)",
        "returnType": ""
    },
    {
        "name": "Modbus.FindSlaveRegMapMatch",
        "shortDescription": "",
        "example": "public string FindSlaveRegMapMatch(string networkConfigJson, string bus, string requestObjectJson, string responseString, string modbusType)",
        "returnType": ""
    },
    {
        "name": "Modbus.ParseResponse",
        "shortDescription": "Get requested registers",
        "example": "public string ParseResponse(string networkConfigJson, string bus, string requestString, string responseString, string modbusType, bool calcFinal=false)",
        "returnType": ""
    },
    {
        "name": "Modbus.GetType",
        "shortDescription": "",
        "example": "public Type GetType()",
        "returnType": ""
    }
]