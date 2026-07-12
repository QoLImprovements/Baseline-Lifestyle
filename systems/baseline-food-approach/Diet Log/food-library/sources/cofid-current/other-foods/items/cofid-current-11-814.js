/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products",
  "id": "cofid-current-11-814",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flapjacks, retail",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 55.7,
    "energy_kcal": 434.0,
    "fat_g": 22.8,
    "fibre_g": 5.2,
    "folate_ug": 8.0,
    "iron_mg": 1.88,
    "magnesium_mg": 47.0,
    "omega3_g": 0.42,
    "phosphorus_mg": 177.0,
    "potassium_mg": 207.0,
    "protein_g": 5.1,
    "salt_g": 0.485,
    "sat_fat_g": 10.25,
    "sodium_mg": 194.0,
    "sugar_g": 29.2,
    "vitamin_a_ug": 86.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-814",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
