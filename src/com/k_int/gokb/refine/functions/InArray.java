package com.k_int.gokb.refine.functions;

import java.util.concurrent.ThreadLocalRandom;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Properties;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONWriter;

import com.google.refine.expr.EvalError;
import com.google.refine.grel.ControlFunctionRegistry;
import com.google.refine.grel.Function;
import com.google.refine.util.JSONUtilities;

public class InArray implements Function {

    @Override
    @SuppressWarnings("unchecked")
    public Object call(Properties bindings, Object[] args) {
        if (args.length == 2) {
            Object v = args[0];
            Object s = args[1];
            
            if (v != null && s != null && s instanceof String) {
                if (v.getClass().isArray()) {
                    Object[] a = (Object[]) v;
                    Object[] r = a.clone();
                    
                    return Arrays.asList(r).contains(s);
                    
                } else if (v instanceof JSONArray) {
                    try {
                        Object[] r = JSONUtilities.toArray((JSONArray) v);
                        
                        return Arrays.asList(r).contains(s);

                    } catch (JSONException e) {
                        return new EvalError(ControlFunctionRegistry.getFunctionName(this) +
                                " fails to process a JSON array: " + e.getMessage());
                    }
                } else if (v instanceof List<?>) {
                    List<? extends Comparable<Object>> a = (List<? extends Comparable<Object>>) v;
                    return a.contains(s);
                }
            }
        }
        return new EvalError(ControlFunctionRegistry.getFunctionName(this) + " expects an array");
    }

    @Override
    public void write(JSONWriter writer, Properties options)
        throws JSONException {
    
        writer.object();
        writer.key("description"); writer.value("Checks if array a contains string s");
        writer.key("params"); writer.value("array a, string s");
        writer.key("returns"); writer.value("boolean");
        writer.endObject();
    }
}
