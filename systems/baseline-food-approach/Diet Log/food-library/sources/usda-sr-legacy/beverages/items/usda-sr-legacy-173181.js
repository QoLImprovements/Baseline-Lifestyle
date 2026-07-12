/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "scoop",
  "description": "Beverages",
  "id": "usda-sr-legacy-173181",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Beverages, Protein powder soy based",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 28.9,
    "energy_kcal": 388.0,
    "fat_g": 5.56,
    "fibre_g": 6.7,
    "folate_ug": 289.0,
    "iron_mg": 12.0,
    "magnesium_mg": 64.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1270.0,
    "potassium_mg": 933.0,
    "protein_g": 55.6,
    "salt_g": 1.8325,
    "sat_fat_g": 1.11,
    "sodium_mg": 733.0,
    "sugar_g": 22.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173181",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
