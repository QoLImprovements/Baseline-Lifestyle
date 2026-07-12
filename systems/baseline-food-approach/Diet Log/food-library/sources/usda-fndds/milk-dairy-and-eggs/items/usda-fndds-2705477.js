/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-fl-oz",
  "description": "Flavored milk, reduced fat",
  "id": "usda-fndds-2705477",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chocolate milk, Nesquik, NS as to type of milk",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 10.1,
    "energy_kcal": 74.0,
    "fat_g": 2.15,
    "fibre_g": 0.3,
    "folate_ug": 1.0,
    "iron_mg": 0.0,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 102.0,
    "potassium_mg": 164.0,
    "protein_g": 3.41,
    "salt_g": 0.1125,
    "sat_fat_g": 1.31,
    "sodium_mg": 45.0,
    "sugar_g": 9.62,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705477",
  "state": "Unspecified",
  "subcategory": "Flavored milk, reduced fat",
  "tags": [
    "flavored-milk-reduced-fat",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
