/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Chicken flavour, manufacturer's data",
  "id": "cofid-current-17-730",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Complan powder, savoury",
  "nutritionPerBasis": {
    "calcium_mg": 420.0,
    "carbs_g": 62.5,
    "energy_kcal": 439.0,
    "fat_g": 15.6,
    "fibre_g": 0.2,
    "folate_ug": 180.0,
    "iron_mg": 7.4,
    "magnesium_mg": 96.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 490.0,
    "potassium_mg": 730.0,
    "protein_g": 16.1,
    "salt_g": 2.25,
    "sat_fat_g": 6.62,
    "sodium_mg": 900.0,
    "sugar_g": 6.2,
    "vitamin_a_ug": 440.0,
    "vitamin_c_mg": 70.0,
    "vitamin_e_mg": 11.0,
    "vitamin_k_ug": 67.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-730",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "other-foods",
    "paa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
