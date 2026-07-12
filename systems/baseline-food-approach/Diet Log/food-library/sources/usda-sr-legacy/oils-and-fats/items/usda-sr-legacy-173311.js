/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173311",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 221.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "McDONALD'S, Hotcakes (with 2 pats margarine & syrup)",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 46.1,
    "energy_kcal": 1140.0,
    "fat_g": 8.06,
    "fibre_g": 0.9,
    "folate_ug": 65.0,
    "iron_mg": 1.28,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 177.0,
    "potassium_mg": 125.0,
    "protein_g": 4.05,
    "salt_g": 0.7075,
    "sat_fat_g": 0.818,
    "sodium_mg": 283.0,
    "sugar_g": 20.6,
    "vitamin_a_ug": 241.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173311",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
