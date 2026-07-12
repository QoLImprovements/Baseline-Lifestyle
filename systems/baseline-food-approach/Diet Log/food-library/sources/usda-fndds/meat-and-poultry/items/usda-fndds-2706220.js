/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Cold cuts and cured meats",
  "id": "usda-fndds-2706220",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "1-can-5-5-oz",
      "kind": "unit",
      "label": "1 can (5.5 oz)"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Meat spread or potted meat, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 11.9,
    "energy_kcal": 235.0,
    "fat_g": 17.3,
    "fibre_g": 0.2,
    "folate_ug": 2.0,
    "iron_mg": 0.79,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 110.0,
    "protein_g": 7.66,
    "salt_g": 2.525,
    "sat_fat_g": 5.98,
    "sodium_mg": 1010.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.74,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706220",
  "state": "Unspecified",
  "subcategory": "Cold cuts and cured meats",
  "tags": [
    "cold-cuts-and-cured-meats",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
