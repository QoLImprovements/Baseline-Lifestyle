/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172749",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 4.6,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "6-crackers-triscuits-regular-size",
      "kind": "unit",
      "label": "6 crackers, Triscuits, regular size"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "10-triscuit-bits",
      "kind": "unit",
      "label": "10 Triscuit Bits"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    }
  ],
  "name": "Crackers, whole-wheat",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 69.6,
    "energy_kcal": 1790.0,
    "fat_g": 14.1,
    "fibre_g": 10.3,
    "folate_ug": 28.0,
    "iron_mg": 3.34,
    "magnesium_mg": 110.0,
    "omega3_g": 0.832,
    "phosphorus_mg": 331.0,
    "potassium_mg": 345.0,
    "protein_g": 10.6,
    "salt_g": 2.0,
    "sat_fat_g": 2.06,
    "sodium_mg": 800.0,
    "sugar_g": 1.19,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.41,
    "vitamin_k_ug": 27.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172749",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
