/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-fl-oz-with-ice",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710813",
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
  "name": "Sauce as ingredient in hamburgers",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 17.1,
    "energy_kcal": 272.0,
    "fat_g": 22.8,
    "fibre_g": 0.6,
    "folate_ug": 8.0,
    "iron_mg": 0.43,
    "magnesium_mg": 13.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 33.0,
    "potassium_mg": 190.0,
    "protein_g": 1.34,
    "salt_g": 2.1125,
    "sat_fat_g": 3.54,
    "sodium_mg": 845.0,
    "sugar_g": 13.1,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 1.9,
    "vitamin_k_ug": 50.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710813",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "condiments-and-sauces",
    "not-included-in-a-food-category",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
