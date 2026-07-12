/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "7 samples, 6 products, frozen and chilled",
  "id": "cofid-current-16-379",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lemon sole, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 73.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.12,
    "magnesium_mg": 26.0,
    "omega3_g": 0.14,
    "phosphorus_mg": 124.0,
    "potassium_mg": 177.0,
    "protein_g": 16.7,
    "salt_g": 0.2875,
    "sat_fat_g": 0.16,
    "sodium_mg": 115.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-379",
  "state": "Raw",
  "subcategory": "JA",
  "tags": [
    "fruit",
    "ja",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
