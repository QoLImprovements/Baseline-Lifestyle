/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "8 samples, 7 products",
  "id": "cofid-current-17-623",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pesto, red",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 5.9,
    "energy_kcal": 317.0,
    "fat_g": 30.6,
    "fibre_g": 3.3,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 5.0,
    "salt_g": 1.925,
    "sat_fat_g": 4.68,
    "sodium_mg": 770.0,
    "sugar_g": 5.2,
    "vitamin_a_ug": 337.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-623",
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
