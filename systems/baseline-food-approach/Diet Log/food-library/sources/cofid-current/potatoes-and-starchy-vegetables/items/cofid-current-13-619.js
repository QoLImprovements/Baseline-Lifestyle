/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "LGC; 10 samples, 3 brands. Deep fried and roasted",
  "id": "cofid-current-13-619",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potatoes, new, frozen, `roast' in corn oil",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 23.4,
    "energy_kcal": 157.0,
    "fat_g": 6.6,
    "fibre_g": 3.0,
    "folate_ug": 25.0,
    "iron_mg": 0.6,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 460.0,
    "protein_g": 2.5,
    "salt_g": 0.25,
    "sat_fat_g": 0.8,
    "sodium_mg": 100.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-619",
  "state": "Frozen",
  "subcategory": "DAE",
  "tags": [
    "dae",
    "frozen",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
