/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-fl-oz-with-ice",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710810",
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
  "name": "Vegetables as ingredient in curry",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 11.7,
    "energy_kcal": 53.0,
    "fat_g": 0.2,
    "fibre_g": 2.2,
    "folate_ug": 27.0,
    "iron_mg": 0.56,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 311.0,
    "protein_g": 1.81,
    "salt_g": 0.05,
    "sat_fat_g": 0.051,
    "sodium_mg": 20.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 98.0,
    "vitamin_c_mg": 17.1,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710810",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "not-included-in-a-food-category",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
