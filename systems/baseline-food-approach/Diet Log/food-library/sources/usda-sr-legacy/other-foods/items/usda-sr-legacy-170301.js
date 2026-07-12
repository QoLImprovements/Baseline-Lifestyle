/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "piece",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170301",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Fast foods, hush puppies",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 40.2,
    "energy_kcal": 296.0,
    "fat_g": 13.2,
    "fibre_g": 2.9,
    "folate_ug": 143.0,
    "iron_mg": 2.55,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 410.0,
    "potassium_mg": 256.0,
    "protein_g": 6.16,
    "salt_g": 2.0325,
    "sat_fat_g": 2.62,
    "sodium_mg": 813.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170301",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
