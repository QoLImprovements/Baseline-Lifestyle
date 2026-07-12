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
  "id": "usda-fndds-2710799",
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
  "name": "Red pepper, cooked, as ingredient",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 7.15,
    "energy_kcal": 33.0,
    "fat_g": 0.14,
    "fibre_g": 1.3,
    "folate_ug": 43.0,
    "iron_mg": 0.38,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 229.0,
    "protein_g": 0.97,
    "salt_g": 0.0,
    "sat_fat_g": 0.063,
    "sodium_mg": 0.0,
    "sugar_g": 4.52,
    "vitamin_a_ug": 160.0,
    "vitamin_c_mg": 130.0,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710799",
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
