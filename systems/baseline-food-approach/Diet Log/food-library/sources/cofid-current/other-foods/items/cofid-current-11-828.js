/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products",
  "id": "cofid-current-11-828",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Iced buns, retail",
  "nutritionPerBasis": {
    "calcium_mg": 294.0,
    "carbs_g": 60.8,
    "energy_kcal": 322.0,
    "fat_g": 7.8,
    "fibre_g": 2.5,
    "folate_ug": 22.0,
    "iron_mg": 1.62,
    "magnesium_mg": 18.0,
    "omega3_g": 0.26,
    "phosphorus_mg": 96.0,
    "potassium_mg": 130.0,
    "protein_g": 6.0,
    "salt_g": 0.57,
    "sat_fat_g": 3.62,
    "sodium_mg": 228.0,
    "sugar_g": 25.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-828",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
