/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup-sliced",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-169887",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "frankfurter",
      "kind": "unit",
      "label": "frankfurter"
    }
  ],
  "name": "Frankfurter, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 7.7,
    "energy_kcal": 974.0,
    "fat_g": 13.7,
    "fibre_g": 3.9,
    "folate_ug": 78.0,
    "iron_mg": 1.41,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 344.0,
    "potassium_mg": 98.0,
    "protein_g": 19.6,
    "salt_g": 1.1775,
    "sat_fat_g": 1.65,
    "sodium_mg": 471.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.92,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169887",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
