/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Chicken patties, nuggets and tenders",
  "id": "usda-fndds-2706092",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-nugget",
      "kind": "unit",
      "label": "1 nugget"
    }
  ],
  "name": "Chicken nuggets, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 14.9,
    "energy_kcal": 307.0,
    "fat_g": 20.4,
    "fibre_g": 0.9,
    "folate_ug": 11.0,
    "iron_mg": 0.83,
    "magnesium_mg": 24.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 272.0,
    "potassium_mg": 251.0,
    "protein_g": 15.9,
    "salt_g": 1.485,
    "sat_fat_g": 3.57,
    "sodium_mg": 594.0,
    "sugar_g": 0.08,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.12,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706092",
  "state": "Unspecified",
  "subcategory": "Chicken patties, nuggets and tenders",
  "tags": [
    "chicken-patties-nuggets-and-tenders",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
