/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving",
  "description": "Sweets",
  "id": "usda-sr-legacy-169900",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Frozen novelties, ice cream type, sundae, prepackaged",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 29.6,
    "energy_kcal": 190.0,
    "fat_g": 6.0,
    "fibre_g": 0.3,
    "folate_ug": 5.0,
    "iron_mg": 0.25,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 131.0,
    "potassium_mg": 211.0,
    "protein_g": 4.3,
    "salt_g": 0.2375,
    "sat_fat_g": 3.09,
    "sodium_mg": 95.0,
    "sugar_g": 20.7,
    "vitamin_a_ug": 131.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169900",
  "state": "Frozen",
  "subcategory": "Sweets",
  "tags": [
    "frozen",
    "milk-dairy-and-eggs",
    "sweets"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
