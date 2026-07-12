/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-regular-slice-1-oz",
  "description": "Soy and meat-alternative products",
  "id": "usda-fndds-2707471",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-regular-slice-1-oz",
      "kind": "unit",
      "label": "1 regular slice (1 oz)"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-thin-slice",
      "kind": "unit",
      "label": "1 thin slice"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Luncheon slice, meatless-beef, chicken, salami or turkey",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 4.44,
    "energy_kcal": 189.0,
    "fat_g": 11.1,
    "fibre_g": 1.1,
    "folate_ug": 100.0,
    "iron_mg": 1.8,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 442.0,
    "potassium_mg": 200.0,
    "protein_g": 17.8,
    "salt_g": 1.7775,
    "sat_fat_g": 1.34,
    "sodium_mg": 711.0,
    "sugar_g": 2.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707471",
  "state": "Unspecified",
  "subcategory": "Soy and meat-alternative products",
  "tags": [
    "meat-and-poultry",
    "soy-and-meat-alternative-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
