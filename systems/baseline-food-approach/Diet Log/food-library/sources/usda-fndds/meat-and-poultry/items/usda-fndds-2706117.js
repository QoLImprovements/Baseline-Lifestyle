/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-medium-slice",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706117",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-boneless-cooked-skinless",
      "kind": "unit",
      "label": "1 oz, boneless, cooked, skinless"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    }
  ],
  "name": "Turkey, light or dark meat, stewed, skin not eaten",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.19,
    "energy_kcal": 158.0,
    "fat_g": 2.66,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.18,
    "magnesium_mg": 37.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 262.0,
    "potassium_mg": 324.0,
    "protein_g": 31.2,
    "salt_g": 1.525,
    "sat_fat_g": 0.632,
    "sodium_mg": 610.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706117",
  "state": "Unspecified",
  "subcategory": "Turkey, duck, other poultry",
  "tags": [
    "meat-and-poultry",
    "turkey-duck-other-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
