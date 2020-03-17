/**
 * NOTE: This class is auto generated by the swagger code generator program (2.3.1).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package cz.covid.po.api.generated.controller;

import cz.covid.po.api.generated.dto.CodebookValueDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.*;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Api(value = "CodebookController", description = "the CodebookController API")
public interface CodebookControllerApi {

    Logger log = LoggerFactory.getLogger(CodebookControllerApi.class);

    default Optional<ObjectMapper> getObjectMapper() {
        return Optional.empty();
    }

    default Optional<HttpServletRequest> getRequest() {
        return Optional.empty();
    }

    default Optional<String> getAcceptHeader() {
        return getRequest().map(r -> r.getHeader("Accept"));
    }

    @ApiOperation(value = "createCodebookValue", nickname = "createCodebookValueUsingPOST", notes = "", response = CodebookValueDto.class, tags={ "codebook-controller", })
    @ApiResponses(value = { 
        @ApiResponse(code = 201, message = "Created", response = CodebookValueDto.class),
        @ApiResponse(code = 401, message = "Unauthorized"),
        @ApiResponse(code = 403, message = "Forbidden"),
        @ApiResponse(code = 404, message = "Not Found") })
    @RequestMapping(value = "/api/codebook/{codebookName}",
        produces = { "*/*" }, 
        consumes = { "application/json" },
        method = RequestMethod.POST)
    default ResponseEntity<CodebookValueDto> _createCodebookValueUsingPOST(@ApiParam(value = "codebookName",required=true, allowableValues = "\"COMORBIDITY\", \"CONSENT_TYPE\", \"GENDER\", \"NATIONALITY\", \"ORGANIZATION\", \"SYMPTOM_TYPE\", \"TEST_RESULT\", \"TEST_TYPE\"") @PathVariable("codebookName") String codebookName,@ApiParam(value = "codebookValueDto" ,required=true )  @Valid @RequestBody CodebookValueDto codebookValueDto) {
        return createCodebookValueUsingPOST(codebookName, codebookValueDto);
    }

    // Override this method
    default ResponseEntity<CodebookValueDto> createCodebookValueUsingPOST(String codebookName,CodebookValueDto codebookValueDto) {
        if(getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
            if (getAcceptHeader().get().contains("")) {
                try {
                    return new ResponseEntity<>(getObjectMapper().get().readValue("", CodebookValueDto.class), HttpStatus.NOT_IMPLEMENTED);
                } catch (IOException e) {
                    log.error("Couldn't serialize response for content type ", e);
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        } else {
            log.warn("ObjectMapper or HttpServletRequest not configured in default CodebookControllerApi interface so no example is generated");
        }
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }


    @ApiOperation(value = "deleteCodebookValue", nickname = "deleteCodebookValueUsingDELETE", notes = "", tags={ "codebook-controller", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK"),
        @ApiResponse(code = 204, message = "No Content"),
        @ApiResponse(code = 401, message = "Unauthorized"),
        @ApiResponse(code = 403, message = "Forbidden") })
    @RequestMapping(value = "/api/codebook/{codebookName}/{id}",
        produces = { "*/*" }, 
        method = RequestMethod.DELETE)
    default ResponseEntity<Void> _deleteCodebookValueUsingDELETE(@ApiParam(value = "codebookName",required=true, allowableValues = "\"COMORBIDITY\", \"CONSENT_TYPE\", \"GENDER\", \"NATIONALITY\", \"ORGANIZATION\", \"SYMPTOM_TYPE\", \"TEST_RESULT\", \"TEST_TYPE\"") @PathVariable("codebookName") String codebookName,@ApiParam(value = "id",required=true) @PathVariable("id") Long id) {
        return deleteCodebookValueUsingDELETE(codebookName, id);
    }

    // Override this method
    default ResponseEntity<Void> deleteCodebookValueUsingDELETE(String codebookName,Long id) {
        if(getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
        } else {
            log.warn("ObjectMapper or HttpServletRequest not configured in default CodebookControllerApi interface so no example is generated");
        }
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }


    @ApiOperation(value = "findCodebookValues", nickname = "findCodebookValuesUsingGET", notes = "", response = CodebookValueDto.class, tags={ "codebook-controller", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = CodebookValueDto.class),
        @ApiResponse(code = 401, message = "Unauthorized"),
        @ApiResponse(code = 403, message = "Forbidden"),
        @ApiResponse(code = 404, message = "Not Found") })
    @RequestMapping(value = "/api/codebook/{codebookName}/{id}",
        produces = { "*/*" }, 
        method = RequestMethod.GET)
    default ResponseEntity<CodebookValueDto> _findCodebookValuesUsingGET(@ApiParam(value = "codebookName",required=true, allowableValues = "\"COMORBIDITY\", \"CONSENT_TYPE\", \"GENDER\", \"NATIONALITY\", \"ORGANIZATION\", \"SYMPTOM_TYPE\", \"TEST_RESULT\", \"TEST_TYPE\"") @PathVariable("codebookName") String codebookName,@ApiParam(value = "id",required=true) @PathVariable("id") Long id) {
        return findCodebookValuesUsingGET(codebookName, id);
    }

    // Override this method
    default ResponseEntity<CodebookValueDto> findCodebookValuesUsingGET(String codebookName,Long id) {
        if(getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
            if (getAcceptHeader().get().contains("")) {
                try {
                    return new ResponseEntity<>(getObjectMapper().get().readValue("", CodebookValueDto.class), HttpStatus.NOT_IMPLEMENTED);
                } catch (IOException e) {
                    log.error("Couldn't serialize response for content type ", e);
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        } else {
            log.warn("ObjectMapper or HttpServletRequest not configured in default CodebookControllerApi interface so no example is generated");
        }
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }


    @ApiOperation(value = "getCodebookValues", nickname = "getCodebookValuesUsingGET", notes = "", response = CodebookValueDto.class, responseContainer = "List", tags={ "codebook-controller", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = CodebookValueDto.class, responseContainer = "List"),
        @ApiResponse(code = 401, message = "Unauthorized"),
        @ApiResponse(code = 403, message = "Forbidden"),
        @ApiResponse(code = 404, message = "Not Found") })
    @RequestMapping(value = "/api/codebook/{codebookName}",
        produces = { "*/*" }, 
        method = RequestMethod.GET)
    default ResponseEntity<List<CodebookValueDto>> _getCodebookValuesUsingGET(@ApiParam(value = "codebookName",required=true, allowableValues = "\"COMORBIDITY\", \"CONSENT_TYPE\", \"GENDER\", \"NATIONALITY\", \"ORGANIZATION\", \"SYMPTOM_TYPE\", \"TEST_RESULT\", \"TEST_TYPE\"") @PathVariable("codebookName") String codebookName) {
        return getCodebookValuesUsingGET(codebookName);
    }

    // Override this method
    default ResponseEntity<List<CodebookValueDto>> getCodebookValuesUsingGET(String codebookName) {
        if(getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
            if (getAcceptHeader().get().contains("")) {
                try {
                    return new ResponseEntity<>(getObjectMapper().get().readValue("", List.class), HttpStatus.NOT_IMPLEMENTED);
                } catch (IOException e) {
                    log.error("Couldn't serialize response for content type ", e);
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        } else {
            log.warn("ObjectMapper or HttpServletRequest not configured in default CodebookControllerApi interface so no example is generated");
        }
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }


    @ApiOperation(value = "updateCodebookValue", nickname = "updateCodebookValueUsingPUT", notes = "", response = CodebookValueDto.class, tags={ "codebook-controller", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = CodebookValueDto.class),
        @ApiResponse(code = 201, message = "Created"),
        @ApiResponse(code = 401, message = "Unauthorized"),
        @ApiResponse(code = 403, message = "Forbidden"),
        @ApiResponse(code = 404, message = "Not Found") })
    @RequestMapping(value = "/api/codebook/{codebookName}/{id}",
        produces = { "*/*" }, 
        consumes = { "application/json" },
        method = RequestMethod.PUT)
    default ResponseEntity<CodebookValueDto> _updateCodebookValueUsingPUT(@ApiParam(value = "codebookName",required=true, allowableValues = "\"COMORBIDITY\", \"CONSENT_TYPE\", \"GENDER\", \"NATIONALITY\", \"ORGANIZATION\", \"SYMPTOM_TYPE\", \"TEST_RESULT\", \"TEST_TYPE\"") @PathVariable("codebookName") String codebookName,@ApiParam(value = "codebookValueDto" ,required=true )  @Valid @RequestBody CodebookValueDto codebookValueDto,@ApiParam(value = "id",required=true) @PathVariable("id") Long id) {
        return updateCodebookValueUsingPUT(codebookName, codebookValueDto, id);
    }

    // Override this method
    default ResponseEntity<CodebookValueDto> updateCodebookValueUsingPUT(String codebookName,CodebookValueDto codebookValueDto,Long id) {
        if(getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
            if (getAcceptHeader().get().contains("")) {
                try {
                    return new ResponseEntity<>(getObjectMapper().get().readValue("", CodebookValueDto.class), HttpStatus.NOT_IMPLEMENTED);
                } catch (IOException e) {
                    log.error("Couldn't serialize response for content type ", e);
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        } else {
            log.warn("ObjectMapper or HttpServletRequest not configured in default CodebookControllerApi interface so no example is generated");
        }
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }

}
