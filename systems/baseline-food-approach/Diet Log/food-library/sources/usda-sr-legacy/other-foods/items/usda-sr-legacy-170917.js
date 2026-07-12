/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "tbsp-crumbled",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-170917",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.8,
      "key": "tbsp-crumbled",
      "kind": "unit",
      "label": "tbsp, crumbled"
    },
    {
      "gramsPerUnit": 0.6,
      "key": "tsp-crumbled",
      "kind": "unit",
      "label": "tsp, crumbled"
    }
  ],
  "name": "Spices, bay leaf",
  "nutritionPerBasis": {
    "calcium_mg": 834.0,
    "carbs_g": 75.0,
    "energy_kcal": 1310.0,
    "fat_g": 8.36,
    "fibre_g": 26.3,
    "folate_ug": 180.0,
    "iron_mg": 43.0,
    "magnesium_mg": 120.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 529.0,
    "protein_g": 7.61,
    "salt_g": 0.0575,
    "sat_fat_g": 2.28,
    "sodium_mg": 23.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 309.0,
    "vitamin_c_mg": 46.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170917",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "other-foods",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
