/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Milk shakes and other dairy drinks",
  "id": "usda-fndds-2705502",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Eggnog",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 8.05,
    "energy_kcal": 88.0,
    "fat_g": 4.19,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.2,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 165.0,
    "protein_g": 4.55,
    "salt_g": 0.135,
    "sat_fat_g": 2.59,
    "sodium_mg": 54.0,
    "sugar_g": 8.05,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705502",
  "state": "Unspecified",
  "subcategory": "Milk shakes and other dairy drinks",
  "tags": [
    "milk-dairy-and-eggs",
    "milk-shakes-and-other-dairy-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
