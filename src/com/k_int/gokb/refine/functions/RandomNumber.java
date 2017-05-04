package com.k_int.gokb.refine.functions;

import java.util.Properties;

import java.util.concurrent.ThreadLocalRandom;

import org.json.JSONException;
import org.json.JSONWriter;

import com.google.refine.expr.EvalError;
import com.google.refine.grel.ControlFunctionRegistry;
import com.google.refine.grel.Function;

public class RandomNumber implements Function {
    
    @Override
    public Object call(Properties bindings, Object[] args) {
        if (args.length == 2 && args[0] != null && args[0] instanceof Number
                && args[1] != null && args[1] instanceof Number && ((Number) args[0]).intValue()<((Number) args[1]).intValue()) {
            int randomNum = ThreadLocalRandom.current().nextInt(((Number) args[0]).intValue(), ((Number) args[1]).intValue()+1);
            return randomNum;
        }
        return new EvalError(ControlFunctionRegistry.getFunctionName(this) + " expects two numbers, the first must be less than the second");
    }

    
    @Override
    public void write(JSONWriter writer, Properties options)
        throws JSONException {
    
        writer.object();
        writer.key("description"); writer.value("Returns a pseudo-random integer between the lower and upper bound (inclusive)");
        writer.key("params"); writer.value("lower bound,upper bound");
        writer.key("returns"); writer.value("number");
        writer.endObject();
    }
}