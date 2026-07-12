/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from manufacturers' proportions",
  "id": "cofid-current-16-453",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmon en croute, retail",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 18.0,
    "energy_kcal": 288.0,
    "fat_g": 19.1,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.6,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 200.0,
    "protein_g": 11.8,
    "salt_g": 0.475,
    "sat_fat_g": 0.0,
    "sodium_mg": 190.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-453",
  "state": "Unspecified",
  "subcategory": "JR",
  "tags": [
    "fish-and-seafood",
    "jr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
