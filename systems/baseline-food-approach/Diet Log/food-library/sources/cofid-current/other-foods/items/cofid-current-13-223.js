/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-223",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chard, Swiss, raw",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 2.9,
    "energy_kcal": 19.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 165.0,
    "iron_mg": 1.8,
    "magnesium_mg": 81.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 380.0,
    "protein_g": 1.8,
    "salt_g": 0.525,
    "sat_fat_g": 0.0,
    "sodium_mg": 210.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 766.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-223",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
