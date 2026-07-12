/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "pattie",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174287",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "pattie",
      "kind": "unit",
      "label": "pattie"
    }
  ],
  "name": "Veggie burgers or soyburgers, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 14.3,
    "energy_kcal": 177.0,
    "fat_g": 6.3,
    "fibre_g": 4.9,
    "folate_ug": 124.0,
    "iron_mg": 2.41,
    "magnesium_mg": 56.0,
    "omega3_g": 0.081,
    "phosphorus_mg": 206.0,
    "potassium_mg": 333.0,
    "protein_g": 15.7,
    "salt_g": 1.4225,
    "sat_fat_g": 1.44,
    "sodium_mg": 569.0,
    "sugar_g": 1.07,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174287",
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
