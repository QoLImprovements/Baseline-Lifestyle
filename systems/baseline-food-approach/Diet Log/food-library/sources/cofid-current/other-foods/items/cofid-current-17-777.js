/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "7 samples, 4 brands",
  "id": "cofid-current-17-777",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Liquorice allsorts",
  "nutritionPerBasis": {
    "calcium_mg": 170.0,
    "carbs_g": 76.7,
    "energy_kcal": 349.0,
    "fat_g": 5.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 7.3,
    "magnesium_mg": 76.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 44.0,
    "potassium_mg": 600.0,
    "protein_g": 3.7,
    "salt_g": 0.1425,
    "sat_fat_g": 3.6,
    "sodium_mg": 57.0,
    "sugar_g": 62.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-777",
  "state": "Unspecified",
  "subcategory": "SEC",
  "tags": [
    "other-foods",
    "sec",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
