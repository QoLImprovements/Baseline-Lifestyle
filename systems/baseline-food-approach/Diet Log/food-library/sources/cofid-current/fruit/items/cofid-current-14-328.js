/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "22 samples, Honeydew, autumn and winter, whole and pre-prepared slices",
  "id": "cofid-current-14-328",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Melon, yellow flesh, flesh only",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 6.8,
    "energy_kcal": 29.0,
    "fat_g": 0.1,
    "fibre_g": 0.7,
    "folate_ug": 13.0,
    "iron_mg": 0.18,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 180.0,
    "protein_g": 0.5,
    "salt_g": 0.0275,
    "sat_fat_g": 0.03,
    "sodium_mg": 11.0,
    "sugar_g": 6.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-328",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
