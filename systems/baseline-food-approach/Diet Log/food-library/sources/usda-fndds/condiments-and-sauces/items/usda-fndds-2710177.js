/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-packet",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2710177",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Sauce, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 12.7,
    "energy_kcal": 109.0,
    "fat_g": 5.67,
    "fibre_g": 0.2,
    "folate_ug": 3.0,
    "iron_mg": 0.19,
    "magnesium_mg": 7.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 34.0,
    "potassium_mg": 56.0,
    "protein_g": 1.59,
    "salt_g": 2.42,
    "sat_fat_g": 2.61,
    "sodium_mg": 968.0,
    "sugar_g": 4.56,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710177",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "condiments-and-sauces",
    "dips-gravies-other-sauces",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
