/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, 6 products, frozen and chilled",
  "id": "cofid-current-16-403",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Plaice, in breadcrumbs, baked",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 21.5,
    "energy_kcal": 243.0,
    "fat_g": 11.6,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 0.77,
    "magnesium_mg": 22.0,
    "omega3_g": 0.76,
    "phosphorus_mg": 126.0,
    "potassium_mg": 178.0,
    "protein_g": 14.4,
    "salt_g": 0.6875,
    "sat_fat_g": 1.23,
    "sodium_mg": 275.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.32,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-403",
  "state": "Baked",
  "subcategory": "JA",
  "tags": [
    "baked",
    "ja",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
