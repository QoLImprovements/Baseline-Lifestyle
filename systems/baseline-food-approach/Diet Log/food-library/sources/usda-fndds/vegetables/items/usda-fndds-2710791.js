/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-fl-oz-with-ice",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710791",
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
  "name": "Spinach, cooked, as ingredient",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 3.11,
    "energy_kcal": 33.0,
    "fat_g": 0.71,
    "fibre_g": 1.9,
    "folate_ug": 100.0,
    "iron_mg": 1.24,
    "magnesium_mg": 109.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 541.0,
    "protein_g": 3.42,
    "salt_g": 0.315,
    "sat_fat_g": 0.074,
    "sodium_mg": 126.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 342.0,
    "vitamin_c_mg": 25.0,
    "vitamin_e_mg": 2.39,
    "vitamin_k_ug": 568.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710791",
  "state": "Cooked",
  "subcategory": "Not included in a food category",
  "tags": [
    "cooked",
    "not-included-in-a-food-category",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
