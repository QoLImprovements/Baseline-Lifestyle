/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Peeled bulb and leaves",
  "id": "cofid-current-13-352",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Spring onions, bulbs and tops, raw",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 3.0,
    "energy_kcal": 23.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 54.0,
    "iron_mg": 1.9,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 260.0,
    "protein_g": 2.0,
    "salt_g": 0.0175,
    "sat_fat_g": 0.1,
    "sodium_mg": 7.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 105.0,
    "vitamin_c_mg": 26.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-352",
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
