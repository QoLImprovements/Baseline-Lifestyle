/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-fl-oz-with-ice",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710784",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-fl-oz-with-ice",
      "kind": "unit",
      "label": "1 fl oz (with ice)"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-nfs",
      "kind": "unit",
      "label": "1 fl oz (NFS)"
    }
  ],
  "name": "Fish fillet, fried as ingredient in sandwiches",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 8.27,
    "energy_kcal": 195.0,
    "fat_g": 10.1,
    "fibre_g": 0.3,
    "folate_ug": 28.0,
    "iron_mg": 0.8,
    "magnesium_mg": 25.0,
    "omega3_g": 0.14,
    "phosphorus_mg": 250.0,
    "potassium_mg": 312.0,
    "protein_g": 18.2,
    "salt_g": 0.6,
    "sat_fat_g": 3.2,
    "sodium_mg": 240.0,
    "sugar_g": 0.14,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 14.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710784",
  "state": "Fried",
  "subcategory": "Not included in a food category",
  "tags": [
    "fish-and-seafood",
    "fried",
    "not-included-in-a-food-category"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
