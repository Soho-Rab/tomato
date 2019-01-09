using System.Runtime.Serialization;

namespace DotBPE.Gateway.Swagger.Generator
{
    
    [DataContract]
    public class SwaggerApiInfo
    {
        [DataMember(Name = "version")]
        public string Version { get; set; } = "1.0.0";
        [DataMember(Name = "title")]
        public string Title { get; set; } = "DotBPE Api Document";
        [DataMember(Name = "description")]
        public string Description { get; set; } = "DotBPE Api Document";

        [DataMember(Name = "contact")]
        public SwaggerApiContactInfo Contact { get; set; }

        [DataMember(Name = "termsOfService")]
        public string TermsOfService { get; set; }

    }
}
