/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-breast-ns-as-to-size",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2705965",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-breast-ns-as-to-size",
      "kind": "unit",
      "label": "1 breast, NS as to size"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-small-breast",
      "kind": "unit",
      "label": "1 small breast"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-large-breast",
      "kind": "unit",
      "label": "1 large breast"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-medium-breast",
      "kind": "unit",
      "label": "1 medium breast"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    }
  ],
  "name": "Chicken breast, stewed, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 181.0,
    "fat_g": 8.28,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.5,
    "magnesium_mg": 23.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 183.0,
    "potassium_mg": 280.0,
    "protein_g": 24.7,
    "salt_g": 0.79,
    "sat_fat_g": 2.15,
    "sodium_mg": 316.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705965",
  "state": "Unspecified",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
