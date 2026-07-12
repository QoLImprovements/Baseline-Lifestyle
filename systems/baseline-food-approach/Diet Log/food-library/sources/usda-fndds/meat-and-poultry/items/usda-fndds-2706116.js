/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-small-or-thin-slice",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706116",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-boneless-cooked",
      "kind": "unit",
      "label": "1 oz, boneless, cooked"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-diced-cooked",
      "kind": "unit",
      "label": "1 cup, diced, cooked"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Turkey, light or dark meat, fried, coated, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 1.42,
    "energy_kcal": 192.0,
    "fat_g": 8.51,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.04,
    "magnesium_mg": 28.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 217.0,
    "potassium_mg": 231.0,
    "protein_g": 26.2,
    "salt_g": 0.675,
    "sat_fat_g": 2.42,
    "sodium_mg": 270.0,
    "sugar_g": 0.11,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706116",
  "state": "Fried",
  "subcategory": "Turkey, duck, other poultry",
  "tags": [
    "fried",
    "meat-and-poultry",
    "turkey-duck-other-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
