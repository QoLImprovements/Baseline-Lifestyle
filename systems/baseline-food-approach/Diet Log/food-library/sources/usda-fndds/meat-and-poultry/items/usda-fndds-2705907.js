/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Lamb, goat, game",
  "id": "usda-fndds-2705907",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    }
  ],
  "name": "Lamb, ground",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 0.0,
    "energy_kcal": 281.0,
    "fat_g": 19.5,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 1.78,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 199.0,
    "potassium_mg": 336.0,
    "protein_g": 24.6,
    "salt_g": 0.97,
    "sat_fat_g": 8.06,
    "sodium_mg": 388.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705907",
  "state": "Unspecified",
  "subcategory": "Lamb, goat, game",
  "tags": [
    "lamb-goat-game",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
