/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-fl-oz-with-ice",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710807",
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
  "name": "Tomatoes as ingredient in omelet",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 5.49,
    "energy_kcal": 25.0,
    "fat_g": 0.23,
    "fibre_g": 1.5,
    "folate_ug": 14.0,
    "iron_mg": 0.32,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 278.0,
    "protein_g": 1.1,
    "salt_g": 0.015,
    "sat_fat_g": 0.038,
    "sodium_mg": 6.0,
    "sugar_g": 3.42,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 19.1,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 8.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710807",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "not-included-in-a-food-category",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
