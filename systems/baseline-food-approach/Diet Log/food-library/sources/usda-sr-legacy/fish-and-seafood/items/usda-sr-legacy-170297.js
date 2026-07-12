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
  "id": "usda-sr-legacy-170297",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Fast foods, fish sandwich, with tartar sauce and cheese",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 26.4,
    "energy_kcal": 279.0,
    "fat_g": 14.6,
    "fibre_g": 0.8,
    "folate_ug": 44.0,
    "iron_mg": 1.56,
    "magnesium_mg": 27.0,
    "omega3_g": 0.71,
    "phosphorus_mg": 137.0,
    "potassium_mg": 220.0,
    "protein_g": 11.3,
    "salt_g": 1.085,
    "sat_fat_g": 2.83,
    "sodium_mg": 434.0,
    "sugar_g": 3.67,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 7.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170297",
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
