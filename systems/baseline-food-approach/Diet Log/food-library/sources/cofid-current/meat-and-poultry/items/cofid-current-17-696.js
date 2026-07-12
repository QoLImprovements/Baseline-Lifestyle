/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "7 cans of the same brand",
  "id": "cofid-current-17-696",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, chicken, cream of, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 6.0,
    "energy_kcal": 85.0,
    "fat_g": 5.8,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.5,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 62.0,
    "protein_g": 2.6,
    "salt_g": 1.225,
    "sat_fat_g": 0.8,
    "sodium_mg": 490.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 103.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-696",
  "state": "Canned",
  "subcategory": "WAC",
  "tags": [
    "canned",
    "meat-and-poultry",
    "wac"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
