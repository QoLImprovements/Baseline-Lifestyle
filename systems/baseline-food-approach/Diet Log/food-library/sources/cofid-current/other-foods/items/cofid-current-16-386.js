/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, frozen and chilled",
  "id": "cofid-current-16-386",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bass, sea, flesh only, baked",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 0.0,
    "energy_kcal": 154.0,
    "fat_g": 6.8,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.27,
    "magnesium_mg": 35.0,
    "omega3_g": 1.23,
    "phosphorus_mg": 231.0,
    "potassium_mg": 390.0,
    "protein_g": 23.2,
    "salt_g": 0.2,
    "sat_fat_g": 1.47,
    "sodium_mg": 80.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-386",
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
