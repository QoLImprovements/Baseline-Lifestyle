/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "500g fruit, 75g water; stones removed",
  "id": "cofid-current-14-029",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Apricots, stewed without sugar",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 6.2,
    "energy_kcal": 27.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.8,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 200.0,
    "protein_g": 0.7,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 6.2,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-029",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
