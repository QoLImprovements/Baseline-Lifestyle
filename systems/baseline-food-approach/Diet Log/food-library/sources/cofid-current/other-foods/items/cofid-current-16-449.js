/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 assorted samples. Greek dish based on cod's roe",
  "id": "cofid-current-16-449",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Taramasalata",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 7.4,
    "energy_kcal": 517.0,
    "fat_g": 52.9,
    "fibre_g": 0.3,
    "folate_ug": 4.0,
    "iron_mg": 0.4,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 60.0,
    "protein_g": 3.2,
    "salt_g": 1.125,
    "sat_fat_g": 4.1,
    "sodium_mg": 450.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-449",
  "state": "Unspecified",
  "subcategory": "JR",
  "tags": [
    "jr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
