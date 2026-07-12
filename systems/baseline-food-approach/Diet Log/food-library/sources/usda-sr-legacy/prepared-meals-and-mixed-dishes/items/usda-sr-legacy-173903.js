/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "3-tbsp-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173903",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "3-tbsp-1-nlea-serving",
      "kind": "unit",
      "label": "3 tbsp (1 NLEA serving)"
    }
  ],
  "name": "Cereals, MALT-O-MEAL, original, plain, dry",
  "nutritionPerBasis": {
    "calcium_mg": 286.0,
    "carbs_g": 77.2,
    "energy_kcal": 1530.0,
    "fat_g": 0.7,
    "fibre_g": 2.1,
    "folate_ug": 1140.0,
    "iron_mg": 30.9,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 157.0,
    "potassium_mg": 100.0,
    "protein_g": 11.8,
    "salt_g": 0.0,
    "sat_fat_g": 0.08,
    "sodium_mg": 0.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173903",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
