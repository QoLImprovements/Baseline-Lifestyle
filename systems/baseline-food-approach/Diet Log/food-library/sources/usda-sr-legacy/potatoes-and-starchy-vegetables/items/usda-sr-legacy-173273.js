/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "serving-14-round-pieces",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173273",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "serving-14-round-pieces",
      "kind": "unit",
      "label": "serving 14 round pieces"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "patty",
      "kind": "unit",
      "label": "patty"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "serving-29-round-pieces",
      "kind": "unit",
      "label": "serving 29 round pieces"
    },
    {
      "gramsPerUnit": 5.5,
      "key": "round-piece",
      "kind": "unit",
      "label": "round piece"
    }
  ],
  "name": "Fast foods, potatoes, hash browns, round pieces or patty",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 28.9,
    "energy_kcal": 1140.0,
    "fat_g": 17.0,
    "fibre_g": 2.7,
    "folate_ug": 12.0,
    "iron_mg": 0.6,
    "magnesium_mg": 21.0,
    "omega3_g": 0.441,
    "phosphorus_mg": 98.0,
    "potassium_mg": 355.0,
    "protein_g": 2.58,
    "salt_g": 1.415,
    "sat_fat_g": 2.54,
    "sodium_mg": 566.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.4,
    "vitamin_e_mg": 2.62,
    "vitamin_k_ug": 9.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173273",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
