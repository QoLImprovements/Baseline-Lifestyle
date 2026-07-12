/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "6-pieces",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173297",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "6-pieces",
      "kind": "unit",
      "label": "6 pieces"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "4-pieces",
      "kind": "unit",
      "label": "4 pieces"
    },
    {
      "gramsPerUnit": 159.0,
      "key": "10-pieces",
      "kind": "unit",
      "label": "10 pieces"
    }
  ],
  "name": "McDONALD'S, Chicken McNUGGETS",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 15.1,
    "energy_kcal": 1260.0,
    "fat_g": 19.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.89,
    "magnesium_mg": 24.0,
    "omega3_g": 0.304,
    "phosphorus_mg": 272.0,
    "potassium_mg": 252.0,
    "protein_g": 15.8,
    "salt_g": 1.415,
    "sat_fat_g": 3.26,
    "sodium_mg": 566.0,
    "sugar_g": 0.08,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173297",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
