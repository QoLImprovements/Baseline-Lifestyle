/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "2-3% ABV. 10 samples, including Bavaria Permium, Carling Zest, Carling C2, Beck's Premier Light and own brand",
  "id": "cofid-current-17-750",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lager, low alcohol",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.5,
    "energy_kcal": 16.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.0,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 48.0,
    "protein_g": 0.3,
    "salt_g": 0.025,
    "sat_fat_g": 0.0,
    "sodium_mg": 10.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-750",
  "state": "Unspecified",
  "subcategory": "QA",
  "tags": [
    "other-foods",
    "qa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
