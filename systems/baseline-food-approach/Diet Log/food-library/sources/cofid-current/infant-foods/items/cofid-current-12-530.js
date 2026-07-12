/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "g",
  "description": "8 samples, 4 brands, no fruit pieces",
  "id": "cofid-current-12-530",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt, whole milk, infant, fruit flavour",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 11.1,
    "energy_kcal": 90.0,
    "fat_g": 3.7,
    "fibre_g": 0.2,
    "folate_ug": 10.0,
    "iron_mg": 0.21,
    "magnesium_mg": 12.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 114.0,
    "potassium_mg": 176.0,
    "protein_g": 3.8,
    "salt_g": 0.115,
    "sat_fat_g": 2.45,
    "sodium_mg": 46.0,
    "sugar_g": 10.4,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-530",
  "state": "Unspecified",
  "subcategory": "BN",
  "tags": [
    "bn",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
