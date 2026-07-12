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
  "id": "usda-fndds-2710800",
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
  "name": "Cabbage, cooked, as ingredient",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 6.65,
    "energy_kcal": 32.0,
    "fat_g": 0.24,
    "fibre_g": 2.6,
    "folate_ug": 38.0,
    "iron_mg": 0.07,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 216.0,
    "protein_g": 1.0,
    "salt_g": 0.0425,
    "sat_fat_g": 0.035,
    "sodium_mg": 17.0,
    "sugar_g": 3.33,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 35.7,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 61.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710800",
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
