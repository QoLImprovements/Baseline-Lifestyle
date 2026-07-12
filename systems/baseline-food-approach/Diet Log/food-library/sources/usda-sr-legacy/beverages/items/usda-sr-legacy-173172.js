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
  "id": "usda-sr-legacy-173172",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Beverages, UNILEVER, SLIMFAST Shake Mix, powder, 3-2-1 Plan",
  "nutritionPerBasis": {
    "calcium_mg": 364.0,
    "carbs_g": 73.9,
    "energy_kcal": 1880.0,
    "fat_g": 13.3,
    "fibre_g": 18.1,
    "folate_ug": 385.0,
    "iron_mg": 0.68,
    "magnesium_mg": 385.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 385.0,
    "potassium_mg": 247.0,
    "protein_g": 8.13,
    "salt_g": 1.18,
    "sat_fat_g": 1.45,
    "sodium_mg": 472.0,
    "sugar_g": 38.0,
    "vitamin_a_ug": 1030.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 51.9,
    "vitamin_k_ug": 96.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173172",
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
