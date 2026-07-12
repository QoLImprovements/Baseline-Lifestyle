/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "cup",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172087",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "POPEYES, Coleslaw",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 14.1,
    "energy_kcal": 674.0,
    "fat_g": 11.2,
    "fibre_g": 1.7,
    "folate_ug": 0.0,
    "iron_mg": 0.23,
    "magnesium_mg": 7.0,
    "omega3_g": 0.048,
    "phosphorus_mg": 20.0,
    "potassium_mg": 118.0,
    "protein_g": 0.98,
    "salt_g": 0.545,
    "sat_fat_g": 1.89,
    "sodium_mg": 218.0,
    "sugar_g": 10.8,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 14.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172087",
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
