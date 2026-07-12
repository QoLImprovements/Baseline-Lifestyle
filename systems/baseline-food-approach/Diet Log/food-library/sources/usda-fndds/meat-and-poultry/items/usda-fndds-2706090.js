/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cubic-inch",
  "description": "Chicken patties, nuggets and tenders",
  "id": "usda-fndds-2706090",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-nugget",
      "kind": "unit",
      "label": "1 nugget"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-fillet",
      "kind": "unit",
      "label": "1 fillet"
    }
  ],
  "name": "Chicken fillet, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 2.36,
    "energy_kcal": 151.0,
    "fat_g": 5.81,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.37,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 197.0,
    "potassium_mg": 226.0,
    "protein_g": 22.3,
    "salt_g": 1.125,
    "sat_fat_g": 0.887,
    "sodium_mg": 450.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706090",
  "state": "Grilled",
  "subcategory": "Chicken patties, nuggets and tenders",
  "tags": [
    "chicken-patties-nuggets-and-tenders",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
