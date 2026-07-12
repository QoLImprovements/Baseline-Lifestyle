/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172439",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "strip",
      "kind": "unit",
      "label": "strip"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "oz-cooked-yield",
      "kind": "unit",
      "label": "oz cooked, yield"
    }
  ],
  "name": "Bacon, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 5.31,
    "energy_kcal": 1290.0,
    "fat_g": 29.5,
    "fibre_g": 2.6,
    "folate_ug": 42.0,
    "iron_mg": 2.41,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 170.0,
    "protein_g": 11.7,
    "salt_g": 3.65,
    "sat_fat_g": 4.62,
    "sodium_mg": 1460.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.9,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172439",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
