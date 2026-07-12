/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "package",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170300",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    },
    {
      "gramsPerUnit": 191.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Fast foods, coleslaw",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 14.9,
    "energy_kcal": 153.0,
    "fat_g": 9.91,
    "fibre_g": 1.9,
    "folate_ug": 0.0,
    "iron_mg": 0.22,
    "magnesium_mg": 8.0,
    "omega3_g": 0.286,
    "phosphorus_mg": 20.0,
    "potassium_mg": 129.0,
    "protein_g": 0.95,
    "salt_g": 0.5075,
    "sat_fat_g": 1.6,
    "sodium_mg": 203.0,
    "sugar_g": 12.2,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 14.6,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 70.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170300",
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
