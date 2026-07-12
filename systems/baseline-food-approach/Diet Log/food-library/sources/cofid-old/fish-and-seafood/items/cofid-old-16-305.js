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
  "id": "cofid-old-16-305",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Seafood pasta, retail",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 7.6,
    "energy_kcal": 110.0,
    "fat_g": 4.8,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.4,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 190.0,
    "protein_g": 8.9,
    "salt_g": 0.425,
    "sat_fat_g": 2.8,
    "sodium_mg": 170.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "16-305",
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
