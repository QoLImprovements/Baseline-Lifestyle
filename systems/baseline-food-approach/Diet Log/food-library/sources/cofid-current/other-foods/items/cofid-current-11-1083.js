/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1083",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Gulab jamen/jambu, retail",
  "nutritionPerBasis": {
    "calcium_mg": 249.0,
    "carbs_g": 43.3,
    "energy_kcal": 306.0,
    "fat_g": 12.8,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.26,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 191.0,
    "potassium_mg": 323.0,
    "protein_g": 7.2,
    "salt_g": 0.265,
    "sat_fat_g": 4.38,
    "sodium_mg": 106.0,
    "sugar_g": 38.9,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.67,
    "vitamin_k_ug": 6.39
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1083",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
