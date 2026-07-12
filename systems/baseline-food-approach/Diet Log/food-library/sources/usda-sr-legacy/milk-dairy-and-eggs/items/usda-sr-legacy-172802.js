/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "wrapper-eggroll-7-square",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172802",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "wrapper-eggroll-7-square",
      "kind": "unit",
      "label": "wrapper, eggroll (7\" square)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "wrapper-wonton-3-1-2-square",
      "kind": "unit",
      "label": "wrapper, wonton (3-1/2\" square)"
    }
  ],
  "name": "Wonton wrappers (includes egg roll wrappers)",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 57.9,
    "energy_kcal": 1220.0,
    "fat_g": 1.5,
    "fibre_g": 1.8,
    "folate_ug": 86.0,
    "iron_mg": 3.36,
    "magnesium_mg": 20.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 81.0,
    "potassium_mg": 82.0,
    "protein_g": 9.8,
    "salt_g": 1.43,
    "sat_fat_g": 0.263,
    "sodium_mg": 572.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172802",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
