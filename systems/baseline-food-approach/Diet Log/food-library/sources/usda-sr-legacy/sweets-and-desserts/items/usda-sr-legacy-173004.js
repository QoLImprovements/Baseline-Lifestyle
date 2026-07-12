/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-3-t-dry-cereal-plus-1-cup-water",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173004",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 268.0,
      "key": "serving-3-t-dry-cereal-plus-1-cup-water",
      "kind": "unit",
      "label": "serving (3 T dry cereal plus 1 cup water)"
    }
  ],
  "name": "Cereals, MALT-O-MEAL, chocolate, prepared with water, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 9.22,
    "energy_kcal": 47.0,
    "fat_g": 0.1,
    "fibre_g": 0.4,
    "folate_ug": 0.0,
    "iron_mg": 5.59,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 32.0,
    "protein_g": 1.37,
    "salt_g": 0.0025,
    "sat_fat_g": 0.03,
    "sodium_mg": 1.0,
    "sugar_g": 2.17,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173004",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
