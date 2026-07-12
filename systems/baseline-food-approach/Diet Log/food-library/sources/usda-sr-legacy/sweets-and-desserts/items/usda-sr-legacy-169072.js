/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-packet-sugar-twin",
  "description": "Sweets",
  "id": "usda-sr-legacy-169072",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.8,
      "key": "serving-1-packet-sugar-twin",
      "kind": "unit",
      "label": "serving 1 packet SUGAR TWIN"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "serving-1-packet",
      "kind": "unit",
      "label": "serving 1 packet"
    }
  ],
  "name": "Sweeteners, tabletop, saccharin (sodium saccharin)",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 89.1,
    "energy_kcal": 1510.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.04,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 4.0,
    "protein_g": 0.94,
    "salt_g": 1.07,
    "sat_fat_g": 0.0,
    "sodium_mg": 428.0,
    "sugar_g": 85.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169072",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
