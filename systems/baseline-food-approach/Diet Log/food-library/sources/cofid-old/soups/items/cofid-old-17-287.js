/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "Analysis and manufacturer's information (Heinz); assorted varieties",
  "id": "cofid-old-17-287",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, Wholesoup, canned",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 7.4,
    "energy_kcal": 41.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.6,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 120.0,
    "protein_g": 2.8,
    "salt_g": 1.05,
    "sat_fat_g": 0.0,
    "sodium_mg": 420.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-287",
  "state": "Canned",
  "subcategory": "WAC",
  "tags": [
    "canned",
    "soups",
    "wac"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
