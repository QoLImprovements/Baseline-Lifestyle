/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170296",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Fast foods, fish sandwich, with tartar sauce",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 26.7,
    "energy_kcal": 1070.0,
    "fat_g": 12.4,
    "fibre_g": 1.0,
    "folate_ug": 46.0,
    "iron_mg": 1.5,
    "magnesium_mg": 25.0,
    "omega3_g": 0.585,
    "phosphorus_mg": 116.0,
    "potassium_mg": 206.0,
    "protein_g": 10.3,
    "salt_g": 1.505,
    "sat_fat_g": 1.95,
    "sodium_mg": 602.0,
    "sugar_g": 3.53,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 13.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170296",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
