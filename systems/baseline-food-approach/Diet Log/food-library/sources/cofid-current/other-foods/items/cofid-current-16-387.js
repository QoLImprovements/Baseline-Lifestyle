/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "9 samples, 9 products, warm-water prawns (Panaeus vannamei), frozen and chilled",
  "id": "cofid-current-16-387",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Prawns, king, raw",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 0.0,
    "energy_kcal": 77.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.7,
    "magnesium_mg": 28.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 155.0,
    "potassium_mg": 126.0,
    "protein_g": 17.6,
    "salt_g": 0.5375,
    "sat_fat_g": 0.17,
    "sodium_mg": 215.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.8,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-387",
  "state": "Raw",
  "subcategory": "JK",
  "tags": [
    "jk",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
