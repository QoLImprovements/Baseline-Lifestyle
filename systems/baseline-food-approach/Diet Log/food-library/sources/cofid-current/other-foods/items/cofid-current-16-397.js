/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "7 samples, 7 products, frozen and chilled",
  "id": "cofid-current-16-397",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kippers, flesh only, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 0.0,
    "energy_kcal": 245.0,
    "fat_g": 17.6,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.51,
    "magnesium_mg": 47.0,
    "omega3_g": 3.35,
    "phosphorus_mg": 270.0,
    "potassium_mg": 384.0,
    "protein_g": 21.7,
    "salt_g": 2.3675,
    "sat_fat_g": 3.74,
    "sodium_mg": 947.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-397",
  "state": "Grilled",
  "subcategory": "JC",
  "tags": [
    "grilled",
    "jc",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
