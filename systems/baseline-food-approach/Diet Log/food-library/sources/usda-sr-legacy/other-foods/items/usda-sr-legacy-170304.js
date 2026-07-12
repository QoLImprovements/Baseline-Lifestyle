/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "serving",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170304",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 5.5,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "CHICK-FIL-A, hash browns",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 30.5,
    "energy_kcal": 301.0,
    "fat_g": 18.5,
    "fibre_g": 3.2,
    "folate_ug": 13.0,
    "iron_mg": 0.65,
    "magnesium_mg": 25.0,
    "omega3_g": 0.614,
    "phosphorus_mg": 100.0,
    "potassium_mg": 456.0,
    "protein_g": 3.0,
    "salt_g": 1.135,
    "sat_fat_g": 2.78,
    "sodium_mg": 454.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.2,
    "vitamin_e_mg": 3.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170304",
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
