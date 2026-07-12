/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-fl-oz-with-ice",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710781",
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
  "name": "Breakfast meat as ingredient in omelet",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 1.61,
    "energy_kcal": 252.0,
    "fat_g": 17.9,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.14,
    "magnesium_mg": 21.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 245.0,
    "potassium_mg": 367.0,
    "protein_g": 20.8,
    "salt_g": 2.75,
    "sat_fat_g": 5.81,
    "sodium_mg": 1100.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710781",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "meat-and-poultry",
    "not-included-in-a-food-category",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
