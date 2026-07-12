/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-large-or-thick-slice",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706115",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    }
  ],
  "name": "Turkey, light or dark meat, fried, coated, skin not eaten",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 1.42,
    "energy_kcal": 165.0,
    "fat_g": 5.06,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.01,
    "magnesium_mg": 28.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 221.0,
    "potassium_mg": 235.0,
    "protein_g": 27.2,
    "salt_g": 0.685,
    "sat_fat_g": 1.43,
    "sodium_mg": 274.0,
    "sugar_g": 0.11,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706115",
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
