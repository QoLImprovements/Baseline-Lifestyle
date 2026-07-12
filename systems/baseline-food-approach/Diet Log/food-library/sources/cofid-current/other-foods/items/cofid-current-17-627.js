/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products, including balti, rogan josh, jalfrezi, ambient",
  "id": "cofid-current-17-627",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauces, Indian cook in, other",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 8.7,
    "energy_kcal": 67.0,
    "fat_g": 3.2,
    "fibre_g": 2.5,
    "folate_ug": 11.0,
    "iron_mg": 1.02,
    "magnesium_mg": 18.0,
    "omega3_g": 0.14,
    "phosphorus_mg": 32.0,
    "potassium_mg": 236.0,
    "protein_g": 1.4,
    "salt_g": 0.75,
    "sat_fat_g": 0.5,
    "sodium_mg": 300.0,
    "sugar_g": 6.1,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 2.34,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-627",
  "state": "Unspecified",
  "subcategory": "WC",
  "tags": [
    "other-foods",
    "unspecified",
    "wc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
