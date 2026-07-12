/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "12 samples, 8 brands, garden peas and petit pois",
  "id": "cofid-current-13-527",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, frozen, raw",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 10.7,
    "energy_kcal": 68.0,
    "fat_g": 0.7,
    "fibre_g": 5.3,
    "folate_ug": 50.0,
    "iron_mg": 1.75,
    "magnesium_mg": 26.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 86.0,
    "potassium_mg": 171.0,
    "protein_g": 5.3,
    "salt_g": 0.01,
    "sat_fat_g": 0.13,
    "sodium_mg": 4.0,
    "sugar_g": 5.7,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 22.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-527",
  "state": "Frozen",
  "subcategory": "DF",
  "tags": [
    "df",
    "frozen",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
