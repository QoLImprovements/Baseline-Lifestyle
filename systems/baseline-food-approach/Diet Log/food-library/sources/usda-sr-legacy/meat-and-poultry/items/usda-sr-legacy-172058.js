/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item-6-1-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172058",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 174.0,
      "key": "item-6-1-oz",
      "kind": "unit",
      "label": "item 6.1 oz"
    }
  ],
  "name": "Fast foods, griddle cake sandwich, egg, cheese, and bacon",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 26.2,
    "energy_kcal": 1140.0,
    "fat_g": 13.2,
    "fibre_g": 0.8,
    "folate_ug": 61.0,
    "iron_mg": 1.65,
    "magnesium_mg": 21.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 184.0,
    "potassium_mg": 158.0,
    "protein_g": 12.0,
    "salt_g": 1.795,
    "sat_fat_g": 4.12,
    "sodium_mg": 718.0,
    "sugar_g": 9.56,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172058",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
