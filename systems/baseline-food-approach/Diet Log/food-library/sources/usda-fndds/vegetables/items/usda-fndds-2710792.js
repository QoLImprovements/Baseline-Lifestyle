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
  "id": "usda-fndds-2710792",
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
  "name": "Broccoli, cooked, as ingredient",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 6.53,
    "energy_kcal": 41.0,
    "fat_g": 0.35,
    "fibre_g": 2.5,
    "folate_ug": 58.0,
    "iron_mg": 0.72,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 316.0,
    "protein_g": 2.68,
    "salt_g": 0.095,
    "sat_fat_g": 0.041,
    "sodium_mg": 38.0,
    "sugar_g": 1.46,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 80.8,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 106.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710792",
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
