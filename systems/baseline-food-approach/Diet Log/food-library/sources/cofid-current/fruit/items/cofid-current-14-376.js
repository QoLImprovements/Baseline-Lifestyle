/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "11 samples, imported, whole and prepacked chunks",
  "id": "cofid-current-14-376",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pineapple, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 11.4,
    "energy_kcal": 45.0,
    "fat_g": 0.1,
    "fibre_g": 1.2,
    "folate_ug": 12.0,
    "iron_mg": 0.16,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 121.0,
    "protein_g": 0.5,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 53.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.21
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-376",
  "state": "Raw",
  "subcategory": "FA",
  "tags": [
    "fa",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
