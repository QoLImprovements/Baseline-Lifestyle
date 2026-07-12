/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-medium-meatball",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706547",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-medium-meatball",
      "kind": "unit",
      "label": "1 medium meatball"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-cocktail-meatball",
      "kind": "unit",
      "label": "1 cocktail meatball"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-small-meatball",
      "kind": "unit",
      "label": "1 small meatball"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "1-large-meatball",
      "kind": "unit",
      "label": "1 large meatball"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    }
  ],
  "name": "Meat loaf made with chicken or turkey",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 8.08,
    "energy_kcal": 172.0,
    "fat_g": 7.27,
    "fibre_g": 0.6,
    "folate_ug": 24.0,
    "iron_mg": 1.51,
    "magnesium_mg": 25.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 197.0,
    "potassium_mg": 246.0,
    "protein_g": 18.8,
    "salt_g": 1.115,
    "sat_fat_g": 1.91,
    "sodium_mg": 446.0,
    "sugar_g": 2.12,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706547",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
