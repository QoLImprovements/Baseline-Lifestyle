/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706504",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-medium-meatball",
      "kind": "unit",
      "label": "1 medium meatball"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-small-meatball",
      "kind": "unit",
      "label": "1 small meatball"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-cocktail-meatball",
      "kind": "unit",
      "label": "1 cocktail meatball"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "1-large-meatball",
      "kind": "unit",
      "label": "1 large meatball"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "1-large-slice",
      "kind": "unit",
      "label": "1 large slice"
    }
  ],
  "name": "Meat loaf made with ham",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 6.16,
    "energy_kcal": 179.0,
    "fat_g": 7.52,
    "fibre_g": 0.3,
    "folate_ug": 14.0,
    "iron_mg": 1.26,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 250.0,
    "potassium_mg": 322.0,
    "protein_g": 20.6,
    "salt_g": 2.1975,
    "sat_fat_g": 2.26,
    "sodium_mg": 879.0,
    "sugar_g": 1.67,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706504",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
