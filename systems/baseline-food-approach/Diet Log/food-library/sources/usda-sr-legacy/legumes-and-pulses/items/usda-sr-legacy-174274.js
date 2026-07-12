/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup-stirred",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174274",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "cup-stirred",
      "kind": "unit",
      "label": "cup, stirred"
    }
  ],
  "name": "Soy flour, full-fat, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 188.0,
    "carbs_g": 30.4,
    "energy_kcal": 1840.0,
    "fat_g": 21.9,
    "fibre_g": 9.7,
    "folate_ug": 227.0,
    "iron_mg": 5.82,
    "magnesium_mg": 369.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 476.0,
    "potassium_mg": 2040.0,
    "protein_g": 38.1,
    "salt_g": 0.03,
    "sat_fat_g": 3.16,
    "sodium_mg": 12.0,
    "sugar_g": 7.61,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.98,
    "vitamin_k_ug": 71.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174274",
  "state": "Roasted",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
