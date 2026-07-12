/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-cooked-diced",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706107",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-boneless-cooked-skinless",
      "kind": "unit",
      "label": "1 oz, boneless, cooked, skinless"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    }
  ],
  "name": "Turkey, light meat, breaded, baked or fried, skin not eaten",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 6.46,
    "energy_kcal": 173.0,
    "fat_g": 3.69,
    "fibre_g": 0.4,
    "folate_ug": 18.0,
    "iron_mg": 1.02,
    "magnesium_mg": 32.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 229.0,
    "potassium_mg": 241.0,
    "protein_g": 27.3,
    "salt_g": 0.4925,
    "sat_fat_g": 0.976,
    "sodium_mg": 197.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706107",
  "state": "Baked",
  "subcategory": "Turkey, duck, other poultry",
  "tags": [
    "baked",
    "meat-and-poultry",
    "turkey-duck-other-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
