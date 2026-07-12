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
  "id": "usda-sr-legacy-170340",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 191.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "KFC, Coleslaw",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 15.6,
    "energy_kcal": 602.0,
    "fat_g": 8.64,
    "fibre_g": 2.0,
    "folate_ug": 0.0,
    "iron_mg": 0.21,
    "magnesium_mg": 9.0,
    "omega3_g": 0.566,
    "phosphorus_mg": 20.0,
    "potassium_mg": 140.0,
    "protein_g": 0.91,
    "salt_g": 0.4725,
    "sat_fat_g": 1.3,
    "sodium_mg": 189.0,
    "sugar_g": 13.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 14.6,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 70.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170340",
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
